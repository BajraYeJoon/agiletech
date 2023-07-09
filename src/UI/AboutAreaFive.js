import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaFive = () => {
  return (
    <>
      {/* =============== About Area Five End ===============*/}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner">
                <img
                  className="main-img"
                  src="assets/img/about/21.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 ps-xl-5">
                <h2 className="title">कागजात निर्माण छिटो र सरल बनाउनुहोस्</h2>
                <p className="content mb-4">
                  आफ्नो गाउपालिकामा सक्कल कागजात लिएर जानुहोस् र डिजिटल कागजात
                  पाउनुहोस्।
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> भर्पर्दो | विश्वसनीय
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> २४/७ ग्राहक सेवा
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle className="sky" /> सुरक्षित | गोप्य
                      </li>
                      <li>
                        <FaCheckCircle className="sky" /> समयको बचत
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  className="btn btn-base-color border-radius-5"
                  to="/about"
                >
                  अधिक जान्नुहोस् <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Five End ===============*/}
    </>
  );
};

export default AboutAreaFive;
