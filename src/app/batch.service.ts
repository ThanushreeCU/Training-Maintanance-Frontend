import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BatchService {
  batchDetails: any = [];
  studentdetails: any = [];
  tech: any = [];
  count: any = [];
  Technology: any = [];
  BatchStatus: any = [];
  BatStatus: any = [];

  constructor(private http: HttpClient) {
    this.getBatchData();
    this.getStudentData();
    this.getTechnology();
    this.getBatchStatus();
  }
  barchartdata: any = [];

  url = "http://localhost:4000";

  // PostBatch

  postdetails(data) {
    return this.http.post(`${this.url}/CreateDetails`, data);
  }

  // GetBatchData

  getBatchData() {
    return this.http.get(`${this.url}/getDetails`);
  }

  // GetStudentData

  getStudentData() {
    return this.http.get(`${this.url}/getStudents`)
  }

  // GetTechnology

  getTechnology() {
    return this.http.get(`${this.url}/technology`)
  }
  // GetBatchStatus

  getBatchStatus() {
    return this.http.get(`${this.url}/getBatchStatus/`)
  }

}
