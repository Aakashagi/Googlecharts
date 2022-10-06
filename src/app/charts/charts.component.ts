import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "EFFECTUATE ATTENDANCE"
    },
    xAxis: {
      categories: ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY","SATURDAY"]
    },
    yAxis: {
      title: {
        text: "Present Percentage"
      }
    },
    series: [{
      name:'Present',
      data: [22, 18, 20, 17,20],
      type: 'spline'
    },
    {
      name:'Absent',
      data: [10, 6, 13, 15,7],
      type: 'line'
    }
    
  ]
  };



  highcharts1 = Highcharts;

  chartOptions1: Highcharts.Options = {
    title: {
      text: "EFFECTUATE ATTENDANCE"
    },
    xAxis: {
      categories: ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY","SATURDAY"]
    },
    yAxis: {
      title: {
        text: "Present Percentage"
      }
    },
    series: [{
      type: 'column',
      name: 'AAKASH',
      data: [3, 2, 1, 3, 4]
  }, {
      type: 'column',
      name: 'JEEVA',
      data: [2, 3, 5, 7, 6]
  }, {
      type: 'column',
      name: 'PANDi',
      data: [4, 3, 3, 9, 0]
  }
]
  };

  highcharts2 = Highcharts;

  chartOptions2: Highcharts.Options = {
    title: {
      text: "COLLEGE ATTENDANCE"
    },
    xAxis: {
      categories: ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY","SATURDAY"]
    },
    yAxis: {
      title: {
        text: "Present Percentage"
      }
    },
    series: [{
      type: 'bar',
      name: 'AAKASH',
      data: [99, 97, 71, 83, 84]
  }, {
      type: 'bar',
      name: 'JEEVA',
      data: [72, 63, 85, 77, 96],
      
  }, {
      type: 'bar',
      name: 'PANDI',
      data: [64, 93, 83, 98, 70],
      color:'rgb(255, 165, 0)'

  }
]
  };

  highcharts3 = Highcharts;

  chartOptions3: Highcharts.Options = {
    title: {
      text: "LEARNING"
    },
    xAxis: {
      categories: ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY","SATURDAY"]
    },
    yAxis: {
      title: {
        text: "Present Percentage"
      }
    },
    series: [{
      type: 'area',
      name: 'SAMEER',
      data: [3, 4, 1,9, 4],
      color:'rgb(255, 165, 0)'

  }, {
      type: 'area',
      name: 'JEEVA',
      data: [8, 3, 5, 7, 6],
      color:'rgb(255, 0, 0)'
  }, {
      type: 'area',
      name: 'NAVIN',
      data: [4, 11,13, 7, 0],
      color: 'rgba(47, 192, 71, 0.8)',
  }
]
  };





  constructor() { }

  ngOnInit(): void {
  }

}
