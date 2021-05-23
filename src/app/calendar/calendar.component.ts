import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { CalendarService } from '../calendar.service';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

	constructor(private service: CalendarService, private router: Router) {
	}

	actualData: any = [];
	calendarData: any = [];

	// GetCalendarData

	getCalendarEvent() {
		this.service.getCalendar().subscribe(data => {
			this.calendarData = data;
			this.calendarData.map(eve => {
				this.actualData.push({
					title: eve.batch + ' ' + eve.technology + ' ' + eve.fromtime + ' to ' + eve.totime,
					start: eve.fromtodate[0],
					end: eve.fromtodate[1],
				})
			})
			console.log('Events ', this.actualData)
		}, err => {
			console.log(err)
		}, () => {
			console.log("data get Successfully")
		})
	}

	getcalendar() {
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			}, 
			events: this.actualData,
			timeFormat: ' '
		});
	}

	// DownloadingPDF

	downloadAsPDF() {
		let data = document.getElementById('calendar'); html2canvas(data).then(canvas => {
			const contentDataURL = canvas.toDataURL('image/png')
			let pdf = new jspdf('l', 'cm', 'a4');
			pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
			pdf.save('calendar.pdf');
		});
	}

	myFunction() {
		console.log(this.calendarData, "in function");
		this.getcalendar();
	}

	async ngOnInit() {
		this.getCalendarEvent();
	}
}
