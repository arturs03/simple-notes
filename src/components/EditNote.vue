<script lang="ts">
import NoteItem from '@/models/note.model'
import { useActiveNoteStore } from '@/stores/note'
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NoteContentItem, {
    CONTENT_FULL_TYPES,
    CONTENT_TYPE_TEXT,
    CONTENT_TYPE_CHECK_LIST,
    CONTENT_TYPE_IMG,
    getContentIcon,
} from '@/models/noteContent.model'
import EditableField from './EditableField.vue'
import { mapState } from 'pinia'
import EditableImage from './EditableImage.vue'

export default defineComponent({
    components: {
        FontAwesomeIcon,
        EditableField,
        EditableImage,
    },
    data: () => ({
        CONTENT_FULL_TYPES,
        CONTENT_TYPE_TEXT,
        CONTENT_TYPE_CHECK_LIST,
        CONTENT_TYPE_IMG,
    }),
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
    methods: {
        getContentIcon,
        updateFieldData(content: NoteContentItem, newVal: string) {
            content.data = newVal
        },
    },
})
</script>

<template>
    <div v-if="note.createdAt" class="flex flex-col p-5 w-full">
        <span class="text-xs text-white text-right">
            Created at: {{ createdAt }}
        </span>
        <input
            class="py-2 mb-4 bg-transparent text-2xl w-100 text-white focus-visible:outline-none"
            name="title"
            placeholder="Title"
            v-model="note.title"
        />
        <div class="flex flex-col gap-2">
            <div
                v-for="content in note.content"
                :key="content.id"
                class="flex hover:border-slate-200/50 border-2 border-transparent border-dashed p-2"
            >
                <font-awesome-icon
                    :icon="`fa-solid ${getContentIcon(content.type)}`"
                    class="text-2xl text-slate-300 hover:text-slate-100 cursor-pointer mr-3"
                />
                <EditableField
                    v-if="content.type === CONTENT_TYPE_TEXT"
                    v-model:field-value="content.data"
                />
                <input
                    v-else-if="content.type === CONTENT_TYPE_CHECK_LIST"
                    class="bg-transparent focus-visible:outline-none break-all w-full text-slate-200"
                />
                <EditableImage
                    v-else-if="content.type === CONTENT_TYPE_IMG"
                    v-model:image-url="content.data"
                />
            </div>
        </div>
        <div class="border border-dashed border-sky-500 p-3 mt-5">
            <div class="flex justify-center gap-x-2">
                <font-awesome-icon
                    v-for="content in CONTENT_FULL_TYPES"
                    :key="content.icon"
                    :icon="`fa-solid ${content.icon}`"
                    class="text-2xl text-slate-300 hover:text-slate-100 cursor-pointer"
                    @click="note.newContentItem(content.type)"
                />
            </div>
        </div>
    </div>
</template>
