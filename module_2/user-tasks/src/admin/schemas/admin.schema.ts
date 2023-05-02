import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  hashed_password: string;

  @Prop()
  hashed_token: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
