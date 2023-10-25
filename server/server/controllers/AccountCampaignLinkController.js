import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js";

export class AccountCampaignLinkController extends BaseController {
  constructor() {
    super('api/accountcampaignlinks')
    this.router


      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAccountLink)
      .delete('/:accountLinkId', this.deleteAccountLink)
  }


  async createAccountLink(req, res, next) {
    try {
      const linkData = req.body
      linkData.accountId = req.userInfo.id
      const accountLink = await accountCampaignLinkService.createAccountLink(linkData)
      res.send(accountLink)
    } catch (error) {
      next(error)
    }
  }

  async deleteAccountLink(req, res, next) {
    try {
      const accountLinkId = req.params.accountLinkId
      const accountId = req.userInfo.id
      const accountLink = await accountCampaignLinkService.deleteAccountLink(accountLinkId, accountId)
      res.send(accountLink)
    } catch (error) {
      next(error)
    }
  }
}