<template>
  <div
    class="min-h-[84px] px-4 py-4 rounded-2xl border light:bg-gray-200 dark:bg-gray-900 light:border-indigo-400 dark:border-gray-600 shadow-2xl"
    @mouseleave="isOpen = false"
  >
    <div class="flex items-center h-[50px] justify-between">
      <div class="flex items-center">
        <AtomLogotype size="sm" class="items-center" />
      </div>
      <nav class="relative flex items-center">
        <UButtonGroup>
          <UButton
            class="font-bold"
            size="lg"
            trailing-icon="i-lucide-circle-chevron-down"
            variant="subtle"
            color="primary"
            @mouseenter="openMenu('products')"
            @click="goTo('/')"
            >Solutions</UButton
          >
          <UButton
            class="font-bold"
            size="lg"
            variant="subtle"
            color="primary"
            @click="goToGettingStart"
            >Pricing</UButton
          >
        </UButtonGroup>
        <div class="flex items-center">
          <UButton
            class="ml-4 mr-2 gradient-primary font-bold"
            size="lg"
            variant="solid"
            @click="goToGettingStart"
          >
            Getting Started
          </UButton>
          <UButton size="lg" color="primary" variant="subtle" class="font-semibold"> Login </UButton>
        </div>
      </nav>
    </div>
    <div
      class="mt-4 px-4 py-4 light:bg-gray-100 dark:bg-gray-950 rounded-2xl"
      :class="{ hidden: !isProductsMenuOpen }"
    >
      <div class="grid grid-cols-3 gap-4">
        <div class="light:bg-white dark:bg-gray-900 rounded-sm p-4">
          <div class="text-xl font-bold">
            LinTO <span class="text-gradient-linto">Cloud Studio</span>
          </div>
          <div class="text-sm">
            Trustable AI media intelligence platform for all
          </div>
        </div>
        <div class="light:bg-white dark:bg-gray-900 rounded-sm p-4">
          <div class="text-xl font-bold">
            LinTO <span class="text-gradient-yellow">Adaptative Stack</span>
          </div>
          <div class="text-sm">
            Domain-specific AI models tailored for your needs
          </div>
        </div>
        <div class="light:bg-white dark:bg-gray-900 rounded-sm p-4">
          <div class="text-xl font-bold">
            LinTO <span class="text-gradient-secondary">Open Studio</span>
          </div>
          <div class="text-sm">
            Self-hosted Open Source Intelligence platform
          </div>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-4">
        <div class="light:bg-white dark:bg-gray-900 rounded-sm p-4">
          <div class="text-xl font-bold">
            LinTO <span class="text-gradient-accent">Live Studio</span>
          </div>
          <div class="text-sm">
            Key-in-hand AI solution for live events
          </div>
        </div>
        <div class="light:bg-white dark:bg-gray-900 rounded-sm p-4">
          <div class="text-xl font-bold">
            LinTO <span class="text-gradient-grey">SDK &amp; API</span>
          </div>
          <div class="text-sm">
            Developer-friendly API and SDKs
          </div>
        </div>
        <div class="col-span-1">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const menuType = ref("products");

const openMenu = (type) => {
  isOpen.value = true;
  menuType.value = type;
};

const isProductsMenuOpen = computed(
  () => isOpen.value && menuType.value === "products"
);

const goToGettingStart = () => {
  router.push("/getting-start");
};

const goTo = (type) => {
  router.push(type);
};
</script>

<style scoped>
@import "tailwindcss";

.sub-menu {
  box-sizing: border-box;
  @apply absolute bottom-[-50px] left-0 right-0 border border-teal-700 rounded-sm bg-gray-100 px-4 py-2 shadow-lg;

  &.hidden {
    @apply hidden;
  }
}
</style>
