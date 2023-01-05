<script lang="ts">
import NoteItem from '@/models/note.model'
import { useActiveNoteStore } from '@/stores/note'
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
export default defineComponent({
    computed: {
        ...mapState(useActiveNoteStore, ['note']),
        createdAt(): String {
            const date = this.note?.createdAt

            if (date) {
                return new Date(date).toLocaleDateString()
            }

            return ''
        },
    },
})
</script>

<template>
    <div v-if="note.createdAt" class="flex flex-col p-5">
        <input
            class="py-2 px-4 mb-4 bg-transparent text-2xl w-100"
            name="title"
            placeholder="Title"
            v-model="note.title"
        />

        <textarea
            class="border border-slate-400 dark:border-slate-100/10 rounded-lg py-2 px-4 mb-4 bg-transparent"
            name="description"
            placeholder="Notes"
            v-model="note.description"
        ></textarea>
        <span class="text-xs text-slate-300">{{ createdAt }}</span>
    </div>
</template>
