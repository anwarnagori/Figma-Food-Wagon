import React from "react";
import SearchPizza from "../../assets/Images//search-pizza.png";
import Burger from "../../assets/Images//burger.png";
import Noodles from "../../assets/Images//noodles.png";
import SubSandwich from "../../assets/Images//sub-sandwich.png";
import Chowmein from "../../assets/Images//chowmein.png";
import Steak from "../../assets/Images//steak.png";

const SearchFood = () => {
  return (
    <div>
      <section class="py-lg-5 overflow-hidden mt-lg-5 py-5">
        <div class="container">
          <div class="row flex-center mb-4">
            <div class="col-lg-7">
              <h5 class="fw-bolder fs-2 fs-lg-5 lh-sm text-center text-lg-start">
                Search by Food
              </h5>
            </div>
            <div class="col-lg-4 text-lg-end text-center">
              <a href="#" class="btn fw-bold">
                VIEW ALL
              </a>
              <a
                class="btn me-2"
                href="#!"
                id="#carouselSearchByFood"
                role="img"
              >
                <svg
                  type=""
                  data-bs-target="#carouselSearchByFood"
                  data-bs-slide="prev"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-arrow-left-circle primry-color rounded-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </a>
              <a class="btn " href="#!" id="#carouselSearchByFood" role="img">
                <svg
                  data-bs-target="#carouselSearchByFood"
                  data-bs-slide="next"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-arrow-right-circle primry-color rounded-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="row flex-center">
            <div class="col-12">
              <div
                class="carousel slide"
                id="carouselSearchByFood"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class=" card h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SearchPizza}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card h-100 rounded-circle border-0">
                          <img
                            class=" img-fluid rounded-circle h-100"
                            src={Burger}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Noodles}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SubSandwich}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Chowmein}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Steak}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="5000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SearchPizza}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Burger}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Noodles}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SubSandwich}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Chowmein}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Steak}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SearchPizza}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Burger}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Noodles}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SubSandwich}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Chowmein}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Steak}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row h-100 align-items-center">
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SearchPizza}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Burger}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Noodles}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={SubSandwich}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Chowmein}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div class="card card-span h-100 rounded-circle border-0">
                          <img
                            class="img-fluid rounded-circle h-100"
                            src={Steak}
                            alt="..."
                          />
                          <div class="card-body ps-0">
                            <h5 class="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
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
      </section>
    </div>
  );
};

export default SearchFood;
