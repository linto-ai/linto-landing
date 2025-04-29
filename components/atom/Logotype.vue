<template>
    <span
        :class="sizeClasses">
        <span class="light:text-black dark:text-white">LinTO Studio</span> <sup class="text-xs text-gradient-linto">cloud</sup>
    </span>
</template>

<script setup>
const props = defineProps({
    size: {
        type: String,
        default: 'md',
    },
})

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'lg':
            return 'text-6xl';
        case 'md':
            return 'text-4xl';
        case 'sm':
            return 'text-2xl';
        default:
            return 'text-6xl';
    }
})
</script>

<style scoped>
span {
    align-self: center;
}
</style>