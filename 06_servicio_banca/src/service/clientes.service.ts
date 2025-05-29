import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Repository } from 'typeorm';


@Injectable()
export class ClientesService {
  cuentasRepository: any;
  constructor(@InjectRepository(Cliente) private clientesRepository:Repository<Cliente>){
    
  }
  async findByNumeroCuenta(numeroCuenta:number):Promise<Cliente[]> {
    const cuenta:Cuenta=await this.cuentasRepository.findOne({
      where: {
        numeroCuenta: numeroCuenta
      },
      relations:["clientes"]
    });
    return cuenta.clientes; // Devuelve los clientes asociados a la cuenta
  }

}