var React = require('react'),
    ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return (
      <div id="container">
        <div id="header">
          <nav>
            <img src="images/logo-foodiq.png"/>
            <ul>
              <li><a href="#">Nav One</a></li>
              <li><a href="#">Nav Two</a></li>
              <li><a href="#">Dashboards</a></li>
            </ul>
            <div><a href="#">Help</a>  |  <a href="#">Contact</a></div>
            <div>
              John Jones
              <img src="images/icon-namearrow.png"/>
            </div>
          </nav>
          <div id="spacer">Dashboards</div>
        </div>

        <div id="main">
          <h1>New Dashboard</h1>
          <p className="dashboard-switcher">Dashboard Switcher</p>
          <select>
            <option>-Select a Dashboard-</option>
          </select>
          <div>
            <div><img src="images/icon-add.png"/></div>
            <div>Add a New Widget</div>
          </div>
          <div className="rule"></div>
          <div>
            <img src="images/icon-add-large.png"/>
            Add a New Widget
          </div>
        </div>

        <div id="footer">
          <div>© 2016 FoodIQ  |  © Energy Metrics, LLC</div>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById("content"));
});
