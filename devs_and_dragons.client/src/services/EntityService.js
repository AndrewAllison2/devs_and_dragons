import { AppState } from "../AppState.js"
import { Entity } from "../models/Entity.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EntityService {

  async getEntity() {
    const res = await api.get('api/entities')
    logger.log('[Got ENTITIES]', res.data)
  }


  async getMyEntitiesByAccount() {
    const res = await api.get('account/entities')
    logger.log('[GETTING MY ENTITIES]', res.data)
    AppState.myEntities = res.data.map(c => new Entity(c))
  }

  async createEntity(entityData) {
    const res = await api.post('api/entities', entityData)
    logger.log('[CREATING ENTITY]', res.data)
    const entity = new Entity(res.data)
    AppState.entities.push(entity)
    return entityData
  }

  async getEntityByCampaign(campaignId) {
    const res = await api.get('api/campaign/:campaignId/')
  }
}

export const entityService = new EntityService()