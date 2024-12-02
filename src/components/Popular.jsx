import Cheese from "../../assets/Images/cheese-burger.png";
import Location from "../../assets/Images/location.png";
import Toffes from "../../assets/Images/toffes-cake.png";
import Dancake from "../../assets/Images/dancake.png";
import Crispy from "../../assets/Images/crispy-sandwitch.png";
import Thai from "../../assets/Images/thai-soup.png";
import Button from "react-bootstrap/Button";

const Popular = () => {
  return (
    <section class="py-lg-5 overflow-hidden">
      <div class="container">
        <div class="row h-100">
          <div class="col-lg-7 mx-auto text-center mt-7 mb-5">
            <h5 class="fw-bolder fs-2  fs-lg-5 lh-sm">Popular items</h5>
          </div>
          <div class="col-12">
            <div
              class="carousel slide p-2"
              id="carouselPopularItems"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="row gx-3 h-100 align-items-center">
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4 "
                          src={Cheese}
                          alt="..."
                        />
                        <div class="ps-0">
                          <h5 class="fw-bold text-1000 mb-1">Cheese Burger</h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Burger Arena</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.88</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Toffes}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Toffe's Cake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Top Sticks</span>
                          </div>
                          <span class="text-1000 fw-bold">$4.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Dancake}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Dancake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Cake World</span>
                          </div>
                          <span class="text-1000 fw-bold">$1.99</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Crispy}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Crispy Sandwitch
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Fastfood Dine</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img class="img-fluid rounded-4" src={Thai} alt="..." />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Thai Soup
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Foody Man</span>
                          </div>
                          <span class="text-1000 fw-bold">$2.79</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                  <div class="row gx-3 h-100 align-items-center">
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Cheese}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Cheese Burger
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Burger Arena</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.88</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Toffes}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Toffe's Cake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Top Sticks</span>
                          </div>
                          <span class="text-1000 fw-bold">$4.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Dancake}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Dancake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Cake World</span>
                          </div>
                          <span class="text-1000 fw-bold">$1.99</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img
                          class="img-fluid rounded-4"
                          src={Crispy}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Crispy Sandwitch
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Fastfood Dine</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div>
                        <img class="img-fluid rounded-4" src={Thai} alt="..." />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Thai Soup
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Foody Man</span>
                          </div>
                          <span class="text-1000 fw-bold">$2.79</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <div class="row gx-3 h-100 align-items-center">
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Cheese}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Cheese Burger
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Burger Arena</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.88</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Toffes}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Toffe's Cake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Top Sticks</span>
                          </div>
                          <span class="text-1000 fw-bold">$4.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Dancake}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Dancake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Cake World</span>
                          </div>
                          <span class="text-1000 fw-bold">$1.99</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Crispy}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Crispy Sandwitch
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Fastfood Dine</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Thai}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Thai Soup
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Foody Man</span>
                          </div>
                          <span class="text-1000 fw-bold">$2.79</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row gx-3 h-100 align-items-center">
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Cheese}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Cheese Burger
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Burger Arena</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.88</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Toffes}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Toffe's Cake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Top Sticks</span>
                          </div>
                          <span class="text-1000 fw-bold">$4.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Dancake}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Dancake
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Cake World</span>
                          </div>
                          <span class="text-1000 fw-bold">$1.99</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Crispy}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Crispy Sandwitch
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Fastfood Dine</span>
                          </div>
                          <span class="text-1000 fw-bold">$3.00</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                      <div class="rounded-4">
                        <img
                          class="img-fluid rounded-3 h-100"
                          src={Thai}
                          alt="..."
                        />
                        <div class="card-body ps-0">
                          <h5 class="fw-bold text-1000 text-truncate mb-1">
                            Thai Soup
                          </h5>
                          <div>
                            <div>
                              <a>
                                <img class="logo-size" src={Location} alt="" />
                              </a>
                            </div>
                            <span class="text-warning">Foody Man</span>
                          </div>
                          <span class="text-1000 fw-bold">$2.79</span>
                        </div>
                      </div>
                      <div class="d-grid gap-2">
                        <a
                          class="btn btn-lg primry-color text-light"
                          href="#!"
                          role="button"
                        >
                          Order now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-controls ">
                <button
                  class="carousel-control-prev carousel-control-prev-icon bg-warning hover-upward rounded-circle button-test "
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="prev"
                >
                  <span class="visually-hidden">Previous</span>
                </button>

                <button
                  class="carousel-control-next carousel-control-next-icon bg-warning hover-upward rounded-circle button-test"
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="next"
                >
                  <span class="visually-hidden" variant="warning">
                    Next{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
