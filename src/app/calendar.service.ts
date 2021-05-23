import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) {
    this.getCalendar();
  }
  calendar: any = [];
  url = "http://localhost:4000";

  postcalendar(data) {
    return this.http.post(`${this.url}/CalendarEvent`, data);
  }

  getCalendar() {
    return this.http.get(`${this.url}/getCalendarEvent`)
  }
}
