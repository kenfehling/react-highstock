var Highstock = require('highstock-release');
var React = require('react');
var update = require('react-addons-update');

module.exports = React.createClass({
  displayName: 'Highstock',

  propTypes: {
    config: React.PropTypes.object.isRequired,
    isPureConfig: React.PropTypes.bool,
  },

  renderChart: function (config) {
    if (!config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }

    var node = this.refs.chart;

    if (!config.chart) {
      config = update(config, { chart: { $set: {} } });
    }

    config = update(config, { chart: { renderTo: { $set: node } } });

    this.chart = new Highstock.Chart(config);
  },

  shouldComponentUpdate: function (newProps) {
    if (!this.props.isPureConfig || this.props.config !== newProps.config) {
      this.renderChart(newProps.config);
      return true;
    }

    return false;
  },

  getChart: function () {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }

    return this.chart;
  },

  componentDidMount: function () {
    this.renderChart(this.props.config);
  },

  render: function () {
    return React.createElement('div', { className: 'chart', ref:'chart' });
  },

});

exports.Highstock = Highstock;
