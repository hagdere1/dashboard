var React = require('react'),
    ReactDOM = require('react-dom'),
    Panel = require('./panel'),
    Widget = require('./widget');

var Dashboard = React.createClass({
  getInitialState: function () {
    return {
      title: null,
      addPanelShowing: false,
      widgets: []
    };
  },

  openPanel: function () {
    // Add slidedown when opening panel
    this.setState({ addPanelShowing: true });
    window.scrollTo(0,0);
  },

  closePanel: function () {
    this.setState({ addPanelShowing: false });
    window.scrollTo(0,0);
  },

  addWidget: function (widget) {
    var widgets = this.state.widgets;
    widgets.push(widget);
    this.setState({ widgets: widgets });
  },

  render: function () {
    var widgets = this.state.widgets.map(function (widget, idx) {
      return <Widget key={idx}
                     type={widget.type}
                     size={widget.size}
                     title={widget.title}
                     description={widget.description}/>;
    });

    return (
      <div className="container">
        <Panel open={this.state.addPanelShowing} closePanel={this.closePanel} addWidget={this.addWidget}/>
        <div className="header">
          <nav>
            <div className="nav-inner group">
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
            </div>
          </nav>
          <div className="spacer">
            <div className="spacer-inner">
              { this.state.title ? "Dashboards / " + this.state.title : "Dashboards" }
            </div>
          </div>
        </div>

        <div className="main">
          <div className="main-header group">
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
                <div className="new-widget-button-icon"><img src="images/icon-add.png"/></div>
                <div className="new-widget-button-text">Add a New Widget</div>
              </div>
            </div>
          </div>

          <div className="rule"></div>

          <div className="widgets group">{widgets}</div>

          <div className="new-widget" onClick={this.openPanel}>
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
