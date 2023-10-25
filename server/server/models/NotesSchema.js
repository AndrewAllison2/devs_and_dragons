import { Schema } from "mongoose";


export const NotesSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  body: { type: String, maxlength: 2000 },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  isRecap: { type: Boolean, default: false },
}, { timestamps: true })