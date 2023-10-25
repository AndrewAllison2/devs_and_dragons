import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class EntitiesService {
  async getEntitiesByAccount(creatorId) {
    const entities = await dbContext.Entities.find({ creatorId })
    return entities
  }
  async editEntity(entityId, userId, entityData) {
    const entityToEdit = await this.getEntityById(entityId)
    if (!entityToEdit) {
      throw new BadRequest('There is no entity with that id')
    }
    if (entityToEdit.creatorId != userId) {
      throw new Forbidden("you cannot delete someone else's entity")
    }

    entityToEdit.tags = entityData.tags || entityToEdit.tags
    entityToEdit.desc = entityData.desc || entityToEdit.desc
    entityToEdit.connections = entityData.connections || entityToEdit.connections
    entityToEdit.body = entityData.body || entityToEdit.body
    entityToEdit.imgUrl = entityData.imgUrl || entityToEdit.imgUrl

    await entityToEdit.save()
    return entityToEdit
  }
  async deleteEntity(entityId, userId) {
    const entityToDelete = await this.getEntityById(entityId)
    if (!entityToDelete) {
      throw new BadRequest('There is no entity with that id')
    }
    if (entityToDelete.creatorId != userId) {
      throw new Forbidden("you cannot delete someone else's entity")
    }
    await entityToDelete.remove()
    return 'Entity has been deleted'
  }
  async getEntityById(entityId) {
    const entity = await dbContext.Entities.findById(entityId)
    return entity
  }
  async getEntities() {
    const entities = await dbContext.Entities.find()
    return entities
  }
  async createEntity(entityData) {
    const entity = await dbContext.Entities.create(entityData)
    return entity
  }

}



export const entitiesService = new EntitiesService