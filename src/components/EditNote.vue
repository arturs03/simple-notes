<script lang="ts">
import NoteItem from '@/models/note.model'
import { useActiveNoteStore } from '@/stores/note'
import { defineComponent } from 'vue'
import { mapState } from 'pinia'
export default defineComponent({
    computed: {
        ...mapState(useActiveNoteStore, ['note']),
        createdAt(): String {
            const date = this.note?.createdAt?.toString()

            if (date) {
                return new Date(date).toLocaleDateString()
            }

            return ''
        },
    },
})
</script>

<template>
    <div v-if="note.createdAt">
        <label for="title">Title:</label>
        <input name="title" v-model="note.title" />
        <label for="description">Description:</label>
        <input name="description" v-model="note.description" />
        <span>{{ createdAt }}</span>
    </div>
</template>
