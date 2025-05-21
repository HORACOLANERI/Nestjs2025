import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';
import { CuentasService } from 'src/service/cuentas.service';


@Controller('cuentas')
export class CuentasController {
 constructor(private readonly cuentasService: CuentasService) {}
  @Post('alta')
  guardar(@Body() cuenta:Cuenta):void{
    this.cuentasService.save(cuenta);
  }

  @Get('buscarnum/:num')
  buscarPorNumero(@Param("num") numeroCuenta:string):Cuenta{
    return this.cuentasService.findByNumeroCuenta(numeroCuenta);
  }

  @Get('buscarsaldo/:saldo')
  buscarPorSaldo(@Param("saldo") saldoMin:number):Cuenta[]{
    return this.cuentasService.findBySaldoMin(saldoMin);
  }

  @Get('buscartipo/:tipo')
  buscarPorTipo(@Param("tipo") tipo:string):Cuenta[]{
    return this.cuentasService.findByTipo(tipo);
  }

  @Delete('eliminar/:num')
  eliminarPorNumero(@Param("num") numeroCuenta:string):void{
    this.cuentasService.deleteByNumeroCuenta(numeroCuenta);
  } 


}


