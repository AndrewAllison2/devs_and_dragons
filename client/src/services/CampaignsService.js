import { AppState } from "../AppState.js"
import { Campaign } from "../models/Campaign.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CampaignsService {

    async updateDiscord(formData) {
        const res = await api.put(`api/campaigns/${AppState.activeCampaign.id}`, formData)
        logger.log('edit discord res data', res.data)
        const updatedCampaign = new Campaign(res.data)
        logger.log('stage 2', updatedCampaign)
        AppState.activeCampaign = updatedCampaign
        logger.log('Appstate discord change', AppState.activeCampaign)
    }

    async getCampaigns() {
        const res = await api.get('api/campaigns')
        logger.log('[Got Campaigns]', res.data)
        const campaigns = res.data.map(c => new Campaign(c))
        AppState.campaigns = campaigns
    }

    async getCampaignsByAccount() {
        const res = await api.get('account/campaigns')
        logger.log('[GOT MY CAMPAIGNS]', res.data)
        AppState.myCampaigns = res.data.map(c => new Campaign(c))
        // logger.log('[appstate campaigns]', AppState.myCampaigns)
    }


    async createCampaign(campaignData) {
        const res = await api.post('api/campaigns', campaignData)
        logger.log(res.data)
        const campaign = new Campaign(res.data)
        AppState.campaigns.push(campaign)
        return campaign

    }

    async getActiveCampaign(campaignId) {
        const res = await api.get(`api/campaigns/${campaignId}`)
        // logger.log('active campaign res data', res.data)
        const campaign = new Campaign(res.data)
        // logger.log('new Campaign from active campaign', campaign)
        AppState.activeCampaign = campaign
        logger.log('Appstate activecampaign', AppState.activeCampaign)
    }

    async archiveCampaign(campaignId) {
        const res = await api.delete(`api/campaigns/${campaignId}`)
        logger.log('DELETING_CAMPAIGN', res.data)
        AppState.activeCampaign.isArchived = true

    }
}
export const campaignsService = new CampaignsService()