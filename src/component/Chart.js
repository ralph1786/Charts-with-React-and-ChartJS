import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
    displayFont: "Impact"
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Population in ${this.props.location}`,
              fontSize: 24,
              fontFamily: this.props.displayFont
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Population in ${this.props.location}`,
              fontSize: 24
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Population in ${this.props.location}`,
              fontSize: 24,
              fontFamily: this.props.displayFont
            },
            legend: {
              display: this.props.displayLegend,
              position: "right"
            }
          }}
        />
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: `Population in ${this.props.location}`,
              fontSize: 24
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
