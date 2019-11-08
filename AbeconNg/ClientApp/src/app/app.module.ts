import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MediaComponent } from './media/media.component';
import { StageComponent } from './stage/stage.component';
import { PhotoComponent } from './photo/photo.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    MovieComponent,
    MediaComponent,
    StageComponent,
    PhotoComponent,
    BookComponent,
    AdminComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'movie', component: MovieComponent },
      { path: 'media', component: MediaComponent },
      { path: 'stage', component: StageComponent },
      { path: 'photo', component: PhotoComponent },
      { path: 'book', component: BookComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
