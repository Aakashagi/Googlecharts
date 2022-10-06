import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-gcharts',
  templateUrl: './gcharts.component.html',
  styleUrls: ['./gcharts.component.css']
})
export class GchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 5],
      ['Tomato', 5],
      ['Carrot', 2],
      ['Beetroot', 2]
    ]);
    var options = {'title':'Vegetables Delivery'};
    var chart = new google.visualization.PieChart(document.getElementById('cls'));
    chart.draw(data, options);

}
}
