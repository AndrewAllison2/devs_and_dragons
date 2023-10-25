import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { notesService } from "../services/NotesService.js";

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router

      .get('/:noteId', this.getNoteById)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createNote)
      .delete('/:noteId', this.removeNote)
      .put('/:noteId', this.editNotes)

  }

  async getNoteById(req, res, next) {
    try {
      const noteId = req.params.noteId
      const note = await notesService.getNoteById(noteId)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      const noteData = req.body
      noteData.accountId = req.userInfo.id
      const notes = await notesService.createNote(noteData)
      return res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async removeNote(req, res, next) {
    try {
      const noteId = req.params.noteId
      const userId = req.userInfo.id
      const note = await notesService.removeNote(noteId, userId)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async editNotes(req, res, next) {
    try {
      const noteId = req.params.noteId
      const noteData = req.body
      const userId = req.userInfo.id
      const editedNote = await notesService.editNotes(noteId, noteData, userId)
      res.send(editedNote)
    } catch (error) {
      next(error)
    }
  }
}

// todo edit notes in service, 