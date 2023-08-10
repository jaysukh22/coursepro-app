export default {
    loginEndpoint: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
    registerEndpoint: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`,
    emailVerificationApiEndpoint:`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verifyEmail`,
    updatePasswordEndpoint:`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/updatePassword`,
    storageTokenKeyName: 'accessToken',
    onTokenExpiration: 'refreshToken' // logout | refreshToken
  }
  