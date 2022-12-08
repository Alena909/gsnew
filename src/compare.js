import React, { useState } from "react";
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBBtn,
// } from "mdb-react-ui-kit";

export default function NavToggle() {
  const [showAnimated, setShowAnimated] = useState(false);
  return (
    <>
      <section className="mb-3">
        <div>
          <div fluid>
            <div
              type="button"
              className="first-button"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className={`animated-icon1 ${showAnimated && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div show={showAnimated}>
          <div className="bg-light shadow-3 p-4">
            <div block className="border-bottom m-0" color="link">
              Link 1
            </div>
            <div block className="border-bottom m-0" color="link">
              Link 2
            </div>
            <div block className="border-bottom m-0" color="link">
              Link 2
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
