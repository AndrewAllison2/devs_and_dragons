import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class NotesService {

  async getNotesByCampaign(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/notes`)
    // logger.log('getting notes from api', res.data)
    const notes = res.data.map(n => new Note(n))
    // logger.log('turning notes into class', notes)
    AppState.Notes = notes
    // logger.log('appstate notes', AppState.Notes)
  }
  async getActiveNote(noteId) {
    const res = await api.get(`api/notes/${noteId}`)
    logger.log('res data of active note', res.data)
    const activeNote = new Note(res.data)
    AppState.activeNote = activeNote
  }

  async createNote(noteData) {
    const res = await api.post('api/notes', noteData)
    logger.log('CREATING_NOTE', res.data)
    const newNote = new Note(res.data)
    AppState.Notes.push(newNote)
  }

  async editNote(formData, noteId) {
    const res = await api.put(`api/notes/${noteId}`, formData)
    let updatedNote = new Note(res.data)
    AppState.activeNote = updatedNote
  }

  async removeNote(noteId) {
    const res = await api.delete(`api/notes/${noteId}`)
    logger.log(res.data)
    const noteIndex = AppState.Notes.findIndex(n => n.id == noteId)
    AppState.Notes.splice(noteIndex, 1)
  }

  async createRecap(formData) {
    const res = await api.post(`api/notes`, formData)
    // logger.log(res.data)
    const newRecap = new Note(res.data)
    AppState.Notes.push(newRecap)
    return newRecap
  }
}


export const notesService = new NotesService()