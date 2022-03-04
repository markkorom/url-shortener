import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Url } from '../url/schemas/url.schema';
import { UrlShortenerService } from './url-shortener.service';
import { Model } from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import { UrlService } from '../url/url.service';

describe('UrlShortenerService', () => {
  let service: UrlShortenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      providers: [
        {
          provide: getModelToken(Url.name),
          useValue: Model,
        },
        UrlService,
        UrlShortenerService,
      ],
    }).compile();

    service = module.get<UrlShortenerService>(UrlShortenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
