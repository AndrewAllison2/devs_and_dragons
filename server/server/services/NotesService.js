import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class NotesService {
  async getNoteById(noteId) {
    const note = await dbContext.Notes.findById(noteId)
    if (!note) {
      throw new BadRequest('Cannot find any notes by that ID')
    }
    return note
  }
  async getNotesByCampaignId(campaignId) {
    const notes = await dbContext.Notes.find({ campaignId })
    return notes
  }

  a

  async createNote(noteData) {
    const campaign = await campaignService.getCampaignById(noteData.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden(`${campaign.name} has been archived. You cannot create notes for an archived campaign.`)
    }
    const newNote = await dbContext.Notes.create(noteData)
    return newNote
  }

  async removeNote(noteId, userId) {
    const noteToRemove = await dbContext.Notes.findById(noteId)
    if (noteToRemove.accountId.toString() != userId) {
      throw new Forbidden('You cannot delete a note you did not create.')
    }
    await noteToRemove.remove()
    return noteToRemove
  }

  async editNotes(noteId, noteData, userId) {
    const originalNote = await this.getNoteById(noteId)
    if (!originalNote) {
      throw new BadRequest('Cannot find any notes by that ID')
    }
    if (originalNote.accountId.toString() != userId) {
      throw new Forbidden('Only the creator of this note can edit it')
    }
    originalNote.name = noteData.name || originalNote.name
    originalNote.body = noteData.body || originalNote.body

    await originalNote.save()
    return originalNote
  }
}

// NOTE may want to set up logic in edit to flip bool on isRecap if you are dm


export const notesService = new NotesService()