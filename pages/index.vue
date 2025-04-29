<template>
  <div class="relative">
    <UContainer class="pt-12">
      <UAlert
        class="shadow-xl"
        orientation="horizontal"
        variant="subtle"
        :actions="[
          {
            label: 'Découvrir',
            size: 'md',
            class: 'font-bold',
            to: '/',
          },
        ]"
      >
        <template #description>
          <p class="font-bold">
            LinTO <span class="text-gradient-accent">LIVE Studio</span> est la
            nouvelle solution clé en main développée par Linagora pour les
            événements en direct :<br />transcription, sous-titrage, doublage et
            traduction instannée.
          </p>
        </template>
      </UAlert>
    </UContainer>
    <UContainer class="pt-8 relative z-10">
      <MoleculeMenu />
    </UContainer>
    <div class="relative">
      <OrganismJumboHome class="relative top-[-43px]" />
    </div>
    <div class="py-12 mx-6 mt-12">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div class="font-sans mb-12 col-span-2">
            <h2 class="text-4xl font-semibold mb-4 tracking-tight text-balance">
              Designed to capture audio &amp; video from anywhere
            </h2>
            <p class="text-md font-bold mb-4">
              LinTO Live Studio is a turnkey solution for all your events:
              transcription, subtitling, dubbing and instant translation.
            </p>
          </div>
          <div class="col-span-2">
            <USkeleton class="w-full h-full"> Une belle animation </USkeleton>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MoleculeCard
            title="Smart transcription"
            href="/"
            icon="i-material-symbols-speech-to-text"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </MoleculeCard>
          <MoleculeCard
            title="Smart translation"
            href="/"
            icon="i-material-symbols-translate"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </MoleculeCard>
          <MoleculeCard
            title="Smart subtitling"
            href="/"
            icon="i-material-symbols-subtitles"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </MoleculeCard>
          <MoleculeCard title="Smart meetings" href="/" icon="i-hugeicons-bot">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </MoleculeCard>
        </div>
      </UContainer>
    </div>
    <div class="py-12 mx-6">
      <UContainer>
        <div class="grid grid-cols-5 gap-8 mb-8">
          <div class="col-span-3">
            <USkeleton class="w-full h-full"> Une belle animation </USkeleton>
          </div>
          <div class="font-sans mb-12 col-span-2">
            <h2 class="text-4xl font-semibold mb-4 tracking-tight text-balance">
              Meet LinTO
            </h2>
            <p class="text-md font-bold mb-4">
              The AI companion that helps you to understand and interact with
              your resources.
            </p>
          </div>
        </div>
      </UContainer>
    </div>
    <div class="py-12 mx-6">
      <h2 class="text-base/7 font-semibold text-primary text-center mb-2">
        Solutions for all-business
      </h2>
      <UContainer class="columns-2">
        <div class="col-span-1">
          <MoleculeCardToAct
            class="px-4 pt-16 sm:px-16 md:pt-24 lg:px-18 lg:pt-0"
            description="Affordable, scalable, and secure cloud-based transcription and translation services."
          >
            <template #title>
              <span class="text-gradient-linto">LinTO Cloud Studio</span>
            </template>
            <template #button>
                <UButton variant="solid" size="xl" color="neutral">
                Getting started
              </UButton>
            </template>
          </MoleculeCardToAct>
        </div>
        <div class="col-span-1">
          <MoleculeCardToAct
            class="px-4 pt-16 sm:px-16 md:pt-24 lg:px-18 lg:pt-0"
            description="Soveraign, domain-specific AI models tailored for your needs."
          >
            <template #title>
              <span class="text-gradient-accent">LinTO Adaptative Stack</span>
            </template>
            <template #button>
              <UButton variant="solid" size="xl" color="neutral">
                Contact sales
              </UButton>
            </template>
          </MoleculeCardToAct>
        </div>
      </UContainer>
    </div>
    <div class="py-12 mx-6">
      <UContainer>
        <div class="mt-12 mx-auto max-w-4xl text-center">
          <h2 class="text-base/7 font-semibold text-primary">
            Open Based philosophy
          </h2>
          <p
            class="mt-2 text-8xl font-serif font-semibold tracking-tight text-balance text-gray-900 dark:text-white"
          >
            We build trust<br />in public
          </p>
        </div>
        <p
          class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 dark:text-white sm:text-xl/8"
        >
          The best SDKs to build your own media-AI solutions.
        </p>
        <div class="mt-4 mx-auto text-center">
          <UButtonGroup>
            <UButton variant="solid" size="xl" color="neutral" icon="i-lucide-book">
              Documentation
            </UButton>
            <UButton variant="solid" size="xl" color="neutral">
              <UIcon name="i-lucide-github" />
              GitHub
            </UButton>
            <UButton variant="solid" size="xl" color="neutral">
              <UIcon name="line-md-discord" />
              Discord
            </UButton>
          </UButtonGroup>
        </div>
      </UContainer>
    </div>
    <div class="pb-12 mx-6">
      <UContainer>
        <UCard variant="ghost" class="bg-gray-900 rounded-3xl shadow-2xl">
          <div
            class="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 text-gray-100 font-mono text-sm"
          >
            <span class="text-purple-400">import</span>&nbsp;
            <span class="text-blue-300">linto</span>&nbsp;
            <span class="text-gray-400">from</span>&nbsp;
            <span class="text-amber-300">"@linto/sdk"</span>;<br /><br />
            <span class="text-purple-400">const</span>&nbsp;
            <span class="text-blue-300">linto</span>&nbsp;
            <span class="text-gray-400">=</span>&nbsp;
            <span class="text-purple-400">new</span>&nbsp;
            <span class="text-green-400">Linto</span>();<br /><br />
            <span class="text-purple-400">const</span>&nbsp;
            <span class="text-blue-300">transcription</span>&nbsp;
            <span class="text-gray-400">=</span>&nbsp;
            <span class="text-purple-400">await</span>&nbsp;
            <span class="text-blue-300">linto</span>.<span
              class="text-green-400"
              >transcribe</span
            >(<span class="text-amber-300">"audio.mp3"</span>);<br /><br />
            <span class="text-blue-300">transcription</span>.<span
              class="text-green-400"
              >on</span
            >(<span class="text-amber-300">"data"</span>, (<span
              class="text-blue-300"
              >data</span
            >) <span class="text-gray-400">=></span> {
            <span class="text-cyan-400">console</span>.<span
              class="text-green-400"
              >log</span
            >(<span class="text-blue-300">data</span>); });<br />
          </div>
          <template #footer>
            <UButton color="secondary" variant="solid">REST API</UButton>
            <UButtonGroup class="ml-4">
              <UButton color="white" variant="outline">NodeJS</UButton>
              <UButton color="white" variant="outline">Python</UButton>
              <UButton color="white" variant="outline">Rust</UButton>
            </UButtonGroup>
          </template>
        </UCard>
      </UContainer>
    </div>
    <UContainer class="py-12">
      <MoleculeCardToAct
        image="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
        class="px-6 pt-16 sm:px-16 md:pt-24 lg:px-24 lg:pt-0"
        title="Try now"
        description="Get started with LinTO Cloud Studio in just a few clicks."
      >
        <template #button>
          <UButton variant="solid" size="xl" color="neutral">
            Get started
          </UButton>
        </template>
      </MoleculeCardToAct>
    </UContainer>
  </div>
</template>

<script setup></script>
