import DefaultTheme from "vitepress/theme";
import FormattedDate from "./components/FormattedDate.vue";
import Poem from "./components/Poem.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("FormattedDate", FormattedDate);
    app.component("Poem", Poem);
  },
};
