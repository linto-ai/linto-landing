<template>
  <div
    class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
  >
    <div
      class="rounded-3xl rounded-t-3xl light:bg-white/60 dark:bg-gray-700/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl"
    >
      <h3 id="tier-hobby" class="text-base/7 font-semibold text-indigo-600">
        Starter
      </h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-semibold tracking-tight text-gray-50"
          >$9</span
        >
        <span class="text-base text-gray-300">/month</span>
      </p>
      <p class="mt-6 text-base/7 text-gray-300">
        The perfect plan if you&#039;re just getting started with our product.
      </p>
      <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="neutral-500" />
          3 seats, 100GB of storage
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="neutral-500" />
          20h/month of AI transcription, translation and summarization
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="neutral-500" />
          Smart meetings
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="neutral-500" />
          LinTO Smart Assistant
        </li>
      </ul>
      <UButton variant="solid" size="xl" color="neutral" block class="mt-8">
        Get started today
      </UButton>
    </div>
    <div
      class="relative isolate overflow-hidden rounded-3xl bg-gray-900 dark:bg-gray-700 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10"
    >
      <AtomBgRadiant />
      <h3
        id="tier-enterprise"
        class="text-base/7 font-semibold text-indigo-400"
      >
        Enterprise
      </h3>
      <p class="mt-4 flex items-baseline gap-x-2">
        <span class="text-5xl font-semibold tracking-tight text-white"
          >$21</span
        >
        <span class="text-base text-gray-400">/seat</span>
        <span class="text-base text-gray-400">/month</span>
      </p>
      <p class="mt-6 text-base/7 text-gray-300">
        SSO, Dedicated support and infrastructure for your company.
      </p>
      <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Unlimited storage
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Unlimited transcription, translation and summarization
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Advanced analytics
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Pipelines and "linto-automations"
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Dedicated support representative
        </li>
        <li class="flex gap-x-3 items-center">
          <UIcon name="icon-park-solid-success" color="green-500" />
          Custom integrations
        </li>
      </ul>
      <UButton variant="solid" size="xl" color="primary" block class="mt-8">
        Get started today
      </UButton>
    </div>
  </div>
</template>
