import React, { Component } from 'react';
import './App.css';
import Chart from './component/Chart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {}
    }
  }
  //function is placed within life cycle method so it runs.
  componentWillMount() {
    this.getChartData();
  }

  getChartData(){
    //Make ajax calls here and fill state with coming data.
    this.setState({
      chartData:{
        labels: ['Flushing', 'Washington Heights', 'Brooklyn Heights', 'Bayside', 'Corona', 'Forest Hills'],
        datasets: [
          {
            label: 'Population',
            data: [356098, 567432, 432675, 273456, 519542, 294678],
            backgroundColor: ['lightblue', 'red', 'orange', 'purple', 'pink', 'yellow'],
            //following properties are specific for line-charts.
            fill: false,
            pointBackgroundColor: ['lightblue', 'red', 'orange', 'purple', 'pink', 'yellow'],
            borderWidth: 5,
            pointRadius: 5 
          }
      ]}
    })
  }
  render() {
    return (
      <div className="container">
        <Chart chartData={this.state.chartData} legendPosition='bottom' location='New York City' />
      </div>
    );
  }
}

export default App;
