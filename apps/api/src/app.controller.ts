import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

import { IPost } from './type';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        console.log('Hello World!');
        console.log('welcome to');
        console.log('3rcd.com');
        return this.appService.getHello();
    }

    @Get('posts')
    getPosts(): Promise<IPost[]> {
        return this.appService.getPosts();
    }
}
