import { Injectable } from '@nestjs/common';
import { echoTest } from '@strong/utils';

import { IPost } from './type';

@Injectable()
export class AppService {
    getHello(): string {
        return echoTest();
    }

    async getPosts(): Promise<IPost[]> {
        return [{ id: 0, title: 'post1', body: 'post1' }];
    }
}
