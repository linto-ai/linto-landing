<template>
  <div
    class="relative isolate overflow-hidden bg-gray-900 shadow-2xl flex rounded-3xl lg:gap-x-20"
  >
    <AtomBgRadiant />
    <div
      class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
    >
      <h2
        class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
      >
        <span v-if="title">{{ title }}</span>
        <slot name="title" />
      </h2>
      <p class="mt-6 text-lg/8 text-pretty text-gray-300">
        <span v-if="description">{{ description }}</span>
        <slot name="description" />
      </p>
      <div
        class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
      >
        <slot name="button" />
      </div>
    </div>
    <div v-if="image" class="relative mt-16 h-80 lg:mt-8">
      <img :src="image" alt="Image" class="w-full h-full object-cover" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});
</script>
