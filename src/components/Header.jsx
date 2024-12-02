import React from "react";
import Logo from "../../assets/Images/Tap-Nav/Logo.png";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div class="container ">
          <a class="navbar-brand " href="#">
            <img src={Logo} alt="Food Wagon Logo" class="img-fluid " />
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <p class="nav-link active" aria-current="page">
                  Deliver to:
                  <span class="">
                    <i class="las la-map-marker fs-5 text-p-color"></i>
                  </span>
                  <span class="fw-normal">Current Location</span>
                  <span>Mirpur 1 Bus Stand, Dhaka</span>
                </p>
              </li>
              <li class="nav-item">
                <input
                  class=" me-2 col-lg-10 form-control border-light  bg-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </li>
              <li class="mx-2  ">
                <button
                  class=" text-p-color  form-control border-light "
                  type="submit"
                >
                  <i class="las la-user "></i>Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
