import { AppState } from "../AppState.js";
import { EntityCampaignLink } from "../models/EntityCampaignLink.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"


class EntitiesCampaignLinkService {

  async getEntityLinksByCampaign(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/entitycampaignlinks`)
    // logger.log('res data from entity links', res.data);
    const entityLinks = res.data.map(e => new EntityCampaignLink(e))
    // logger.log('entity Links as class', entityLinks)
    AppState.entityLinks = entityLinks
    // logger.log('appstate entity links', AppState.entityLinks)
  }

  async getEntityLinkById(entityLinkId) {
    const res = await api.get(`api/entitycampaignlinks/${entityLinkId}`)
    // logger.log('chosen entity link', res.data)
    const entityLink = new EntityCampaignLink(res.data)
    // logger.log('new data', entityLink)
    AppState.ActiveEntityLink = entityLink
    logger.log('appstate entitylink active', AppState.ActiveEntityLink)
  }

  async createEntityCampaignLink(linkData) {
    const res = await api.post(`api/entitycampaignlinks`, linkData)
    logger.log('creating entity link', res.data)
    AppState.entityLinks.push(new EntityCampaignLink(res.data))
  }

  async makeEntityPrivate(entity, entityLinkId) {
    entity.isPrivate = true
    const res = await api.put(`api/entitycampaignlinks/${entityLinkId}`, entity)
    logger.log('making entity link private', res.data)
    const updatedLink = new EntityCampaignLink(res.data)
    AppState.ActiveEntityLink = updatedLink
  }

  async makeEntityPublic(linkData, entityLinkId) {
    linkData.isPrivate = false
    const res = await api.put(`api/entitycampaignlinks/${entityLinkId}`, linkData)
    logger.log('making entity link public', res.data)
    const updatedLink = new EntityCampaignLink(res.data)
    AppState.ActiveEntityLink = updatedLink
  }

  async removeEntityCampaignLink(entityId) {
    const res = await api.delete(`api/entitycampaignlinks/${entityId}`)
    logger.log('deleting entity links', res.data)
    const linkIndex = AppState.entityLinks.findIndex(l => l.id == entityId)
    AppState.entityLinks.splice(linkIndex, 1)
  }

}



export const entitiesCampaignLinkService = new EntitiesCampaignLinkService()