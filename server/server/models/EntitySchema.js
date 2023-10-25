import { Schema } from "mongoose";

export const EntitySchema = new Schema({
  type: { type: String, enum: ['character', 'location', 'quest', 'magic item', 'equipment', 'npc', 'monster'], lowercase: true, required: true },
  tags: [{ type: String, maxlength: 20, }],
  desc: { type: String, required: true, maxlength: 500 },
  connections: { type: String, maxlength: 100 },
  body: { type: String, maxlength: 2500 },
  name: { type: String, maxlength: 100 },
  imgUrl: { type: String, maxlength: 2000 },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

EntitySchema.virtual('Creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})