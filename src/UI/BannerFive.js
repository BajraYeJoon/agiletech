import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerFive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerFive Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 pb-0 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-5/5.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-xl-5 align-self-center">
              <div className="banner-inner pe-xl-4 pb-5">
                <h6
                  className="bg-base-2 text-white subtitle"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  छिटो र भरपर्दो कागजात निर्माण
                </h6>
                <h2
                  className="title text-white"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  अब अनलाइनबाटै जन्म, मृत्यु, विवाह र अन्य कागजातहरू सिर्जना
                  गर्नुहोस्
                </h2>
                <p
                  className="content pe-xl-4"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500"
                >
                  साइबर जानु नपर्ने, सहजै कागजात प्राप्त गर्नुहोस् र समयको बचत
                  गर्नुहोस्
                </p>
                <Link
                  className="btn btn-border-base-2"
                  data-aos="fade-right"
                  data-aos-delay="450"
                  data-aos-duration="1500"
                  to="/about"
                >
                  सुरु गर्नुहोस् <FaPlus />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-9 align-self-end">
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-5/4.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-5/3.png"
                    alt="img"
                  />
                  <div>
                    <img
                      className="main-img"
                      src="assets/img/banner-5/1.svg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerFive End ==================*/}
    </>
  );
};

export default BannerFive;
