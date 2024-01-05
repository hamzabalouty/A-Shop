import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="Home-1 mb-5">
      <div id="carouselExampleCaptions" className="carousel slide home-caru">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/400372998_679580334288991_5622632515192640990_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=oJNWA3o2QTUAX8IdlGU&_nc_ht=scontent-hbe1-1.xx&oh=03_AdQpM9x3Z2hJwQgbKpqYE_FzJS-A9MPtFpfthHxOHTmeEg&oe=65B3EFD4"
              className="d-block wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                ?? In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/403636733_902364154460364_5801700809206945113_n.png?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=xjwlBbnh1fcAX-_ZIuY&_nc_ht=scontent-hbe1-1.xx&oh=03_AdQPx45aE2Bb9iswGLdcn1lukPt6ne1mJL_hVeIopPxVAg&oe=65B3F83E"
              className="d-block wow slideIn wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                ?? In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/403636721_352894024112187_8676438797263229552_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=tFrF2UmyDfYAX8fWoec&_nc_ht=scontent-hbe1-1.xx&oh=03_AdQUHMKxS5PPh4z0zMJAT3PS1j8t8ew1vLHMhWLAETt3Gg&oe=65B400FB"
              className="d-block wow slideInRight"
              data-wow-duration="2s"
              alt="..."
            />
            <div
              className="carousel-caption wow slideInLeft"
              data-wow-duration="2s"
            >
              <p className="mb-4 text-dark">
                ?? In this season, find the best{" "}
              </p>
              <h2 className="mb-4 text-dark">
                Exclusive collection for
                <br /> everyone
              </h2>
              <button className="btn btn-dark p-3">
                Explore Now <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev carus-but-1"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carus-but-2 "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
