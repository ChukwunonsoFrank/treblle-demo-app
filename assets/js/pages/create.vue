<script setup>
    import { reactive } from 'vue'
    import { router } from '@inertiajs/vue3'

    const form = reactive({
        title: null,
        description: null,
        content: null
    })

    function submit() {
        router.post('/store', form)
    }
</script>

<template>
    <div>
        <form @submit.prevent="submit">
            <div>
                <label for="title">Title</label>
                <input v-model="form.title" id="title" type="text" name="title" class="border">
            </div>

            <div>
                <label for="description">Description</label>
                <input v-model="form.description" id="description" type="text" name="description" class="border">
            </div>

            <div>
                <label for="content">Content</label>
                <textarea v-model="form.content" id="content" name="content" class="border"></textarea>
            </div>
            <div>
                <button type="submit">Create article</button>
            </div>
        </form>
    </div>
</template>
