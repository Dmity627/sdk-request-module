import { Module } from '@nestjs/common';
import { RequestModule } from './sdk/request/request.module';

@Module({
  imports: [RequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
