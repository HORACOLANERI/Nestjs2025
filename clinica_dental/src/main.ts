import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitir solicitudes desde el frontend (CORS)
  app.enableCors();

  // Validación global para los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignora propiedades que no están en el DTO
      forbidNonWhitelisted: true, // Lanza error si llegan propiedades no permitidas
      transform: true, // Convierte automáticamente tipos (por ejemplo, string a number)
    }),
  );

  await app.listen(3000);
  console.log('Servidor NestJS corriendo en http://localhost:3000');
}
bootstrap();
