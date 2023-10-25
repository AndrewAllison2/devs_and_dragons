import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { entitiesService } from "../services/EntitiesService.js";


export class EntitiesController extends BaseController {
  constructor() {
    super('api/entities')
    this.router

      .get('', this.getEntities)
      .get('/:entityId', this.getEntityById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntity)
      .delete('/:entityId', this.deleteEntity)
      .put('/:entityId', this.editEntity)
  }
  async editEntity(req, res, next) {
    try {
      const entityId = req.params.entityId
      const userId = req.userInfo.id
      const entityData = req.body
      const editedEntity = await entitiesService.editEntity(entityId, userId, entityData)
      res.send(editedEntity)
    } catch (error) {
      next(error)
    }
  }
  async deleteEntity(req, res, next) {
    try {
      const entityId = req.params.entityId
      const userId = req.userInfo.id
      const message = await entitiesService.deleteEntity(entityId, userId)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }
  async getEntityById(req, res, next) {
    try {
      const entityId = req.params.entityId
      const entity = await entitiesService.getEntityById(entityId)
      res.send(entity)
    } catch (error) {
      next(error)
    }
  }
  async getEntities(req, res, next) {
    try {
      const entities = await entitiesService.getEntities()
      res.send(entities)
    } catch (error) {
      next(error)
    }
  }
  async createEntity(req, res, next) {
    try {
      const entityData = req.body
      entityData.creatorId = req.userInfo.id
      const entity = await entitiesService.createEntity(entityData,)
      res.send(entity)
    } catch (error) {
      next(error)
    }
  }
}

