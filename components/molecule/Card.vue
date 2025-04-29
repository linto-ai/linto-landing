<template>
    <a :href="href" class="card block rounded-2xl relative border-0 shadow-xl" :class="{ [color]: true, [borderColor]: true}">
        <AtomBgRadiant />
        <div class="p-8">
            <div v-if="icon || $slots.icon" class="mb-4">
                <UAvatar
                    v-if="icon"
                    :icon="icon"
                    size="xl"
                />
                <slot name="icon" />
            </div>
            <h5 class="mb-2 font-bold tracking-tight text-md font-sans" v-text="title" />
            <p class="font-sans text-sm">
                <slot />
            </p>
        </div>
    </a>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        default: 'dark:bg-gray-900 light:bg-white dark:text-white/90 light:text-neutral-900',
        required: false,
    },
    borderColor: {
        type: String,
        default: 'border-gray-200 dark:border-gray-800',
        required: false,
    },
    textColor: {
        type: String,
        default: 'text-white',
        required: false,
    },
    href: {
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
    title: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
@import "tailwindcss";
</style>
