import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-info',
  templateUrl: './batch-info.component.html',
  styleUrls: ['./batch-info.component.css']
})
export class BatchInfoComponent implements OnInit {

  constructor(private service: BatchService) {
    this.getBatchData()
  }

  // GetBatchData

  getBatchData() {
    this.service.getBatchData().subscribe(data => {
      console.log("batch", data)
      this.service.batchDetails = data;
      console.log("batchDetails", this.service.batchDetails)
    }, err => {
      console.log(err)
    })
  }
  ngOnInit() {
  }
}
