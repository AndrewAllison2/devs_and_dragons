import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { campaignService } from "../services/CampaignService.js"
import { entitiesService } from "../services/EntitiesService.js"
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/campaigns', this.getCampaignsByAccount)
      .get('/entities', this.getEntitiesByAccount)
      .get('/accountcampaignlinks', this.getCampaignsByAccountLink)
      .put('', this.updateAccount)
  }


  async updateAccount(req, res, next) {
    try {
      const body = req.body
      const user = req.userInfo
      const updatedAccount = await accountService.updateAccount(user, body)
      res.send(updatedAccount)
    } catch (error) {
      next(error)
    }
  }
  async getEntitiesByAccount(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const entities = await entitiesService.getEntitiesByAccount(accountId)
      res.send(entities)
    } catch (error) {
      next(error)
    }
  }


  async getCampaignsByAccount(req, res, next) {
    try {
      const userId = req.userInfo.id
      const campaigns = await campaignService.getCampaignsByAccount(userId)
      res.send(campaigns)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getCampaignsByAccountLink(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const campaigns = await accountCampaignLinkService.getCampaignsByAccountLink(accountId)
      res.send(campaigns)
    } catch (error) {
      next(error)
    }
  }
}
