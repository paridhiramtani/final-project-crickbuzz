import { Routes } from '@angular/router';
import { PointTableComponent } from './components/point-table/point-table.component';
import { LiveMatchComponent } from './components/live-match/live-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { RankingPlayerComponent } from './components/ranking-player/ranking-player.component';
import { PlayersComponent } from './components/players/players.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddplayerComponent } from './crud/addplayer/addplayer.component';
import { EditComponent } from './crud/edit/edit.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { authLoginGuard } from './guards/auth-login.guard';

export const routes: Routes = [
  { path: '', component: LiveMatchComponent }, // Default home
  { path: 'matches', component: MatchesComponent },
  { path: 'pointtable', component: PointTableComponent },
  { path: 'ranking', component: RankingPlayerComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  
  // CRUD Routes with Guard
  { path: 'players/addplayer', component: AddplayerComponent, canActivate: [authLoginGuard] },
  { path: 'players/edit/:id', component: EditComponent, canActivate: [authLoginGuard] },

  // Wildcard route for 404
  { path: '**', component: PagenotfoundComponent }
];
