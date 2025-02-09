import { generateSidebar } from "vitepress-sidebar";
import { defineConfig } from "vitepress";
import AutoIndex from "./src/index";
// .vitepress/config.js
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuan's Blog",
  description: "挑战是唯一的救赎",
  vite: {
    plugins: [AutoIndex({})],
  },
  themeConfig: {
    algolia: {
      apiKey: "b3a8a0460b41cf4334330639dcc5271a",
      indexName: "illucaio",
      appId: "CCJLCQMVIY",
      placeholder: "Search documentation",
      searchParameters: {
        // 你可以在这里添加其他Algolia的搜索参数
      },
    },
    search: {
      provider: "local", // 使用内置的 flexsearch
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Course", link: "/course/" }, // 指向Leetcode分类的首页
      { text: "Alogorithm", link: "/algorithm/" }, // 指向Leetcode分类的首页
      { text: "Essay", link: "/essay/" }, // 指向Poetry分类的首页
    ],

    sidebar: generateSidebar({
      // 你可以通过这个选项过滤或包含特定的目录或文件
      collapseDepth: 2,
      collapsed: true,
      // 你可以通过这个选项控制 sidebar 分组
      documentRootPath: "/docs",
    }),

    socialLinks: [{ icon: "github", link: "https://github.com/illuca" }],
  },
});
