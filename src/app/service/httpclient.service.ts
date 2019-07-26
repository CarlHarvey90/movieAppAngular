import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Movies{
  constructor(
    public id:number,
    public moviesID:string,
    public name:string,
    public genre:string,
    public desc:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getMovies()
  {
    console.log("test call");
    return this.httpClient.get<Movies[]>('http://localhost:8080/movies');
  }

  // public createMovie(movie) {
  //   return this.httpClient.post<Movies>("http://localhost:8080/movies", movie)
  // }

  createMovie(movies: any): Observable<any> {
    console.log(movies);
    return this.httpClient.post<Movies>("http://localhost:8080/movies", movies);
  }
}