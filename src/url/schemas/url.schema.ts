import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url {
  @Prop({ index: true, required: true, unique: true })
  original: string;

  @Prop({ index: true, required: true, unique: true })
  short: string;

  @Prop({ default: 1, required: true })
  clicks: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
