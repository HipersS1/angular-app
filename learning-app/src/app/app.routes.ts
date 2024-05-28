import { Routes } from '@angular/router';
import { TicTacToeComponent } from './components/games/tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tic-tac-toe',
    component: TicTacToeComponent,
  },
];
