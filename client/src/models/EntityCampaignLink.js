

export class EntityCampaignLink {
  constructor(data) {
    this.id = data.id
    this.campaignId = data.campaignId
    this.entityId = data.entityId
    this.creatorId = data.creatorId
    this.isPrivate = data.isPrivate
    this.Entity = data.Entity

  }
}