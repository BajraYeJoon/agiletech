import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className="service-area bg-gray bg-relative pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">हाम्रो सेवाहरु</h2>
              </div>
            </div>
          </div>
          <div className="row custom-no-gutter">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/7.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">
                      जन्म, मृत्यु, विवाह प्रमाणपत्र
                    </Link>
                  </h5>
                  <p className="mb-0">
                    समय र पैसाको बचत गर्नुहोस्। सुरक्षित र गोप्यताको पूर्ण
                    प्राथमिकता दिइएको हाम्रो प्लेटफार्म बाट जन्म प्रमाणपत्र
                    प्राप्त गर्नुहोस्।
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-left">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/8.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">अन्य कानुनी फारमहरू</Link>
                  </h5>
                  <p className="mb-0">
                    कानुनी कागजातहरूको उत्पादनलाई साइबरमा जाने आवश्यकता नपर्ने
                    गरी, तत्काल उत्पादन गर्ने गरी सहज गर्ने
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none">
              <div className="service-thumb service-middle-section align-self-end">
                <img src="assets/img/about/22.webp" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/10.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">२४/७ आवश्यक सहायता </Link>
                  </h5>
                  <p className="mb-0">
                    कुनै समस्या जानकारीका लागि हामिलाई सम्पर्क गर्न सक्नुहुनेछ
                  </p>
                </div>
              </div>
              <div className="single-service-inner-3 single-service-inner-3-right">
                <div className="thumb">
                  <div className="thumb-inner">
                    <img src="assets/img/service-icon/11.svg" alt="img" />
                  </div>
                </div>
                <div className="details">
                  <h5 className="mb-3">
                    <Link to="/service-details">कागजात प्राप्ति PDF मा</Link>
                  </h5>
                  <p className="mb-0">
                    हाम्रो सेवा तपाईंलाई तत्कालिन, प्रभावी र त्रुटिहीन ढंगले
                    कानुनी कागजातहरू उत्पादन गर्ने माध्यम प्रदान गर्दछ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
