import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class AccountCampaignLinkService {
  async getAccountLinksByCampaignId(campaignId) {
    const accountLinks = await dbContext.AccountCampaignLink.find({ campaignId }).populate('Profile', 'name picture')
    return accountLinks
  }
  async createAccountLink(linkData) {
    const campaign = await campaignService.getCampaignById(linkData.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden('You cannot join an archived campaign.')
    }
    const newLink = (await (await dbContext.AccountCampaignLink.create(linkData)).populate('Profile', 'name picture')).populate('Campaign')
    return newLink
  }

  async deleteAccountLink(accountLinkId, accountId) {
    const linkToDelete = await dbContext.AccountCampaignLink.findById(accountLinkId)
    if (!linkToDelete) {
      throw new BadRequest('This link does not extist')
    }
    if (linkToDelete.accountId != accountId) {
      throw new Forbidden('You cannot delete a link that is not yours')
    }
    await linkToDelete.remove()
    return linkToDelete
  }

  async getCampaignsByAccountLink(accountId) {
    const accountLinks = await dbContext.AccountCampaignLink.find({ accountId }).populate('Campaign')
    return accountLinks
  }

}

export const accountCampaignLinkService = new AccountCampaignLinkService()