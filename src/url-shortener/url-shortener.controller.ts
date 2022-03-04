import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PostUrlDto } from './dtos/post-url.dto';
import { UrlShortenerService } from './url-shortener.service';

@Controller('url-shortener')
@ApiTags('url-shortener')
export class UrlShortenerController {
  constructor(private urlShortenerService: UrlShortenerService) {}

  @Post()
  @ApiBody({ type: PostUrlDto })
  async getShortUrl(@Body() postUrlDto: PostUrlDto): Promise<string> {
    return await this.urlShortenerService.getShortUrl(postUrlDto);
  }
}
