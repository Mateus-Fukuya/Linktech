// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "WhatsCode",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: ["https://cdn.tailwindcss.com"],
    },
  },
});
