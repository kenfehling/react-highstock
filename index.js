var ReactFauxDOM = require('react-faux-dom');
var Highstock = require('highstock-release');
var React = require('react');
var update = require('react-addons-update');

class ReactHighstock extends React.Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
    this.getChart = this.getChart.bind(this);
  }

  renderChart() {
    if (!this.props.config) {
      throw new Error('Config has to be specified, for the Highchart component');
    }

    let conifg = this.props.config;
    let node = this.refs.chart;

    if (!config.chart) {
      config = update(config, {chart: {$set: {}}});
    }

    config = update(config, {chart: {renderTo: {$set: node}}});

    this.chart = new Highstock.Chart(config);
  }

  getChart() {
    if (!this.chart) {
      throw new Error('getChart() should not be called before the component is mounted');
    }

    return this.chart;
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    return React.createElement('div', {className: 'chart', ref:'chart'});
  }
}

export default ReactHighstock;
