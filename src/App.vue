<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
    components: {
        FontAwesomeIcon,
    },
})
</script>

<template>
    <header class="h-screen bg-slate-800/50">
        <nav class="flex flex-col p-4 gap-y-3">
            <RouterLink
                to="/"
                class="text-slate-300 hover:text-slate-50 text-2xl"
            >
                <FontAwesomeIcon icon="fa-solid fa-house" />
            </RouterLink>
            <RouterLink
                to="/about"
                class="text-slate-300 hover:text-slate-50 text-2xl"
            >
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            </RouterLink>
        </nav>
    </header>

    <RouterView />
</template>
