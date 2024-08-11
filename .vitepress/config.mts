import { generateSidebar } from "vitepress-sidebar";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuan's Blog",
  description: "挑战是唯一的救赎",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Leetcode", link: "/leetcode/" }, // 指向Leetcode分类的首页
      { text: "Poetry", link: "/poetry/" }, // 指向Poetry分类的首页
    ],

    sidebar: generateSidebar({
      // 你可以通过这个选项过滤或包含特定的目录或文件
      collapseDepth: 2,
      collapsed: true,
      // 你可以通过这个选项控制 sidebar 分组
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/illuca" }],
  },
});
