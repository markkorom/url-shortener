import { ConfigModule } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from '../url/url.service';
import { UrlShortenerController } from './url-shortener.controller';
import { UrlShortenerService } from './url-shortener.service';
import { Model } from 'mongoose';
import { Url } from '../url/schemas/url.schema';

describe('UrlShortenerController', () => {
  let controller: UrlShortenerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [UrlShortenerController],
      providers: [
        {
          provide: getModelToken(Url.name),
          useValue: Model,
        },
        UrlService,
        UrlShortenerService,
      ],
    }).compile();

    controller = module.get<UrlShortenerController>(UrlShortenerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
