<template>
    <div class="relative">
        <MoleculeTopMenu />
        <div class="bg-gradient-to-b light:from-gray-50 light:to-indigo-100 dark:from-black dark:to-gray-900">
            <slot />
        </div>
        <div class="border light:border-gray-200 dark:border-gray-800">
            <MoleculeFooter />
        </div>
    </div>
</template>