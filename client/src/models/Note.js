

export class Note {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.body = data.body
    this.accountId = data.accountId
    this.campaignId = data.campaignId
    this.isRecap = data.isRecap
    this.createdAt = new Date(data.createdAt)
  }
}