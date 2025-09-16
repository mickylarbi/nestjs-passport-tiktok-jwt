import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', // Allows all domains to access the resources (use carefully in production)
    methods: 'GET,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept, Authorization, X-App-Identifier', // Allowed headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
