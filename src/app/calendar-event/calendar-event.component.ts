import { Component, OnInit } from '@angular/core'
import { Calendar } from '../grid.model';
import { BatchService } from '../batch.service';
import { CalendarService } from '../calendar.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {
  // date-picker
  minDate: Date;
  maxDate: Date;
  // form
  home = new Calendar()
  dataarray = [];
  fromtodate = {};
  arr = [];
  constructor(private service: CalendarService, private router: Router, private service1: BatchService) {
    this.service.calendar = this.fromtodate
    // date-picker
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 365);
  }

  onsubmit(data) {
    console.log(data)
    this.fromtodate = data;
    console.log(JSON.stringify(this.fromtodate))
    this.service.postcalendar(data).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    }, () => {
      console.log("Post Successfully")
      this.router.navigateByUrl('/calendar')
    })
  }


  ngOnInit() {
    this.dataarray.push(this.home)
  }
  addForm() {
    this.home = new Calendar()
    this.dataarray.push(this.home)
  }

  delForm(index) {
    this.dataarray.splice(index)
  }
}