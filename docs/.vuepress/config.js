const { defaultTheme } = require("@vuepress/theme-default");
module.exports = {
  theme: defaultTheme({
    sidebar: [
      {
        text: "Components",
        children: [
          {
            text: "InputText",
            link: "/components/input-text.md",
            children: [],
          },
          {
            text: "InputTextarea",
            link: "/components/input-textarea.md",
            children: [],
          },
        ],
      },
    ],
  }),
  base: "/vuejs-mf-component-libraries/",
};
