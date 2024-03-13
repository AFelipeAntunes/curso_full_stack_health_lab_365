import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [

 {
   path: 'Home',
   component: HomeComponent
 },
 {
   path: 'card',
   component: CardComponent
 }
];
