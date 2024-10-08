import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const _PORT = 8000;

  const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(_PORT, () => {
		console.log(`Server started on port ${_PORT}`)
	});
}
bootstrap();
