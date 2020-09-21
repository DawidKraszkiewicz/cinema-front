import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent} from '@angular/material/datepicker';
import { RepertuarService } from '../repertuar/shared/repertuar.service';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
event: string;
film: any;
day: any;
weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(private repertuarService: RepertuarService , private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.getFilm(this.route.snapshot.paramMap.get('id'));
  }
  getFilm(id: any): void {
    this.repertuarService.get(id)
      .subscribe(
        data => {
          this.film = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }
  addEvent( event: MatDatepickerInputEvent<Date>): void{
    this.event = `${event.value}`;
    this.day = new Date(this.event).getDay();
    console.log(this.day);
   }

}
