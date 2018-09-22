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
      hello: "こんにちは，世界!"
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

export function generatePathMap(obj: Object, basePath: string = "") {
  return Object.keys(obj).reduce((result, key) => {
    const path = basePath === "" ? key : `${basePath}.${key}`;
    if (typeof obj[key] === "object") {
      result[key] = generatePathMap(obj[key], path);
    } else {
      result[key] = path;
    }
    return result;
  }, {});
}

const i18nHints: any = generatePathMap(messages[locale]);

const i18n = new VueI18n({
  locale,
  messages
});
Vue.mixin({
  computed: {
    $i18nHints: () => i18nHints
  }
});

export { i18n, i18nHints };
