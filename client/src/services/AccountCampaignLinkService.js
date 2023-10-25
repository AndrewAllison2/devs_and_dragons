import { AppState } from "../AppState.js"
import { AccountCampaignLink } from "../models/AccountCampaignLink.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AccountCampaignLinkService {

  async getAccountCampaignLinks(campaignId) {
    // logger.log(campaignId, 'campaignId in the service')
    const res = await api.get(`api/campaigns/${campaignId}/accountcampaignlinks`)
    // logger.log('account links res data', res.data)
    const accountLinks = res.data.map(a => new AccountCampaignLink(a))
    // logger.log('account links as model', accountLinks)
    AppState.AccountLinks = accountLinks
    // logger.log('Appstate account Links', AppState.AccountLinks)
  }

  async createAccountLink(linkData) {
    const res = await api.post('api/accountcampaignlinks', linkData)
    logger.log('created account link', res.data)
    AppState.AccountLinks.push(new AccountCampaignLink(res.data))
  }
}



export const accountCampaignLinkService = new AccountCampaignLinkService()