import Hero from "../../assets/images/hero-header.png";
import Tab1 from "../../assets/images/icon/Tab 1.png";
import Tab2 from "../../assets/images/icon/Tab 2.png";

const Banner = () => {
  return (
    <section class="py-lg-2 overflow-hidden bg-warning" id="home">
      <div class="container">
        <div class="row align-items-center g-lg-0">
          <div class="col-md-5 col-lg-6   order-md-2 mb-lg-1 mb-md-0 text-center">
            <a class="icon-link icon-link-hover" href="#" aria-hidden="true">
              <img
                src={Hero}
                alt="Hero Header Image"
                class=" hover-scale la-header w-75 px-lg-5 img-fluid w-auto"
              />
            </a>
          </div>

          <div class="col-md-7 col-lg-6 order-md-1 py-3 py-md-0  text-center text-md-start">
            <h1 class=" text-light display-4 fw-bolder p-lg-2 ">
              Are you starving?
            </h1>
            <h1 class="fw-bold mb-lg-3  mb-md-5 fs-3 text-secondary fw-bold p-lg-2">
              Within a few clicks, find meals that
              <br class="" />
              are accessible near you
            </h1>
            <div class="bg-light  p-lg-2 mb-sm-3 rounded-2   ">
              <div class="">
                <nav>
                  <div class="nav nav-tabs  " id="nav-tab" role="tablist">
                    <button
                      class=" mb-lg-3 border-light"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <img src={Tab1} alt="Tab 1 Icon" class="img-fluid" />
                    </button>
                    <button
                      class="mx-lg-3 mx-sm-2 mx-md-2 mb-lg-3 mb "
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <img src={Tab2} alt="Tab 2 Icon" class="img-fluid" />
                    </button>
                  </div>
                  <div class="tab-content mt-lg-2 mt-sm-2 " id="nav-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form class="row  align-items-center hover-upward">
                        <div class="col-12 row-cols-md-6 col-lg-9 mb-3 mb-md-0">
                          <div class=" input-group">
                            <div>
                              <a>
                                <i class="las la-map-marker fs-5 text-p-color"></i>
                              </a>
                            </div>
                            <div>
                              {" "}
                              <label
                                class="visually-hidden"
                                for="inputDelivery"
                              >
                                Address
                              </label>
                              <input
                                class=" border-0 px-2"
                                id=""
                                type="text"
                                src="./Assets/images/location.png"
                                placeholder="Enter Your Address"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-grid gap-1 col-sm-auto">
                          <button
                            class="btn primry-color text-light"
                            type="submit"
                          >
                            Find Food
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
