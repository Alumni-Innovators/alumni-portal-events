import { Prop, Schema } from '@nestjs/mongoose';
// import mongoose, { ObjectId } from 'mongoose';

@Schema()
export class Event {
  @Prop()
  name: string;

  @Prop() startDate: Date;

  @Prop() endDate: Date;

  @Prop() description: string;

  @Prop() venue: string;

  @Prop({ required: true }) isApproved: boolean;

  //   TODO:Find How to do it, in the context of microservice
  @Prop({ required: true }) createdBy: string;
  @Prop({ required: true }) approvedBy: string;
}
