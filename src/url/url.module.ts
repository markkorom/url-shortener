import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Url, UrlSchema } from './schemas/url.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }]),
  ],
  providers: [UrlService],
  exports: [UrlService],
})
export class UrlModule {}
