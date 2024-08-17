import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.firstpart}>
        <div className={styles.left}>
          <div>
            <p className={styles.heading}>JioCinema</p>
            <p>For You</p>
            <p>Sports</p>
            <p>Movies</p>
            <p>TV Shows</p>
          </div>
          <div>
            <p className={styles.heading}>Support</p>
            <p>Help Center</p>
            <p>Terms of Use</p>
            <p>Privacy Of Use</p>
            <p>Content Complaints</p>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p className={styles.rightheading}>Connect With Us</p>
            <div className={styles.socialicons}>
              <div>
                <img
                  src="https://www.jiocinema.com/images/facebook.svg"
                  alt="Facebook"
                />
              </div>
              <div>
                <img
                  src="https://www.jiocinema.com/images/twitter.svg"
                  alt="Twitter"
                />
              </div>
              <div>
                <img
                  src="https://www.jiocinema.com/images/instagram.svg"
                  alt="Instagram"
                />
              </div>
              <div>
                <img
                  src="https://www.jiocinema.com/images/youtube.svg"
                  alt="YouTube"
                />
              </div>
            </div>
          </div>
          <div>
            <p className={styles.rightheading}>Download the App</p>
            <div className={styles.socialicons}>
              <img
                className={styles.stores}
                src="https://www.jiocinema.com/images/googlePlay.svg"
                alt="Google Play Store"
              />
              <img
                className={styles.stores}
                src="https://www.jiocinema.com/images/appleStore.svg"
                alt="Apple App Store"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondpart}>
        <p>
          Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
        </p>
        <img
          src="https://www.jiocinema.com/images/payments/jio-logo.png"
          alt="Jio Logo"
        />
      </div>
    </div>
  );
}

export default Footer;
