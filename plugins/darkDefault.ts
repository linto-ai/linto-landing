export default defineNuxtPlugin((nuxtApp) => {
  const colorMode = useColorMode();

  nuxtApp.hook("app:mounted", () => {
    colorMode.preference = "dark";
    colorMode.value = "dark";
  });
});
