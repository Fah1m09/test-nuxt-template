// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "last" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});