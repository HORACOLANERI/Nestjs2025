import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MovimientosService } from 'src/service/movimientos.service';

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Post('alta')
  nuevoMovimiento(@Body() movimiento: any) {
    return this.movimientosService.save(movimiento);
  }

  @Get('cuenta/:idCuenta')
  findByIdCuenta(@Param('idCuenta') idCuenta: number) {
    return this.movimientosService.findByIdCuenta(idCuenta);
  }

  @Get('fechas')
  buscarPorFechas(@Query('fecha1') fecha1: Date, @Query('fecha2') fecha2: Date) {
    console.log('fecha1 '+ fecha1)
    console.log('fecha2 '+ fecha2)
    return this.movimientosService.findByFechas(fecha1, fecha2);
  }



}
