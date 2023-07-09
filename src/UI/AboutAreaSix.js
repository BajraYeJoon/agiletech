import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const AboutAreaSix = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== AboutAreaSix start  ==================*/}
      <div className="about-area about-area-margin-bottom pd-top-120">
        <div className="container">
          <div className="box-shadow bg-white z-index-2 border-radius-5 p-xl-5 p-4">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-thumb-inner pe-xl-5 pb-5 me-xl-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <img
                    className="main-img"
                    src="assets/img/about/25.png"
                    alt="img"
                  />
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="XM6kTQPzzpQ"
                  onClose={() => setOpen(false)}
                />
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mt-5 mt-lg-0 mb-0">
                  <h2 className="title">समय र सही तरिकालाई प्राथमिकता</h2>
                  <p className="content">
                    साइबर र अरु ठाउँमा जानेर समय खर्च गर्नुपर्दैन। हाम्रो सेवा
                    तपाईंलाई आवश्यक जानकारी र दस्तावेजहरू प्रदान गरेर , तत्काल
                    रूपमा कानुनी कागजातहरू प्रदान गरिने छ । तपाईंको आवेदनहरू
                    तुरुन्त प्रोसेस गरिन्छन् र हाम्रो समर्थन टिमले सहयोग प्रदान
                    गर्ने छ |
                  </p>
                  <p className="small-title">
                    सही तरिकले आफुलाई चाहिएको प्राप्त गर्नुहोस र समय र पैसा को
                    बचत गर्नुहोस |
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/26.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/26.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                        <div className="thumb mb-3">
                          <img
                            className="rotate-img"
                            src="assets/img/about/27.png"
                            alt="img"
                          />
                        </div>
                        <div className="details">
                          <h6 className="mb-0">Cyber synapse</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== AboutAreaSix End  ==================*/}
    </>
  );
};

export default AboutAreaSix;
