<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NoteItem from '@/models/note.model'

export default defineComponent({
    components: {
        FontAwesomeIcon,
    },
    methods: {
        addNote() {
            this.$emit('addNote', new NoteItem())
        },
    },
})
</script>
<template>
    <div class="flex place-content-center w-40">
        <FontAwesomeIcon
            class="text-2xl text-slate-300 hover:text-slate-100 cursor-pointer"
            icon="fa-solid fa-plus"
            @click="addNote"
        />
    </div>
</template>
