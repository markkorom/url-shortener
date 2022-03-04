import { Injectable } from '@nestjs/common';
import { PostUrlDto } from './dtos/post-url.dto';
import { UrlService } from 'src/url/url.service';
import { urlAlphabet, customAlphabet } from 'nanoid';

@Injectable()
export class UrlShortenerService {
  // Use env instead of magic number?
  private nanoid = customAlphabet(urlAlphabet, 7);

  constructor(private readonly urlService: UrlService) {}

  async getShortUrl(postUrlDto: PostUrlDto) {
    const { url } = postUrlDto;
    const urlDocument = await this.urlService.findByOriginalUrl(url);

    let baseUrl = process.env.BASE_URL || 'https://www.tier.app';
    if (!urlDocument) {
      const newUrlDocument = await this.urlService.create(url, this.nanoid());
      return `${baseUrl}/${newUrlDocument.short}`;
    } else {
      await this.urlService.increaseClicks(urlDocument);
      return `${baseUrl}/${urlDocument.short}`;
    }
  }
}
