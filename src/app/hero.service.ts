import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Observable,of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError,map,tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl='api/heroes';

  constructor(
    private http:HttpClient,
    private messageService:MessageService
  ) { }

  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id:number):Observable<Hero>{
    const url=this.heroesUrl+'/'+id;
    console.log(url);
    return this.http.get<Hero>(url);
  }

  private log(message:string){
    this.messageService.add('hello:$(message)');
  }

  private handleError<T>(operation='operation',result?:T){
    return (error:any): Observable<T>=>{
      console.log(error);
      this.log('${operation}failed:${error.message}');
      return of(result as T);
    }
  }

  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl,hero,this.httpOptions);
  }

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero,
      this.httpOptions);
  }

  deleteHero(hero:Hero | number):Observable<Hero> {
    const id=typeof hero === 'number' ?hero:hero.id;
    const url=this.heroesUrl+'/'+id;
    return this.http.delete<Hero>(url,this.httpOptions);
  }

  searchHeroes(term:String):Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(this.heroesUrl+'/?name='+term);
  }
}
