import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '主宰' },
      { id: 12, name: '露娜' },
      { id: 13, name: '賞金獵人' },
      { id: 14, name: '潮汐獵人' },
      { id: 15, name: '先知' },
      { id: 16, name: '龍騎士' },
      { id: 17, name: '冥界葉龍' },
      { id: 18, name: '狙擊手' },
      { id: 19, name: '幽鬼' },
      { id: 20, name: '巨魔戰將' }
    ];
    return {heroes};
  }
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}