import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from '../styles/pages/skills.module.scss';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const animation = () => {

useEffect(() => {
  gsap.set("#motionSVG", { scale: 1, autoAlpha: 1 });
  gsap.set("#rocket", {transformOrigin: "50% 50%"});
  
  gsap.to("#motionSVG", {
    scrollTrigger: {
      trigger: "#motionPath",
      start: "top 20%",
      end: "bottom 20%",
      scrub: 1,
      //markers: true,
      onUpdate: self => {
          gsap.to("#rocket", {rotation: () => self.direction === 1 ? 0 : -180, overwrite: 'auto'});
      }
    },
    duration: 10,
    ease: "none",
    immediateRender: true,
    motionPath: {
      path: "#motionPath",
      align: "#motionPath",
      alignOrigin: [0.5, 0.5],
      autoRotate: 90,
    }
  });
}, [])

  return (
    <div className={styles.text}>
      Animation test page
      <svg id="linesvg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="1000" width="100%" viewBox="0 0 869 1800">
        <path id="motionPath" stroke="black" fill="none" d="M155.395,383.31 C152.773,390.548 92.401,646.162 250.215,727.041 453.479,831.213 835.629,715.412 832.33,924.268 830.006,1071.385 20.339,1040.965 22.58,1206.204 24.517,1348.994 835.125,1320.378 832.275,1445.504 827.175,1669.362 57.235,1623.348 56.673,1760.63 55.674,2004.272 837.157,1936.609 837.205,2053.845 837.283,2246.807 137.92199,2252.96102 137.92199,2252.96102 " />
        <g id="motionSVG">
          <g id="rocket" clip-path="url(#clip0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M108.074 91.3734L108.237 108.9L108.346 120.585L117.19 129.43L123.25 152.853L131.987 150.013L131.606 109.118L108.074 91.3734ZM78.8623 91.1014L55.6565 108.411L56.0373 149.306L64.8279 152.309L70.4525 128.994L79.1343 120.313L79.0255 108.628L78.8623 91.1014Z" fill="#CCCCCC"/>
          <path d="M79.3519 143.682C82.1258 157.855 83.8408 177.035 88.4689 181.738C91.9809 185.311 96.6769 185.385 100.153 181.847C104.768 177.152 105.748 158.47 108.563 143.954L79.3519 143.682Z" fill="#FFCC66"/>
          <path d="M85.0853 132.052C87.8592 146.225 86.6427 168.336 91.3084 173.002C94.3909 176.084 94.5476 175.659 97.1506 173.056C101.806 168.401 99.7972 146.732 102.612 132.215L85.0853 132.052Z" fill="#ED7161"/>
          <path d="M86.8369 6.47042C78.3147 16.1395 63.715 32.9446 64.0663 70.5175C64.3236 98.1543 72.5939 130.444 80.4214 149.532L107.784 149.787C115.239 130.971 122.747 98.9305 122.489 71.0615C122.141 33.7325 107.141 16.6255 98.5214 6.57922C94.6737 2.09491 90.3804 2.44925 86.8369 6.47042Z" fill="#387AA7"/>
          <path d="M88.1644 6.87387C79.5768 16.5958 64.8627 33.4909 64.8834 70.9754C64.8935 93.4836 70.2164 119.021 76.3227 137.984L111.979 138.003C118.007 119.139 123.18 93.6724 123.168 71.0054C123.149 33.7642 108.333 16.8277 99.8214 6.87987C96.0219 2.43951 91.7352 2.83073 88.1644 6.87387Z" fill="#48A0DC"/>
          <path d="M104.853 59.2139C111.246 52.8208 111.149 42.3581 104.636 35.8449C98.1224 29.3316 87.6597 29.2342 81.2666 35.6273C74.8735 42.0204 74.971 52.483 81.4842 58.9963C87.9975 65.5095 98.4601 65.6069 104.853 59.2139Z" fill="#4D4D4D"/>
          <path d="M98.9566 53.3172C102.153 50.1207 102.104 44.8893 98.8478 41.6327C95.5911 38.3761 90.3598 38.3274 87.1633 41.5239C83.9667 44.7205 84.0154 49.9518 87.2721 53.2084C90.5287 56.465 95.76 56.5138 98.9566 53.3172Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="131.005" height="133.453" fill="white" transform="translate(0 93.269) rotate(-45)"/>
          </clipPath>
          </defs>
        </g>
    </svg>
    </div>
  );
};

export default animation;
