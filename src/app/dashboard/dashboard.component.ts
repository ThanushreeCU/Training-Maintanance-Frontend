import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts'
import { BatchService } from '../batch.service';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  tech: any = [];
  Technology: any = [];
 
  constructor(private service: BatchService) {
    this.getTechnology()
  }
  highcharts = Highcharts;

  chartOptions2 = {
    chart: { type: 'columnrange', inverted: false },
    title: { text: 'Monthly Requirement' },
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
    series: [{
      type: 'column',
      colorByPoint: true,
      data: [29, 71, 106, 129, 144, 176, 135, 148.5, 216, 194, 95, 54],
      showInLegend: false,
    }]
  };

  chartOptions3 = {
    chart: {
      marginBottom: 80
    },
    title: {
      text: 'No of Students Deployed'
    },
    xAxis: {
      categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      labels: {
        rotation: 90
      },
      title: {
        text: 'Years'
      }
    },
    yAxis: {
      title: {
        text: 'Number Of Students'
      }
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  };

  /* semi-circle-technology */
  getTechnology() {
    let Technology = [];
    this.service.getTechnology().subscribe(data => {
      this.tech = data;
      for (let i = 0; i < this.tech.length; i++) {
        Technology.push({
          country: this.tech[i]._id.technology,
          value: this.tech[i].count
        });
        console.log("technology got", this.tech[i]._id.technology)
        console.log("technology count", this.tech[i].count)
      }
      var chart = am4core.create("technology", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data =Technology
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;
      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";
      series.slices.template.cornerRadius = 10;
      series.slices.template.innerCornerRadius = 7;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;
      series.alignLabels = false;
      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
    }) 
  }
  months = [100, 200, 300, 10, 20, 30, 40, 50, 60, 70, 80, 90]

  // trainer details
  type = 'PieChart';
  data = [
    ['Java', 6],
    ['Html', 3],
    ['css-bootstrap', 3],
    ['javascript', 4],
    ['angular', 3],
    ['Jdbc', 2],
    ['servlets', 2],
    ['springs', 2],
    ['sql', 2],
    ['hibernate', 3]
  ];
  columnNames = ['technologies', 'Percentage'];
  width = 1600;
  height = 600;
  options = {
    title: 'Trainer Details',
    is3D: false
  };

  ngOnInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawVisualization);
    function drawVisualization() {
      // Some raw data (not necessarily accurate)
      var data = google.visualization.arrayToDataTable([
        ['Years', 'Java', 'Oracle', 'DataScience', 'Angular', 'Phython', 'Average'],
        ['2014/15', 20, 18, 22, 5, 50, 20],
        ['2015/16', 40, 20, 39, 8, 68, 38],
        ['2016/17', 60, 47, 47, 17, 77, 52],
        ['2017/18', 80, 60, 55, 38, 85, 69],
        ['2018/19', 90, 81, 69, 50, 96, 89],
      ]);
      var options = {
        title: 'Yearly Trainnings Batches',
        vAxis: { title: 'Trainings', titleTextStyle: { color: 'Black' } },
        hAxis: { title: 'Years By Analysis', titleTextStyle: { color: 'Black' } },
        colors: ['darkcyan', 'dodgerblue', 'indianred', 'slategray', 'DarkGoldenRod'],
        is3D: true,
        seriesType: 'bars',
        series: {
          5: { type: 'line' },
        }
      };
      var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    function count($this) {
      var current = parseInt($this.html(), 10);
      current = current + 1;
      $this.html(++current);
      if (current > $this.data('count')) {
        $this.html($this.data('count'));
      } else {
        setTimeout(function () {
          count($this)
        }, 1);
      }
    }
    $(".stat-count").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });
  }
}
