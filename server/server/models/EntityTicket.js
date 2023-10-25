import { Schema } from "mongoose";

export const entityTicketSchema = new Schema({
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  entityId: { type: Schema.Types.ObjectId, required: true, ref: 'Entity' }
}, { timestamps: true, toJSON: { virtuals: true } })

entityTicketSchema.virtual('Entity', {
  localField: 'campaignId',
  foreignField: '_id',
  justOne: true,
  ref: 'Entity'
})