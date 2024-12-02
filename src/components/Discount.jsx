import React from "react";
import Discount1 from "../../assets/Images/discount-item-1.png";
import Discount2 from "../../assets/Images/discount-item-2.png";
import Discount3 from "../../assets/Images/discount-item-3.png";
import Discount4 from "../../assets/Images/discount-item-4.png";
import Button from "react-bootstrap/Button";

const Discount = () => {
  return (
    <section class="py-5">
      <div class="container">
        <div class="row h-100 gx-2 mt-7 ">
          <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
            <div class="card card-span h-100 border-light">
              <div class="position-relative">
                <img
                  class="img-fluid rounded-3 w-100"
                  src={Discount1}
                  alt="..."
                />
                <div class="bg-warning px-4 for-radius position-absolute bottom-0   ">
                  <div class="d-flex">
                    <div class="text-white fs-1 fw-bolder mb-2 mb-sm-0 me-sm-0">
                      15
                    </div>
                    <div class="text-white fw-normal fs-5 d-flex flex-column mt-2 align-items-center">
                      <span class="">%</span>
                      <span class="adjustment-span ">Off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fw-bold fs-6 text-1000 text-truncate">Greys Vage</h5>
                <span class="badge p-background  py-2 px-3">
                  <span class="fs-6 text-p-color">6 days Remaining</span>
                </span>
              </div>
              <a class="stretched-link" href="#"></a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
            <div class="card card-span h-100 border-light">
              <div class="position-relative">
                <img
                  class="img-fluid rounded-3 w-100"
                  src={Discount2}
                  alt="..."
                />
                <div class="bg-warning px-4 for-radius position-absolute bottom-0    ">
                  <div class="d-flex">
                    <div class="text-white fs-1 fw-bolder mb-2 align-items-center">
                      10
                    </div>
                    <div class="text-white fw-normal fs-5 d-flex flex-column mt-2 align-items-center">
                      <span class="">%</span>
                      <span class="adjustment-span">Off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fw-bold fs-6 text-1000 text-truncate">Greys Vage</h5>
                <span class="badge p-background py-2 px-3">
                  <span class="fs-6 text-p-color">6 days Remaining</span>
                </span>
              </div>
              <a class="stretched-link" href="#"></a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
            <div class="card card-span h-100 border-light">
              <div class="position-relative">
                <img
                  class="img-fluid rounded-3 w-100"
                  src={Discount3}
                  alt="..."
                />
                <div class="bg-warning px-4 for-radius position-absolute bottom-0  ">
                  <div class="d-flex">
                    <div class="text-white fs-1 fw-bolder mb-2 align-items-center">
                      25
                    </div>
                    <div class="text-white fw-normal fs-5 d-flex flex-column mt-2 align-items-center">
                      <span class="">%</span>
                      <span class="adjustment-span">Off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body px-0">
                <h5 class="fw-bold fs-6 text-1000 text-truncate">Greys Vage</h5>
                <span class="badge p-background py-2 px-3">
                  <span class="fs-6 text-p-color">6 days Remaining</span>
                </span>
              </div>
              <a class="stretched-link" href="#"></a>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-80 pb-4 ">
            <div class="card card-span h-100 border-light">
              <div class="position-relative">
                <img
                  class="img-fluid rounded-3 w-100"
                  src={Discount4}
                  alt="..."
                />
                <div class="bg-warning px-4 for-radius position-absolute bottom-0 ">
                  <div class="d-flex">
                    <div class="text-white fs-1 fw-bolder mb-2 align-items-center">
                      20
                    </div>
                    <div class="text-white fw-normal fs-5 d-flex flex-column mt-2 align-items-center ">
                      <span class="">%</span>
                      <span class="adjustment-span">Off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body px-0 ">
                <h5 class="fw-bold fs-6 text-1000 text-truncate">Greys Vage</h5>
                <span class="badge p-background py-2 px-3">
                  <span class="fs-6 text-p-color">6 days Remaining</span>
                </span>
              </div>
              <a class="stretched-link" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
