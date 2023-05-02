import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  is_done: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Admin" })
  admin_id: string
}

export const TaskSchema = SchemaFactory.createForClass(Task);
