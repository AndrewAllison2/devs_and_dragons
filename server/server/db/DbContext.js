import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CampaignSchema } from "../models/CampaignSchema.js";
import { EntitySchema } from "../models/EntitySchema.js";
import { entityCampaignLinkSchema } from "../models/EntityCampaignLinkSchema.js";
import { NotesSchema } from "../models/NotesSchema.js";
import { accountCampaignLinkSchema } from "../models/AccountCampaignLinkSchema.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Campaigns = mongoose.model('Campaign', CampaignSchema);
  Entities = mongoose.model('Entity', EntitySchema)
  EntityCampaignLink = mongoose.model('EntityCampaignLink', entityCampaignLinkSchema)
  Notes = mongoose.model('Note', NotesSchema)
  AccountCampaignLink = mongoose.model('AccountCampaignLink', accountCampaignLinkSchema)
}

export const dbContext = new DbContext()
