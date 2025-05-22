import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Pais } from 'src/model/Pais';

@Injectable()
export class PaisesService {
  urlGlobal = "https://restcountries.com/v2/all";
  

  async findByContinente(continente: string): Promise<Pais[]>{
    const response=await axios.get(this.urlGlobal)
    const paises:Pais[]=response.data.filter(p=>p.region==continente) //Array de paises filtrado por continente
    .map(p=>new Pais(p.name, p.region, p.population, p.capital, p.flag)) //Array de paises con el formato de la clase Pais
    return paises
  }
  async findAllContinentes(): Promise<string[]>{
    const response=await axios.get(this.urlGlobal) 
    const regions:string[]=response.data //el JSON de la respuesta
    .map(p=> p.region) //Array de string con los nombres de los continentes, pero duplicados
    return [...new Set(regions)] //Sin duplicados
  }
  async findPoblacionMax():Promise<Pais>{
    const response=await axios.get(this.urlGlobal);
    const paises:Pais[]=response.data
  .map(p=>new Pais(p.name,p.region,p.population,p.capital,p.flag));
    return paises.reduce((aux,actual)=>{
      if(actual.poblacion>aux.poblacion){
        return actual;
      }else{
        return aux;
      } 
    });
  } 
}