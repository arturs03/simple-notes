<script lang="ts">
import NoteItem from '@/models/note.model'
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        note: {
            type: NoteItem,
            required: true,
        },
    },
    methods: {},
})
</script>
<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>
<template>
    <div
        v-if="note.createdAt"
        class="bounce-enter-active flex justify-center border border-slate-400 dark:border-slate-100/10 rounded-lg py-2 px-4 bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-lg w-40 text-center"
    >
        <p
            class="txt-lg text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap"
        >
            {{ note.title }}
        </p>
    </div>
</template>
