<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EditableField',
    props: {
        fieldValue: {
            type: String,
            required: true,
        },
    },
    emits: ['update:fieldValue'],
    methods: {
        onValueChange(e: any) {
            this.$emit('update:fieldValue', e.target.textContent)
        },
    },
})
</script>

<template>
    <div
        v-once
        contenteditable="true"
        class="editable-field block focus-visible:outline-none break-all w-full text-slate-200"
        v-text="fieldValue"
        @input="onValueChange"
    ></div>
</template>
