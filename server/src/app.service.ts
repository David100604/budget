import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}


// https://www.youtube.com/watch?v=iqdMcTN9qck&list=PLkUJHNMBzmtQj5qvTCqn0uMXFDG4ENiwf&index=4