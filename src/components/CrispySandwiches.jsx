import React from "react";
import CrispySandwiche from "../../assets/images/crispy-sandwiches.png";

const CrispySandwiches = () => {
  return (
    <section class="pb-lg-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card mb-3 shadow-lg">
              <div class="row g-0">
                <div class="col-md-5 col-xl-7 col-xxl-8 order-md-1">
                  <img
                    src={CrispySandwiche}
                    class="img-fluid w-100 h-100  object-fit-lg-cover rounded-top rounded-md-end rounded-md-top-0"
                    alt="..."
                  />
                </div>
                <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                  <h1 class="card-title mt-xl-5 mb-lg-2 fw-bold">
                    Best deals
                    <span class="text-warning">Crispy Sandwiches</span>
                  </h1>
                  <p class="fs-6">
                    Enjoy the large size of sandwiches. Complete your meal with
                    the perfect slice of sandwiches.
                  </p>
                  <div class="d-grid">
                    <a
                      href="#!"
                      class="btn btn-lg bg-warning text-light mt-xxl-0 fs-6 fw-bold m-lg-4"
                    >
                      PROCEED TO ORDER{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right ms-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L11.293 8 5.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrispySandwiches;