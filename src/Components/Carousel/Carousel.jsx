import React from "react";
import styles from "./Carousel.module.css";
import Carousell from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carousel({ data }) {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={styles.carousel_button_group}>
        <div
          className={styles.left}
          onClick={() => {
            if (currentSlide === 0) {
              goToSlide(data.length - 1);
            }else {
              previous();
            }
          }}
        >
          <img
            alt="back arrow"
            src="https://jiocinema.com/images/carousel/BackArrow.svg"
          />
        </div>
        <div
          className={styles.right}
          onClick={() => {
            if (currentSlide === data.length - 1) {
              goToSlide(0);
            } else {
              next();
            }
          }}
        >
          <img
            alt="forward arrow"
            src="https://jiocinema.com/images/carousel/ForwardArrow.svg"
          />
        </div>
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const { active } = rest;
    return (
      <div
        className={active ? `${styles.dotActive}` : `${styles.dot}`}
        onClick={() => onClick()}
      ></div>
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousell
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className={styles.carousel}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1.5, 
            partialVisibilityGutter: 60,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1.3, 
            partialVisibilityGutter: 50,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass={styles.sliderClass}
        slidesToSlide={1}
        swipeable
        customDot={<CustomDot />}
        customButtonGroup={<ButtonGroup />}
      >
        {data.map((item, index) => (
          <div className={styles.carouselCard} key={index}>
            <div className={styles.contentImageOuter}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.contentImage}
              />
              <div className={styles.overlayImage}></div>
              <span className={styles.secondOverlaySpan}></span>
            </div>
            <div className={styles.contentDetails}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>
                {item.language} • {item.movieType} • {item.contentRating}
              </p>
              <button className={styles.watchButton}>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 15 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.43693 16.9865C1.77124 17.4108 0.899414 16.9326 0.899414 16.1432V1.85653C0.899414 1.0671 1.77124 0.588944 2.43694 1.01328L13.6432 8.15662C14.2599 8.54969 14.2598 9.45005 13.6432 9.84312L2.43693 16.9865Z"
                    fill="#FFFFFF"
                  />
                </svg>{" "}
                Watch
              </button>
            </div>
          </div>
        ))}
      </Carousell>
    </div>
  );
}

export default Carousel;
