var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>A small little app to help me learn React.</p>
      <p>
        Tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - Javascript framework to build web apps.
        </li>
        <li>
          <a href="https://www.apixu.com/">Apixu</a> - Third party service that provides the weather data.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
