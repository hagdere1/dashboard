var React = require('react'),
    ReactDOM = require('react-dom'),
    Panel = require('./panel'),
    Table = require('./table');

var Dashboard = React.createClass({
  getInitialState: function () {
    return {
      title: null,
      addPanelShowing: false,
      widgets: []
    };
  },

  openPanel: function () {
    this.setState({ addPanelShowing: true });
  },

  closePanel: function () {
    this.setState({ addPanelShowing: false });
  },

  addWidget: function (widget) {
    var currentWidgets = this.state.widgets;
    currentWidgets.push(widget);
    this.setState({ widgets: currentWidgets });
  },

  render: function () {
    var widgets = this.state.widgets.map(function (widget) {
      return <Table />;
    });

    return (
      <div className="container">
        <Panel open={this.state.addPanelShowing} closePanel={this.closePanel} />
        <div className="header">
          <nav className="group">
            <img className="logo" src="images/logo-foodiq.png"/>
            <ul className="nav-tabs group">
              <li className="nav-tab">Nav One</li>
              <li className="nav-tab">Nav Two</li>
              <li className="nav-tab selected">Dashboards</li>
            </ul>
            <div className="user group">
              <div className="user-name">John Jones</div>
              <img className="user-icon" src="images/icon-namearrow.png"/>
            </div>
            <div className="nav-links"><a href="#">Help</a>  |  <a href="#">Contact</a></div>
          </nav>
          <div className="spacer">
            <div className="dashboards-title">{ this.state.title ? "Dashboards / " + this.state.title : "Dashboards" }</div>
          </div>
        </div>

        <div className="main">
          <div className="group">
            <div className="dashboard-title group">
              <h1>{ this.state.title ? this.state.title : "New Dashboard" }</h1>
              <img src="images/icon-edit.png"/>
            </div>
            <div className="dashboard-controls group">
              <div className="dashboard-switcher">
                <p>Dashboard Switcher</p>
                <div className="dashboard-select group">
                  <div className="dashboard-select-option">{ this.state.title ? this.state.title : "-Select a Dashboard-" }</div>
                  <img src="images/dropdown-arrow.png" />
                </div>
              </div>
              <div className="new-widget-button" onClick={this.openPanel}>
                <img src="images/icon-add.png"/>
                Add a New Widget
              </div>
            </div>
          </div>

          <div className="rule"></div>

          <div className="new-widget">
            <img src="images/icon-add-large.png"/>
            Add a New Widget
          </div>
        </div>

        <div className="footer">
          <div className="copyright">© 2016 FoodIQ  |  © Energy Metrics, LLC</div>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Dashboard />, document.getElementById("content"));
});
