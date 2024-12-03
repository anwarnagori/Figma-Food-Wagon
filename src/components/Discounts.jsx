import React from "react";
import DiscountIcon from "../../assets/images/icon/discounts.png";
import LiveTracking from "../../assets/images/icon/live-tracking.png";
import QuickDelivery from "../../assets/images/icon/quick-delivery.png";
import PhoneCtaOne from "../../assets/images/phone-cta-one.png";
import AppStore from "../../assets/images/app-store.svg";
import GooglePlay from "../../assets/images/google-play.svg";

const Discounts = () => {
  return (
    <section>
      <div class="bg-holder pt-lg-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-10">
              <div class="card card-span shadow-warning rounded-3">
                <div class="card-body py-5">
                  <div class="row justify-content-evenly">
                    <div class="col-md-3">
                      <div class="d-flex flex-md-column flex-xl-row justify-content-evenly justify-content-lg-between align-items-center">
                        <img src={DiscountIcon} width="100" alt="Discounts" />
                        <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                          Daily Discounts
                        </h2>
                      </div>
                    </div>
                    <div class="col-md-3 hr-vertical">
                      <div class="d-flex flex-md-column flex-xl-row justify-content-evenly justify-content-lg-between align-items-center">
                        <img
                          src={LiveTracking}
                          width="100"
                          alt="Live Tracking"
                        />
                        <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                          Live Tracking
                        </h2>
                      </div>
                    </div>
                    <div class="col-md-3 hr-vertical">
                      <div class="d-flex flex-md-column flex-xl-row justify-content-evenly justify-content-lg-between align-items-center">
                        <img
                          src={QuickDelivery}
                          width="100"
                          alt="Quick Delivery"
                        />
                        <h2 class="fw-bolder text-1000 mb-0 text-gradient">
                          Quick Delivery
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row flex-center mt-md-8">
            <div class="col-lg-5 d-none d-lg-block mb-0">
              <img class="w-100" src={PhoneCtaOne} alt="App Image" />
            </div>
            <div class="col-lg-5">
              <h1 class="text-p-color">Install the app</h1>
              <p>
                It's never been easier to order food. Look for the finest
                discounts and you'll be lost in a world of delectable food.
              </p>
              <a
                class="pe-2"
                href="https://www.apple.com/app-store/"
                target="_blank"
              >
                <img src={AppStore} width="160" alt="Download from App Store" />
              </a>
              <a href="https://play.google.com/store/apps" target="_blank">
                <img
                  src={GooglePlay}
                  width="160"
                  alt="Download from Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
