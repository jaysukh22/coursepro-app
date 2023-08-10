import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-three p-r footer-default text-white footer-dark z-1">
      <div className="container">
        {/*=== Footer Widget ===*/}
        <div className="footer-widget-wrapper pt-80 pb-35">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
                <div className="footer-content">
                  <div className="footer-logo">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/footer-logo-1.png"
                          alt="Footer Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Edtia is a high end IT services, training & consulting
                    organization providing IT services, training & consulting in
                    the field of Cloud Computing, Big Data & Analytics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Our Courses</h4>
                <div className="footer-content">
                  <ul className="widget-nav">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">How it works</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Download</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Resources</h4>
                <div className="footer-content">
                  <ul className="widget-nav">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">
                        Affiliate <span className="status">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Changelog</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Useful Links</h4>
                <div className="footer-content">
                  <ul className="widget-nav">
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Sales</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
                <h4 className="widget-title">Support</h4>
                <div className="footer-content">
                  <div className="contact-info-box d-flex mb-10">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      <p>55 Main Street, 2nd Block 3rd Floor, New York</p>
                    </div>
                  </div>
                  <div className="contact-info-box d-flex mb-10">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-box d-flex mb-10">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="text">
                      <p>
                        <a href="tel:+012(345)6789">+012 (345) 6789</a>
                      </p>
                    </div>
                  </div>
                  <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}

      <div className="footer-copyright border-top-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="footer-text text-center">
                <p>Copyright @ 2023 . All Rights reserved by Collage Dao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
