import { getRandom } from './utils/index.js';
import { HomeLink } from './components/homeLink.js';
var _window = window,
    React = _window.React,
    ReactDOM = _window.ReactDOM;
var root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(React.StrictMode, null, React.createElement(HomeLink, {
  size: getRandom(),
  label: "Vue.js",
  url: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg"
}), React.createElement(HomeLink, {
  size: getRandom(),
  label: "React",
  url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
})));