<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EditableImage',
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        isActualImage: false,
    }),
    emits: ['update:imageUrl'],
    methods: {
        onImageUrlUpdate(e: any) {
            this.$emit('update:imageUrl', e.target.value)
        },
        checkIfImageIsLoaded() {
            const image = this.$refs.image as HTMLImageElement
            this.isActualImage = image?.naturalWidth > 1
        },
    },
})
</script>
<template>
    <div class="flex flex-1 group">
        <img
            v-show="isActualImage"
            :src="imageUrl"
            :width="isActualImage ? 200 : 0"
            ref="image"
            @load="checkIfImageIsLoaded"
        />
        <input
            class="bg-transparent focus-visible:outline-none break-all w-full text-slate-200 ml-5"
            :class="{ 'invisible group-hover:visible': isActualImage }"
            placeholder="Paste image url"
            @input="onImageUrlUpdate"
        />
    </div>
</template>
