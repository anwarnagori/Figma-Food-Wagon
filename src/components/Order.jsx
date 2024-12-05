import React from "react";

const Order = () => {
  return (
    <section class="py-0">
      <div class="bg-hold-2 w-100 h-100">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-9 py-7 text-center">
              <h1 class="fw-bold mb-4 text-white fs-3">
                Are you ready to order <br />
                with the best deals?
              </h1>
              <a class="btn  primry-color text-light m-4 fw-bold" href="#">
                PROCEED TO ORDER
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16 "
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
    </section>
  );
};

export default Order;
