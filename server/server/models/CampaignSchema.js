import { Schema } from "mongoose";

export const CampaignSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  coverImg: { type: String, minLength: 3, maxLength: 400 },
  desc: { type: String, required: true, minLength: 10, maxLength: 2500 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  isPrivate: { type: Boolean, default: false },
  tags: [{ type: String, maxLength: 20 }],
  capacity: { type: Number, required: true },
  isArchived: { type: Boolean, default: false },
  nextSessionDate: { type: Date },
  discordLink: { type: String, minLength: 30 }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

CampaignSchema.virtual('partyCount', {
  localField: '_id',
  foreignField: 'campaignId',
  ref: 'AccountCampaignLink',
  count: true
})


// TODO ADD CREATOR VIRTUAL // CoverImg

