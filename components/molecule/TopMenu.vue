<template>
  <div
    class="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-gray-900 text-xs font-bold"
  >
    <UContainer class="flex items-center justify-between p-3">
      <nav class="flex gap-2 items-center">
        <div class="flex items-center">
          <NuxtLink to="/"> Developer API </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/"> Security </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/"> Help Center </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/"> Community </NuxtLink>
        </div>
      </nav>
      <div class="flex gap-2 items-center">
        <div class="flex items-center">
          <NuxtLink to="/"> Login </NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/"> Contact Us | (33) 1 42 42 42 42 </NuxtLink>
        </div>
        <ClientOnly>
          <AtomButtonThemeColor size="sm" />
        </ClientOnly>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.flex div {
  &::after {
    content: "|";
    margin-left: 0.5rem;
  }

  &:last-child::after {
    content: "";
  }
}
</style>
