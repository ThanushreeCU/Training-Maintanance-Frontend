import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts'
import { BatchService } from '../batch.service';
import { Router } from '@angular/router';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-no-of-batches',
  templateUrl: './no-of-batches.component.html',
  styleUrls: ['./no-of-batches.component.css']
})
export class NoOfBatchesComponent implements OnInit {
  constructor(private service: BatchService, private router: Router) {
    this.getbatch();
  }
  getdetail: any = [];
  getbatch() {
    this.service.getBatchData().subscribe(data => {
      console.log(data);
      this.getdetail = data;
      console.log("details", this.getdetail);
      this.getdetail.map(bardata => {
        console.log(bardata.batchcode)
        this.service.barchartdata.push({
          batches: bardata.batchcode,
          visits: 39
        })
        console.log("barchartdata", this.service.barchartdata)
      })
    }, err => {
      console.log(err);
    }, () => {
      console.log('Batch Details are got Successfully')
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this.barchart();
    }, 1000);
  }

  barchart() {
    am4core.useTheme(am4themes_animated);
    // Themes end
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart3D);
    // Add data
    chart.data = this.service.barchartdata
    // [{
    //   "country": "Batch 1",
    //   "visits": 50
    // }];
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "batches";
    categoryAxis.renderer.labels.template.rotation = 90;
    categoryAxis.renderer.labels.template.hideOversized = false;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.label.rotation = 270;
    categoryAxis.tooltip.label.horizontalCenter = "right";
    categoryAxis.tooltip.label.verticalCenter = "middle";
    categoryAxis.renderer.cellEndLocation = 0.8;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "No. of Students";
    valueAxis.title.fontWeight = "bold";
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "batches";
    series.name = "Visits";
    series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 4;
    columnTemplate.stroke = am4core.color("#10C423");
    columnTemplate.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineY.strokeOpacity = 0;
  }

  studentdetails() {
    this.router.navigateByUrl('./studentdetails')
  }
}
