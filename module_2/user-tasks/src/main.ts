import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser"

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule, { cors: true });
    app.setGlobalPrefix("api")
    const options = {
      "origin":true,
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 200,
      "credentials":true,
      "allowedHeaders": "Content-Type, Accept,Authorization"
    }

    /* app.enableCors({
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
    }); */

    app.enableCors({
      origin: 'https://localhost:27017',
    });

    const config = new DocumentBuilder()
      .setTitle("NestjsTEST")
      .setDescription("REST API")
      .setVersion("1.0.0")
      .build()

    
    app.useGlobalPipes(new ValidationPipe())

    app.use(cookieParser())
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)

    await app.listen(PORT, () => {
      console.log(`Server ${PORT}-portda`);
    });  
  } catch (error) {
    console.log(error);
  }
}

start();
