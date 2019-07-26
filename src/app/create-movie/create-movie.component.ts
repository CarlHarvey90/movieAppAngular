import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Observable } from 'rxjs';
import { Movies} from '../Movies'
// import { Movie } from '../movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  //movie: Movies = new Movies("","","","");

  movies: Movies = new Movies();
  submitted = false;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  // createMovie(): void {
  //   this.httpClientService.createMovie(this.movies)
  //       .subscribe( data => {
  //         alert("Movie created successfully.");
  //       });

  // };
  newMovie(): void {
    this.submitted = false;
    this.movies = new Movies();
  }

  save() {
    this.httpClientService.createMovie(this.movies)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.movies = new Movies();
  }

  onSubmit() {
    this.save();
  }
}
