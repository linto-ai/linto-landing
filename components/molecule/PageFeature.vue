<template>
    <UCard class="card-feature">
        <template v-if="image || title" #header>
            <div class="flex items-center gap-4">
                <UImage v-if="image" :src="image" />
                <UIcon v-if="icon" :name="icon" />
                <h3 v-if="title" class="text-xl font-bold">{{ title }}</h3>
            </div>
        </template>
        <p v-if="description" class="text-sm">{{ description }}</p>
        <template v-if="href" #footer>
            <UButton :to="href">
                En savoir plus
            </UButton>
        </template>
    </UCard>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: '',
        required: false,
    },
    image: {
        type: String,
        default: '',
        required: false,
    },
    iconPosition: {
        type: String,
        default: 'left',
        required: false,
    },
    imagePosition: {
        type: String,
        required: false,
        default: 'left',
    },
    href: {
        type: String,
        default: '',
        required: false,
    },
})
</script>

<style scoped>
.card-feature {
    @apply bg-gradient-to-r from-[#fff] to-[#f0f0f0];
}
</style>
