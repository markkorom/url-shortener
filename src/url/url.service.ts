import { Injectable, Logger } from '@nestjs/common';
import { Url, UrlDocument } from './schemas/url.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UrlService {
  private logger = new Logger(UrlService.name);
  constructor(
    @InjectModel(Url.name)
    private urlModel: Model<UrlDocument>,
  ) {}
  async findByOriginalUrl(url: string): Promise<UrlDocument> {
    // TODO: Error handling
    return this.urlModel.findOne({ original: url });
  }

  async create(original: string, short: string): Promise<UrlDocument> {
    const urlDoc = new this.urlModel({ original, short });

    try {
      return await urlDoc.save();
    } catch (error) {
      // TODO: better typing for error if possible
      this.logger.error(`Unable to save new url document. ${error as string}`);
      throw error;
    }
  }

  async increaseClicks(urlDocument: UrlDocument) {
    // TODO: error handling
    return urlDocument.updateOne({ clicks: urlDocument.clicks + 1 });
  }
}
