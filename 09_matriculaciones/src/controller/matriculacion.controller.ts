import { Controller, Get, Param } from "@nestjs/common";
import { MatriculacionService } from "src/service/matriculacion.service";

@Controller('matriculacion')
export class MatriculacionController {
  constructor(private readonly matriculacionService: MatriculacionService) {}
  @Get('matriculas/:idCurso')
  matriculasCurso(@Param("idCurso")idCurso:number){
    return this.matriculacionService.findByCurso(idCurso);
  }

}