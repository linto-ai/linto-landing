<template>
    <ClientOnly>
        <VueWriter :array="props.strings" />
    </ClientOnly>
</template>

<script setup>
import VueWriter from "vue-writer";

const props = defineProps({
    strings: {
        type: Array,
        required: true,
    },
});

defineComponent({
    components: {
        VueWriter,
    },
});
</script>