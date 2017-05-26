/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const PDCA = ({
  planDisabled,
  doDisabled,
  checkDisabled,
  actDisabled,
  planColor,
  doColor,
  checkColor,
  actColor,
  disabledColor,
}) => (
  <svg width="200px" height="200px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <circle id="path-1" cx="100" cy="100" r="100" />
      <filter x="-5.5%" y="-5.5%" width="111.0%" height="111.0%" filterUnits="objectBoundingBox" id="filter-2">
        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="shadowSpreadInner1" />
        <feGaussianBlur stdDeviation="10" in="shadowSpreadInner1" result="shadowBlurInner1" />
        <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1" />
      </filter>
    </defs>
    <g id="PDCA">
      <g id="Plan">
        <path
          id="PlanSlice"
          fill={planDisabled ? disabledColor : planColor}
          d="M200,100 C200,44.771525 155.228475,7.10542736e-15 100,7.10542736e-15 L100,100 L200,100 L200,100 Z"
        />
        <path
          id="P"
          fill="#FFFFFF"
          d="M130.914062,55.8125 L130.914062,66.078125 L133.75,66.078125 C136.015636,66.078125 137.605464,65.6953163 138.519531,64.9296875 C139.433598,64.1640587 139.890625,62.835947 139.890625,60.9453125 C139.890625,59.054678 139.433598,57.7265663 138.519531,56.9609375 C137.605464,56.1953087 136.015636,55.8125 133.75,55.8125 L130.914062,55.8125 Z M124,50 L133.492188,50 C138.320337,50 141.792958,50.8593664 143.910156,52.578125 C146.027354,54.2968836 147.085938,57.0859182 147.085938,60.9453125 C147.085938,64.8047068 146.027354,67.5937414 143.910156,69.3125 C141.792958,71.0312586 138.320337,71.890625 133.492188,71.890625 L130.914062,71.890625 L130.914062,84.9921875 L124,84.9921875 L124,50 Z"
        />
      </g>
      <g id="Do">
        <path
          id="DoSlice"
          fill={doDisabled ? disabledColor : doColor}
          d="M100,200 C155.228475,200 200,155.228475 200,100 L100,100 L100,200 L100,200 Z"
        />
        <path
          id="D"
          fill="#FFFFFF"
          d="M130.914062,121.234375 L130.914062,143.757812 L132.789062,143.757812 C135.507826,143.757812 137.445307,142.902352 138.601562,141.191406 C139.757818,139.48046 140.335938,136.570333 140.335938,132.460938 C140.335938,128.382792 139.757818,125.492196 138.601562,123.789062 C137.445307,122.085929 135.507826,121.234375 132.789062,121.234375 L130.914062,121.234375 Z M124,115 L131.40625,115 C137.125029,115 141.242175,116.363268 143.757812,119.089844 C146.27345,121.81642 147.53125,126.273407 147.53125,132.460938 C147.53125,138.664094 146.27345,143.136705 143.757812,145.878906 C141.242175,148.621107 137.125029,149.992188 131.40625,149.992188 L124,149.992188 L124,115 Z"
        />
      </g>
      <g id="Check">
        <path
          id="CheckSlice"
          fill={checkDisabled ? disabledColor : checkColor}
          d="M1.42108547e-14,100 C2.84217094e-14,155.228475 44.771525,200 100,200 L100,100 L4.26325641e-14,100 L1.42108547e-14,100 Z"
        />
        <path
          id="C"
          fill="#FFFFFF"
          d="M73.7734375,148.617188 C72.679682,149.17969 71.531256,149.601561 70.328125,149.882812 C69.124994,150.164064 67.8593816,150.304688 66.53125,150.304688 C61.8124764,150.304688 58.2109499,148.750016 55.7265625,145.640625 C53.2421751,142.531234 52,138.039092 52,132.164062 C52,126.273408 53.2421751,121.773453 55.7265625,118.664062 C58.2109499,115.554672 61.8124764,114 66.53125,114 C67.8593816,114 69.1328064,114.140624 70.3515625,114.421875 C71.5703186,114.703126 72.7109322,115.124997 73.7734375,115.6875 L73.7734375,123.375 C72.5859316,122.281245 71.4335993,121.480471 70.3164062,120.972656 C69.1992132,120.464841 68.0468809,120.210938 66.859375,120.210938 C64.3281123,120.210938 62.4179752,121.214834 61.1289062,123.222656 C59.8398373,125.230479 59.1953125,128.210918 59.1953125,132.164062 C59.1953125,136.101582 59.8398373,139.074209 61.1289062,141.082031 C62.4179752,143.089854 64.3281123,144.09375 66.859375,144.09375 C68.0468809,144.09375 69.1992132,143.839846 70.3164062,143.332031 C71.4335993,142.824216 72.5859316,142.023443 73.7734375,140.929688 L73.7734375,148.617188 Z"
        />
      </g>
      <g id="Act">
        <path
          id="ActSlice"
          fill={actDisabled ? disabledColor : actColor}
          d="M100,4.73316543e-30 C44.771525,4.73316543e-30 -1.42108547e-14,44.771525 -4.73316543e-30,100 L100,100 L100,2.84217094e-14 L100,4.73316543e-30 Z"
        />
        <path
          id="A"
          fill="#FFFFFF"
          d="M63.6640625,56.328125 L60.40625,70.6484375 L66.9453125,70.6484375 L63.6640625,56.328125 Z M59.4453125,50 L67.90625,50 L77.3515625,84.9921875 L70.4375,84.9921875 L68.28125,76.34375 L59.0234375,76.34375 L56.9140625,84.9921875 L50,84.9921875 L59.4453125,50 Z"
        />
      </g>
    </g>
    <g id="Shadow" fillOpacity="1" fill="black">
      <use filter="url(#filter-2)" xlinkHref="#path-1" />
    </g>
  </svg >
);

PDCA.propTypes = {
  planDisabled: PropTypes.bool,
  doDisabled: PropTypes.bool,
  checkDisabled: PropTypes.bool,
  actDisabled: PropTypes.bool,
  planColor: PropTypes.string,
  doColor: PropTypes.string,
  checkColor: PropTypes.string,
  actColor: PropTypes.string,
  disabledColor: PropTypes.string,
};

PDCA.defaultProps = {
  planDisabled: false,
  doDisabled: false,
  checkDisabled: false,
  actDisabled: false,
  planColor: '#4990E2',
  doColor: '#D0011B',
  checkColor: '#F8E81C',
  actColor: '#7ED321',
  disabledColor: '#969696',
};

export default PDCA;
