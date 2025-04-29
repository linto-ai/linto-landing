<template>
    <ClientOnly>
        <UButton :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="solid" @click="isDark = !isDark" />
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})
</script>