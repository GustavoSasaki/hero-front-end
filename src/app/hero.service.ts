import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { supabase } from './supabase';


//to do:
// find better colors
//put in vercel
//add color to hero
//add new heroes
//add about

//add descriptiom
//add better text to generate

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { 
  }

  async getHeroes(){
    this.messageService.add('Fetched all heroes')
    const {data: heroes}= await supabase.from('heroes').select('*')
    return heroes ?? []
  }

  async getHero(id: number){
    this.messageService.add(`Fetched hero id=${id}`);
    const {data: heroes}= await supabase.from('heroes').select('*').eq('id',id).single()
    return heroes
  }

  async getTopHeroes(){
    this.messageService.add('Fetched top heroes')
    const {data: heroes}= await supabase.from('heroes').select('*').order('id',{ascending:false}).limit(8)
    return heroes ?? []
  }
}
