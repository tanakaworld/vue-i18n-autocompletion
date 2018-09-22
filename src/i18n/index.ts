import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: "Hello World!"
    },
    home: {
      title: "Home"
    },
    about: {
      title: "About"
    }
  },
  ja: {
    message: {
      hello: "こんにちは，世界"
    },
    home: {
      title: "ホーム"
    },
    about: {
      title: "アバウト"
    }
  }
};
const locale = "ja";

const i18n = new VueI18n({
  locale,
  messages
});

export { i18n };
