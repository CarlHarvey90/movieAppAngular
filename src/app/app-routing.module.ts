import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

    { path: 'movies', component: MovieComponent},
    { path: 'createMovie', component: CreateMovieComponent},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }