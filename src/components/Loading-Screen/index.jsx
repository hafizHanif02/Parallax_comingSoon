import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import Logo from '../../../public/img/logo-light.png'
const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <span>P</span>
          <span>A</span>
          <span>R</span>
          <span>A</span>
          <span>L</span>
          <span>L</span>
          <span>A</span>
          <span>X</span>
        </div>
        <div id="preloader"></div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
