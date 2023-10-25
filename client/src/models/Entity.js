

export class Entity {
  constructor(data) {
    this.id = data.id
    this.type = data.type
    this.desc = data.desc
    this.connections = data.connections
    this.body = data.body
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.isPrivate = data.isPrivate
    this.tags = data.tags
  }
}