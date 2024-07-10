import { Injectable } from '@nestjs/common';
import { echoTest } from '@strong/utils';

@Injectable()
export class AppService {
    getHello(): string {
        return echoTest();
    }
}
