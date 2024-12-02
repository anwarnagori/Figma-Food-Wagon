import Location from "../../assets/Images/location.png";
import Order from "../../assets/Images/order.png";
import Pay from "../../assets/Images/pay.png";
import Meals from "../../assets/Images/meals.png";

const Locations = () => {
  return (
    <section class="py-0 bg-primary-gradient">
      <div class="container">
        <div class="row justify-content-center g-0">
          <div class="col-xl-9">
            <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
              <h5 class="fw-bold text-p-color fs-3 fs-lg-5 lh-sm my-6">
                How does it work
              </h5>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-3 mb-6">
                <div class="text-center">
                  <img
                    class="shadow-icon border-white"
                    src={Location}
                    height="112"
                    alt="..."
                  />
                  <h5 class="mt-4 fw-bold">Select location</h5>
                  <p class="mb-md-0">
                    Choose the location where your food will be delivered.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 mb-6">
                <div class="text-center">
                  <img
                    class="shadow-icon border-white"
                    src={Order}
                    height="112"
                    alt="..."
                  />
                  <h5 class="mt-4 fw-bold">Choose order</h5>
                  <p class="mb-md-0">
                    Check over hundreds of menus to pick your favorite food
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 mb-6">
                <div class="text-center">
                  <img
                    class="shadow-icon border-white"
                    src={Pay}
                    height="112"
                    alt="..."
                  />
                  <h5 class="mt-4 fw-bold">Pay advanced</h5>
                  <p class="mb-md-0">
                    It's quick, safe, and simple. Select several methods of
                    payment
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 mb-6">
                <div class="text-center">
                  <img
                    class="shadow-icon border-white"
                    src={Meals}
                    height="112"
                    alt="..."
                  />
                  <h5 class="mt-4 fw-bold">Enjoy meals</h5>
                  <p class="mb-md-0">
                    Food is made and delivered directly to your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
