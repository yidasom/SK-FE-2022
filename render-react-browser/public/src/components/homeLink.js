/* eslint-disable react/prop-types */
const { React } = window;

export const HomeLink = ({ size, url, label }) => (
  <a href="/">
    <h1 className="brand">
      <img height={size} src={url} alt={label} />
    </h1>
  </a>
);
