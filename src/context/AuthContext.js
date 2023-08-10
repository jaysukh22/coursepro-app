// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  emailVerification: () => Promise.resolve(),
  updatePassword: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      const userData = window.localStorage.getItem('userData')
      if (storedToken) {
        setLoading(false)
        setUser(userData)
      } else {
        localStorage.removeItem('userData')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
        setUser(null)
        setLoading(false)
        if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
          router.replace('/login')
        }
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLogin = (params, errorCallback) => {
    axios
      .post(authConfig.loginEndpoint, params)
      .then(async response => {
        console.log("response.data.userData",response);
        params.rememberMe ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token) : null
        const returnUrl = router.query.returnUrl
      
        setUser(response.data.userData)
        params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
        toast.success('Login successfully')
      })
      .catch(err => {
        toast.error(err?.response?.data?.error)
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    // router.push('/login')
    toast.success('Logout successfully')
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(async response => {
        const role = response.data.userData.role
        if (role === 'student') {
          router.replace('/landing-page')
        } else if (role === 'enterprise') {
          router.replace('enterprise-profile')
        } else {
          router.replace('admin')
        }
        toast.success('Please verify your email address')
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
        toast.error('Somthing went wrong')
      })
  }

  const emailVerificationApi = async (params, errorCallback) => {
    await axios
      .put(authConfig.emailVerificationApiEndpoint, params)
      .then(response => {
        router.replace('/landing-page')
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
        toast.error('Somthing went wrong')
      })
  }

  const handleUpdatePassword = async (params, errorCallback) => {
    await axios
      .put(authConfig.updatePasswordEndpoint, params)
      .then(async response => {
        if (response && response.status === 200) {
          toast.success('Change password successfully')
        }
      })
      .catch(err => {
        if (errorCallback) errorCallback(err)
        toast.error(err.response.data.message)
      })
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    emailVerification: emailVerificationApi,
    updatePassword: handleUpdatePassword
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
