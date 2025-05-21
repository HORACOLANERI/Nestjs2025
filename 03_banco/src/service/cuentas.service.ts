import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';

@Injectable()
export class CuentasService {
  cuentas:Cuenta[]=[];
  save(cuenta:Cuenta):boolean{
    //si el número de cuenta no existe, entonces se añade la cuenta
    if(!this.cuentas.some(c=>c.numeroCuenta==cuenta.numeroCuenta)){
      this.cuentas.push(cuenta);
      return true;
    }
    return false;
    
  }
  findByNumeroCuenta(numeroCuenta:string):Cuenta{
    return this.cuentas.find(c=>c.numeroCuenta==numeroCuenta);
  }
  findByTipo(tipo:string):Cuenta[]{
    return this.cuentas.filter(c=>c.tipo==tipo);
  }
  findBySaldoMin(saldoMin:number):Cuenta[]{
    return this.cuentas.filter(c=>c.saldo>=saldoMin);
  }
  deleteByNumeroCuenta(numeroCuenta:string):void{
    this.cuentas=this.cuentas.filter(c=>c.numeroCuenta!=numeroCuenta);
  } 

  } 


