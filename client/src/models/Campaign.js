export class Campaign {
    constructor(data) {
        this.id = data.id
        this.coverImg = data.coverImg || "https://images5.alphacoders.com/110/1107324.jpg"
        this.name = data.name
        this.desc = data.desc
        this.creatorId = data.creatorId
        this.isPrivate = data.isPrivate
        this.tags = data.tags
        this.capacity = data.capacity
        this.isArchived = data.isArchived
        this.nextSessionDate = new Date(data.nextSessionDate)
        this.partyCount = data.partyCount
        this.discordLink = data.discordLink || null
    }
}