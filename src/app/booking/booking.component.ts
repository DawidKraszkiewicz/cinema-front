import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RepertuarService } from '../repertuar/shared/repertuar.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  event: string;
  film: any;
  day: any;
  status = false;
  chosenDay;
  currentDay = new Date();
  currentDate = moment();
  days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];

  daysSpliced = [];
  weekdays: { day: string; date: any }[] = [];

  constructor(
    private repertuarService: RepertuarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareWeekdays();
    this.getHours(this.route.snapshot.paramMap.get('id'));
  }
  prepareWeekdays(): void {
    const today = this.currentDay.getDay();
    this.daysSpliced = this.days.splice(0, today);
    const currentDays =  this.days.concat(this.daysSpliced);
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0 ; i < currentDays.length; i++) {
      const dayObject = {
        day: currentDays[i],
        date: this.currentDate.add(1, 'days').format('YYYY-MM-DD'),
      };
      this.weekdays.push(dayObject);
      console.log(dayObject);
    }
  }
  getHours(id: any): void {
    this.repertuarService.getFilmHours(id).subscribe(
      (data) => {
        this.film = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addEvent(event: MatDatepickerInputEvent<Date>): void {
    this.event = `${event.value}`;
    const eventDate = new Date(this.event).toLocaleDateString('en-US', {weekday: 'short'});
    console.log(this.days);
    const indexOfWeekday = this.weekdays.findIndex(i => i.day === eventDate);
    console.log(indexOfWeekday);
    this.chosenDay = indexOfWeekday;
  }
  setDay(index): void {
    this.chosenDay = index;
    console.log(this.chosenDay);
  }

}
