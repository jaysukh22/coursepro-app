import Link from "next/link";
import Slider from "react-slick";
import Counter from "../../src/components/Counter";
import Newsletter from "../../src/components/Newsletter";
import PageBanner from "../../src/components/PageBanner";
import Layout from "../../src/layout/Layout";
import {
  partnerSliderOne,
  teamSliderOne,
  testimonialSliderThree,
} from "../../src/sliderProps";
const Abouts = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      {/*====== End Breadcrumb Section ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Help to Create Great Business Future </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae
                </p>
                <ul className="check-style-one mb-30">
                  <li>Reflection 2022 Desktop Wallpapers Edition</li>
                  <li>Designing A Better Infinite Scroll</li>
                  <li>Manage your business account</li>
                </ul>
                <div className="about-button">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn filled-btn">Explore More Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Image Box ===*/}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <img src="assets/images/about/about-3.jpg" alt="" />
                  <div className="play-box">
                    <a
                      href="https://www.youtube.com/watch?v=TboWOSW7qCI"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="quote-box-four text-white">
                  <h3>Effective method for disease detection.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Abouts;
