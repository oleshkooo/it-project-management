import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const port = process.env.PORT ?? 4000

    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())

    const swaggerConfig = new DocumentBuilder().setTitle('API').setVersion('1.0').build()
    const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
    SwaggerModule.setup('api', app, swaggerDocument)

    await app.listen(port)
}
bootstrap()
