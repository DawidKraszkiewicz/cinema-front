import { Component, OnInit } from '@angular/core';
import { RepertuarService } from './shared/repertuar.service';


@Component({
  selector: 'app-repertuar',
  templateUrl: './repertuar.component.html',
  styleUrls: ['./repertuar.component.css']
})
export class RepertuarComponent implements OnInit {
  films: any;
   constructor(private repertuarService: RepertuarService) { }

  ngOnInit(): void {
    this.fetchFilms();
  }
  fetchFilms(): void{
    this.repertuarService.getAll()
    .subscribe(
      data => {
        this.films = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
