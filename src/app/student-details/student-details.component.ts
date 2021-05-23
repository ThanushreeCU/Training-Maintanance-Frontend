import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private service: BatchService) { }

  getStudentDetails() {
    this.service.getStudentData().subscribe(data => {
      this.service.studentdetails = data
      console.log(data);
      console.log(this.service.studentdetails.length);
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
    this.getStudentDetails();
    $(window).on("load resize ", function () {
      var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
      $('.tbl-header').css({ 'padding-right': scrollWidth });
    }).resize();
  }
}
