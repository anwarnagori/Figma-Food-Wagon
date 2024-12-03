import React from "react";
import FoodWorld from "../../assets/Images/food-world.png";
import FoodWorldLogo from "../../assets/Images/food-world-logo.png";
import PizzaHub from "../../assets/Images/pizza-hub.png";
import PizzaHubLogo from "../../assets/Images/pizzahub-logo.png";
import DonutsHut from "../../assets/Images/donuts-hut.png";
import DonutsHutLogo from "../../assets/Images/donuts-hut-logo.png";
import DonutHut from "../../assets/Images/donuthut.png";
import DonutHutLogo from "../../assets/Images/donut-hut-logo.png";
import RubyTuesday from "../../assets/Images/ruby-tuesday.png";
import RubyTuesdayLogo from "../../assets/Images/ruby-tuesday-logo.png";
import Kuakata from "../../assets/Images/kuakata.png";
import KuakataLogo from "../../assets/Images/kuakata-logo.png";
import RedSquare from "../../assets/Images/red-square.png";
import RedSquareLogo from "../../assets/Images/red-square-logo.png";
import TacoBell from "../../assets/Images/taco-bell.png";
import TacoBellLogo from "../../assets/Images/taco-bell-logo.png";

const Feature = () => {
  return (
    <section id="testimonial">
      <div class="container">
        <div class="row ">
          <div class="col-lg-7 mx-auto text-center mb-4">
            <h5 class="fw-bolder fs-2 fs-lg-5 lh-sm mb-3">
              Featured Restaurants
            </h5>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={FoodWorld} alt="..." />
              <div class="card-img-overlay ps-0  ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3  icon-move "
                    src={FoodWorldLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">20% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column ">
                  <span class="need-extra-padding-left">
                    <h5 class=" m-sm-0  fw-bold text-dark ">Food world</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>46
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge p-background p-2 ">
                <span class="fw-bold fs-5 text-p-color ">Opens Tomorrow</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={PizzaHub} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={PizzaHubLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0  fw-bold text-dark ">Pizza hub</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>40
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge p-background p-2 ">
                <span class="fw-bold fs-5 text-p-color ">Opens Tomorrow</span>
              </span>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={DonutsHut} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src={DonutsHutLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts-hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>20
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={DonutHut} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={DonutHutLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>50
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success">Opens Now</span>
              </span>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={RubyTuesday} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={RubyTuesdayLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Ruby tuesday</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>46
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={Kuakata} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xl-3 icon-move"
                    src={KuakataLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">10% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">
                      Kuakata Fried Chicken
                    </h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>40
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={RedSquare} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src={RedSquareLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts-hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>20
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success ">Opens Now</span>
              </span>
            </div>
          </div>

          <div class="col mb-4">
            <div class="card h-100 text-white custom-card-bg rounded-3 border-light position-relative">
              <img class="card-img-top rounded-3" src={TacoBell} alt="..." />
              <div class="card-img-overlay ps-0 mt-auto ">
                <span class="badge primry-color p-2 ms-3">
                  <img
                    class="position-absolute icon-move-down mt-xxl-3 icon-move"
                    src={TacoBellLogo}
                    alt=""
                  />
                  <span></span>

                  <span class="fs-6">15% off</span>
                  <span class="fs-0 bg-warning rounded-3 ms-2  p-2 move-left">
                    <i class="las la-tachometer-alt fs-6 "></i>Fast
                  </span>
                </span>
              </div>
              <div class="card-body ps-0 ">
                <div class="d-flex flex-column">
                  <span class="need-extra-padding-left">
                    <h5 class="m-sm-0 fw-bold text-dark ">Donuts hut</h5>
                    <span class="mb-0 text-warning">
                      <i class="las la-star"></i>50
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <span class="badge bg-success bg-opacity-10 p-2 ">
                <span class="fw-bold fs-5 text-success">Opens Now</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
