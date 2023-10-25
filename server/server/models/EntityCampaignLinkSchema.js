import { Schema } from "mongoose";

export const entityCampaignLinkSchema = new Schema({
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  entityId: { type: Schema.Types.ObjectId, required: true, ref: 'Entity' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  isPrivate: { type: Boolean, default: true }
}, { timestamps: true, toJSON: { virtuals: true } })

entityCampaignLinkSchema.virtual('Entity', {
  localField: 'entityId',
  foreignField: '_id',
  justOne: true,
  ref: 'Entity'
})