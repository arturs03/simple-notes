import type NoteItem from '@/models/note.model'
import { defineStore } from 'pinia'

export const useActiveNoteStore = defineStore({
    id: 'activeNote',
    state: () => ({
        note: {} as NoteItem,
        index: 0,
    }),
    actions: {
        setActiveNote(note: NoteItem) {
            this.note = note
        },
    },
})
