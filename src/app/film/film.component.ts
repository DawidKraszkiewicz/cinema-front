import { Component, OnInit } from '@angular/core';
import { RepertuarService } from '../repertuar/shared/repertuar.service';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: any;
  constructor(private repertuarService: RepertuarService
            , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFilm(this.route.snapshot.paramMap.get('id'));
  }
  getFilm(id): void {
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
}
