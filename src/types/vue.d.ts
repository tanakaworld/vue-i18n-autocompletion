import "vue";

declare module "vue/types/vue" {
  interface Vue {
    i18nHints: any;
  }
}
