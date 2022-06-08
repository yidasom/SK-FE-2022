import { getRandom } from './utils/index.js';
import { HomeLink } from './components/homeLink.js';

const { React, ReactDOM } = window;

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <HomeLink
      size={getRandom()}
      label="Vue.js"
      url="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg"
    />
    <HomeLink
      size={getRandom()}
      label="React"
      url="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
    />
  </React.StrictMode>
);
