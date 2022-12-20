<script lang="ts">
import { defineComponent } from 'vue'
import Note from '@/components/Note.vue'
import AddNote from '@/components/AddNote.vue'
import type NoteItem from '@/models/note.model'
import { useActiveNoteStore } from '@/stores/note'

export default defineComponent({
    components: {
        Note,
        AddNote,
    },
    setup() {
        const activeNoteStore = useActiveNoteStore()

        return {
            activeNoteStore,
        }
    },
    data: () => ({
        notes: [] as NoteItem[],
        activeNote: null,
    }),
    methods: {
        onNoteAdded(note: NoteItem) {
            this.notes.push(note)
        },
        setActiveNote(note: NoteItem) {
            this.activeNoteStore.setActiveNote(note)
        },
    },
})
</script>
<template>
    <div class="mx-auto p-5 h-screen bg-slate-800/10">
        <div class="flex flex-col gap-y-2">
            <AddNote @addNote="onNoteAdded" />
            <Note
                v-for="note in notes"
                :key="note.id"
                :note="note"
                @click="setActiveNote(note)"
            />
        </div>
    </div>
</template>
