<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <AtomLogotype size="sm" />
      <p class="text-sm my-6 text-gray-500 dark:text-gray-400">
        Open source pioneer of AI-powered media intelligence
      </p>
      <ul
        class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        <li>
          <NuxtLink href="/" class="mr-4 hover:underline md:mr-6">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/getting-start" class="mr-4 hover:underline md:mr-6">Pricing</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/about-us" class="mr-4 hover:underline md:mr-6">About us</NuxtLink>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2000-2025 <a href="#" class="hover:underline">Linagora</a>. Tous droits réservés.</span>
    </div>
  </footer>
</template>
