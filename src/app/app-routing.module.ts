import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgoComponent } from './ngo/ngo.component';
import { DonateComponent} from './donate/donate.component';
import {DonationwindowComponent} from './donationwindow/donationwindow.component';
import{ GuideComponent} from './guide/guide.component';
import {LearnComponent} from './learn/learn.component';
import {CurrenthappeningsComponent} from './currenthappenings/currenthappenings.component';
import {QuizComponent} from './quiz/quiz.component';
import {AchieversComponent} from './achievers/achievers.component';
import {EffectsComponent} from './effects/effects.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: 'home', component:HomeComponent
},{
  path: 'ngodetails', component: NgoComponent
},{
  path: 'donate', component: DonateComponent
},{
  path: 'donatewindow', component: DonationwindowComponent
},{
  path: 'guide', component: GuideComponent
},{
  path: 'effects', component: EffectsComponent
},{
  path: 'learn', component: LearnComponent
},
{
  path: 'achievers', component: AchieversComponent
},{
  path: 'currenthappenings', component: CurrenthappeningsComponent
},{
  path: 'quiz', component: QuizComponent
},{
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
