import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { routes } from './../app.routes';
import { Router } from '@angular/router';


interface User {
  name?:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private loggedInKey = 'loggedIn'

  // If deploying using Method 1 (Unified), use relative paths:
  baseUrl:string = "/livescores"
  playerUrl:string = "/players"
  pointTableUrl:string = "/pointtable"
  matchesUrl:string = "/matches"
  t20Url:string = "/t20"
  testUrl:string = "/test"
  odiUrl:string = "/odi"
  userLoginAPI:string = "" // Empty string results in relative root path

  constructor(private http : HttpClient , public router:Router , private jwtHelper: JwtHelperService) { }

getMatchScore(){
  return this.http.get(this.baseUrl)
}

getPlayerData(){
  return this.http.get(this.playerUrl)
}

getPointTable(){
  return this.http.get(this.pointTableUrl)
}
 
matches(){
  return this.http.get(this.matchesUrl)
}

addPlayerData(players:any){
  return this.http.post(this.playerUrl,players);
}

updatePlayer(id:string){
  return this.http.get(`${this.playerUrl}/${id}`);
}

updatePlayerData(playerData:any){
  return this.http.put(`${this.playerUrl}/${playerData._id}`, playerData);
}

deletePlayers(id:string){
  return this.http.delete(`${this.playerUrl}/${id}`);
}

t20Data(){
  return this.http.get(this.t20Url);
}

testData(){
  return this.http.get(this.testUrl);
}

odiData(){
  return this.http.get(this.odiUrl);
}

usersSignUp(user:User):Observable<any>{
  return this.http.post(`${this.userLoginAPI}/signup`,user)
}

usersLogin(user: User):Observable<any>{
  return this.http.post(`${this.userLoginAPI}/login`,user)
}

login(){
  sessionStorage.setItem(this.loggedInKey,'true')
}

logout(){
  sessionStorage.removeItem(this.loggedInKey)
}

isLoggedIn():boolean{
  return sessionStorage.getItem(this.loggedInKey) === 'true'
}

}
