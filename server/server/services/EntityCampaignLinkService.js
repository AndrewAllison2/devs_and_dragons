import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class EntityCampaignLinkService {
  async getEntityLinkById(entityLinkId) {
    const entityLink = await dbContext.EntityCampaignLink.findById(entityLinkId).populate('Entity')
    if (!entityLink) {
      throw new BadRequest('No Entity Link by that ID')
    }
    return entityLink
  }
  async createEntityCampaignLink(data) {
    const campaign = await campaignService.getCampaignById(data.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden('campaign is closed.')
    }
    const newLink = (await dbContext.EntityCampaignLink.create(data)).populate('Entity')
    return newLink
  }

  async deleteEntityCampaignLink(entityLinkId, accountId) {
    const linkToDelete = await dbContext.EntityCampaignLink.findById(entityLinkId)
    if (!linkToDelete) {
      throw new BadRequest('This link could not be found')
    }
    if (linkToDelete.creatorId != accountId) {
      throw new Forbidden('You cannot delete a link that you did not create')
    }
    await linkToDelete.remove()
    return linkToDelete
  }

  async getEntityCampaignLinksByCampaignId(campaignId) {
    const entityLinks = await dbContext.EntityCampaignLink.find({ campaignId }).populate('Entity')
    return entityLinks
  }

  async editEntityLink(data, entityLinkId, userId) {
    const originalLink = await this.getEntityLinkById(entityLinkId)
    if (!originalLink) {
      throw new BadRequest('Cannot find a link by that ID')
    }
    originalLink.isPrivate = data.isPrivate

    await originalLink.save()
    return originalLink

  }
}



export const entityCampaignLinkService = new EntityCampaignLinkService()