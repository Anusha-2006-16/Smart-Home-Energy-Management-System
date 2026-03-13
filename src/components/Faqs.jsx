import React from "react";
import "./css/faqs.css"
export default function Faqs() {
  return (
    <> 

      <div className="container my-5">
        <h1 className="text-center mb-4 text-light">FAQs</h1>

        <div className="accordion" id="accordionPanelsStayOpenExample">

          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i className="fa-solid fa-plus me-2"></i>
                How does SmartHome work?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body text-dark">
                SmartHome is an integrated home automation system that connects
                and manages multiple smart devices through a single centralized
                dashboard. It enables users to control lighting, temperature,
                and security systems efficiently.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i className="fa-solid fa-plus me-2"></i>
                Is SmartHome secure?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body text-dark">
                Yes. SmartHome uses encrypted communication and secure cloud
                storage to protect your data and devices, ensuring complete
                privacy and safety.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i className="fa-solid fa-plus me-2"></i>
                Can I control devices remotely?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body text-dark">
                Yes. You can control your home devices from anywhere using
                your mobile phone or web dashboard as long as your devices
                are connected to the internet.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Download Section */}
      <div className="download container my-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 style={{color:"white"}}>Download App</h1>
            <p>
              Download the SmartHome mobile app to manage your home devices
              anytime and anywhere with ease and security.
            </p>

            <div className="d-flex gap-3">
              <img
                style={{ borderRadius: "8px", width: "150px" }}
                src="https://tse3.mm.bing.net/th/id/OIP.bLEukLHfnXXVkT9dYKiBYQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Google Play Store"
              />
              <img
                style={{ borderRadius: "8px", width: "150px" }}
                src="https://i.pinimg.com/originals/33/a1/d6/33a1d66fffcc9217e1f6e1494c240181.jpg"
                alt="Apple App Store"
              />
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              src="https://tse1.mm.bing.net/th/id/OIP.Hyk7r2odCbz3Ko00JD1HDgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="SmartHome App Preview"
            />
          </div>

        </div>
      </div>
 
    </>
  );
}