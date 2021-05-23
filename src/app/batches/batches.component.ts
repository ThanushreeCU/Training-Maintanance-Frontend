import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Highcharts from 'highcharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { chart } from 'highcharts'
import { BatchService } from '../batch.service';
import { Router } from '@angular/router';
import { CompileTemplateMetadata } from '@angular/compiler';
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  BatchStatus: any = [];
  batchDetails: any = [];
  studentdetails: any = [];
  count: any = [];

  ngOnInit() {
    this.getBatchStatus1()
    this.studentDeployed()
    // this. questionbank()
    // this.getBatchStatus()
  }
  constructor(private service: BatchService, private router: Router) {
  }
  ngAfterViewInit() { }
  // this.service.getBatchStatus().subscribe(data => {
  //   this.service.BatchStatus = data
  //   console.log("date", this.service.BatchStatus)
  //   this.service.BatStatus.push({
  //     "country": this.service.BatchStatus[2].yetToStart + 'yetToStart',
  //     litres: 7
  //   });
  // })
  getBatchStatus1() {
    let BatStatus: any = [];
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    /**
     * Define data for each year
     */
    this.service.getBatchStatus().subscribe(data => {
      this.BatchStatus = data;
      console.log("date", this.BatchStatus)
      for (let i = 0; i < this.BatchStatus.length; i++) {
        BatStatus.push({
          country: this.BatchStatus[i]._id.technology,
          yetToStartCount: this.BatchStatus[i].yetToStartCount + 'yet to start',
          onGoingCount: this.BatchStatus[i].onGoingCount,
          completedCount: this.BatchStatus[i].completedCount
        });
        // console.log("batchstatus got", this.service.BatchStatus[i].batchcode)
        // console.log("batchstatus count", this.service.BatchStatus[i].yetToStart)
      }
      // Create chart instance
      let chart = am4core.create("cha", am4charts.PieChart);
      // Add data
      chart.data = [
        { "sector": "yetToStartCount", "size": BatStatus[0].yetToStartCount },
        { "sector": "onGoingCount", "size": BatStatus[0].onGoingCount },
        { "sector": "completedCount", "size": BatStatus[0].completedCount },

        { "data": [12,30,30] }
      ];
      // Add label
      chart.innerRadius = 0;
      // let label = chart.seriesContainer.createChild(am4core.Label);
      // label.text = "java";
      // label.horizontalCenter = "middle";
      // label.verticalCenter = "middle";
      // label.fontSize = 50;
      var label = chart.createChild(am4core.Label);
      label.text = "Batches(Java Full Stack)";
      label.fontSize = 35;
      label.align = "center";
      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "size";
      pieSeries.dataFields.category = "sector";
    })
  }
  // Themes end
  // Create chart instance

  studentDeployed() {
    // bar chart for deployed
    am4core.useTheme(am4themes_animated);
    // Themes end
    var chart2 = am4core.create("chartdiv", am4charts.XYChart3D);
    // Add data
    chart2.data = [{
      "year": 2018,
      "income": 50,
      "color": chart2.colors.next()
    }, {
      "year": 2019,
      "income": 65,
      "color": chart2.colors.next()
    }, {
      "year": 2020,
      "income": 70,
      "color": chart2.colors.next()
    }, {
      "year": 2021,
      "income": 78,
      "color": chart2.colors.next()
    }, {
      "year": 2022,
      "income": 85,
      "color": chart2.colors.next()
    }];
    // Create axes
    var categoryAxis = chart2.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.title.text = "Year";
    categoryAxis.title.fontWeight = "bold"
    var valueAxis = chart2.xAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Number Of Students Deployed";
    // valueAxis.title.fontWeight="bold";
    valueAxis.title.fontSize = "30";
    // Create series
    var series = chart2.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
  }

  // Themes end
  // Create chart
  //   questionbank(){
  //     am4core.useTheme(am4themes_animated);
  // var chart1 = am4core.create("questionbank", am4charts.PieChart);
  // chart.hiddenState.properties.opacity = 0; 
  // chart1.data = [
  //   {
  //     country: "Core Java",
  //     value: 525
  //   },
  //   {
  //     country: "J2EE",
  //     value: 392
  //   },
  //   {
  //     country: "Hibernate",
  //     value: 300
  //   },
  //   {
  //     country: "Springs",
  //     value: 325
  //   }
  // ];
  // var label = chart1.createChild(am4core.Label);
  // label.fontSize = 35;
  // label.align = "center";
  // chart1.colors.list = [
  //     am4core.color("green"),
  //     am4core.color("blue"),
  //     am4core.color("green"),
  //     am4core.color("#FF9671"),
  //     am4core.color("#FFC75F"),
  //     am4core.color("#F9F871")
  //   ];
  // var series1 = chart1.series.push(new am4charts.PieSeries());
  // series1.dataFields.value = "value";
  // series1.dataFields.radiusValue = "value";
  // series1.dataFields.category = "country";
  // series1.slices.template.cornerRadius = 6;
  // series1.colors.step = 3;
  // series1.hiddenState.properties.endAngle = -90;
  //   }

  getBatchStatus() {
    let BatStatus: any = [];
    this.service.getBatchStatus().subscribe(data => {
      this.BatchStatus = data;
      console.log("date", this.service.BatchStatus)
      for (let i = 0; i < this.service.BatchStatus.length; i++) {
          BatStatus.push({
          country: this.service.BatchStatus[i]._id.technology,
          yetToStartCount: this.BatchStatus[i].yetToStartCount + 'yet to start',
          onGoingCount: this.BatchStatus[i].onGoingCount,
          completedCount: this.BatchStatus[i].completedCount
        });
        console.log("batchstatus got", BatStatus)
        // console.log("batchstatus got", this.service.BatchStatus[i].batchcode)
        // console.log("batchstatus count", this.service.BatchStatus[i].yetToStart)
      }
      var chart = am4core.create("java", am4charts.PieChart);
      chart.colors.list = [
        am4core.color("red"),
        am4core.color("blue"),
        am4core.color("green"),
        am4core.color("#FF9671"),
        am4core.color("#FFC75F"),
        am4core.color("#F9F871")
      ];
      var label = chart.createChild(am4core.Label);
      // label.text = "Batches(Java Full Stack)";
      label.fontSize = 35;
      label.align = "center";
      // Add data
      chart.data =BatStatus

      // [{
      //   "country":this.service.BatchStatus[2].yetToStart + 'yetToStart',
      //   "litres": 7
      // }, {
      //   "country": this.service.BatchStatus[2].ongoing + 'ongoing',
      //   "litres": 4
      // }, {
      //   "country": this.service.BatchStatus[0].completed + 'completed',
      //   "litres": 2
      // } ];
      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "yetToStartCount", "onGoingCount", "completedCount";
      pieSeries.dataFields.category = "country";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

    })
  }
}
