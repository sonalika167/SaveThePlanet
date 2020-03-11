import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgoComponent } from './ngo/ngo.component';
import { DonateComponent } from './donate/donate.component';
import { DonationwindowComponent } from './donationwindow/donationwindow.component';
import { GuideComponent } from './guide/guide.component';
import { LearnComponent } from './learn/learn.component';
import { QuizComponent } from './quiz/quiz.component';
import { CurrenthappeningsComponent } from './currenthappenings/currenthappenings.component';
import { AchieversComponent } from './achievers/achievers.component';
import { EffectsComponent } from './effects/effects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NgoComponent,
    DonateComponent,
    DonationwindowComponent,
    GuideComponent,
    LearnComponent,
    QuizComponent,
    CurrenthappeningsComponent,
    AchieversComponent,
    EffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
