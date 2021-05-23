import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
  title = 'fileUpload';
  images;
  multipleImages = [];

  constructor(private service: BatchService, private router: Router, private http: HttpClient) {
  }
  // PostBatch

  batchdetails(data) {
    console.log(data)
    this.service.postdetails(data).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    }, () => {
      console.log("Post Successfully")
    })
  }

  //picking an file
  selectExcel(event) {
    const file = event.target.files[0];
    this.images = file;
  }

  //submit button to send file to backend
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);
    this.http.post('http://localhost:4000/file', formData).subscribe(
      (res) => {
        console.log(res),
          (err) => console.log(err)
      }
    )
  }

  ngOnInit() {

    // Blocking for paid and free  

    var initialText = $('.editable').val();
    $('.editOption').val(initialText);

    $('#test').change(function () {
      var selected = $('option:selected', this).attr('class');
      var optionText = $('.editable').text();

      if (selected == "editable") {
        $('.editOption').show();


        $('.editOption').keyup(function () {
          var editText = $('.ty-editOption').val();
          $('.editable').val(editText);
        });

      } else {
        $('.editOption').hide();
      }
    });


    var $batchtype = $('#batchtype'),
      $feeInfo = $('#province');
    $batchtype.change(function () {
      if ($batchtype.val() == 'other') {
        $feeInfo.attr('disabled', 'disabled').val('0');

      } else {
        $feeInfo.removeAttr('disabled');
      }
    }).trigger('change'); // added trigger to calculate initial state
  }
}


