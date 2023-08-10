import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, projectsSliderOne } from "../src/sliderProps";
import { Carousel } from "react-bootstrap";

const Index = () => {
  return (
    <Layout>
      {/*====== Start Hero Section ======*/}
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              src="assets/images/hero/hero-bg-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="assets/images/hero/hero-bg-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="assets/images/hero/hero-bg-1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div className="card">
              <img
                src="assets/images/features/img-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12">
            <div className="card">
              <img
                src="assets/images/features/img-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12">
            <div className="card">
              <img
                src="assets/images/features/img-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== End Fact Section ======*/}
      {/*====== Start Project Section ======*/}
      <section className="project-section pt-75 pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Latest Project &amp; Case</span>
                <h2>Let’s Looks Our Global Projects</h2>
              </div>
            </div>
          </div>
          {/*=== Project Slider ===*/}
          <Slider {...projectsSliderOne} className="projects-slider-one">
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-1.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon d-flex">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-3.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-4.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-5.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Project Item ===*/}
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/project/img-2.jpg"
                  alt="Project Image"
                />
                <div className="project-hover">
                  <div className="hover-content d-flex">
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                    <div className="icon">
                      <i className="flaticon-finance" />
                    </div>
                    <div className="text">
                      <h3 className="title">
                        <Link legacyBehavior href="/project-details">
                          <a>Financial Management</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
