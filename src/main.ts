import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pacto de Ideias')
    .setDescription('A aplicação possibilita o cadastro de novas ideias fundamentadas nos ODS e sserve aos gestores públicos como catálogo de ideias para políticas públicas e de governo, fortalecendo a proposta do projeto de compromisso entre cidadãos e governo para promover mudanças baseadas nos ODS.')
    .setVersion('1.0')
    .addTag('tags') // Adiciona tags para agrupar os endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
