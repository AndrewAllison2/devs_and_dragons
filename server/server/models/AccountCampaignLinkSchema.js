import { Schema } from "mongoose";


export const accountCampaignLinkSchema = new Schema({
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

accountCampaignLinkSchema.virtual('Campaign', {
  localField: 'campaignId',
  foreignField: '_id',
  justOne: true,
  ref: 'Campaign'
})
accountCampaignLinkSchema.virtual('Profile', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'

})