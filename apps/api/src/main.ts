import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
        // 只使用error和warn这两种输出，避免在控制台冗余输出
        logger: ['error', 'warn'],
    });
    // 设置全局访问前缀
    app.setGlobalPrefix('api');
    // 关闭nestjs进程自动关闭mikroorm等进程
    app.enableShutdownHooks();
    // 启动后的输出
    await app.listen(8080, () => {
        console.log();
        console.log('api: http://localhost:8080/api');
    });
}
bootstrap();
