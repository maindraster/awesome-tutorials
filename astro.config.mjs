import { defineConfig,passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import remarkMath from "remark-math";
import rehypeMathjax from 'rehype-mathjax'
import rehypeKatex from 'rehype-katex'
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';
import starlightThemeNova from 'starlight-theme-nova'
import starlightSidebarTopics from 'starlight-sidebar-topics'
//import starlightPageActions from 'starlight-page-actions'
import starlightPageActions from './src/integrations/starlight-page-actions';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.indratang.top',

  image: {
    service: passthroughImageService()
  },

  integrations: [
    starlight({
    plugins: [
      starlightSidebarTopics([
            {
              label: '初出茅庐',
              id: 'zero',
              link: '/s1/zero2hero',
              icon: 'open-book',
              items: [
                {label: '写在前面',
                  link: '/s1/zero2hero'
                },
                {label: '万工教程',
                  items: [
                    { label: '概览', link: '/s1/frin'},
                    { label: '基础教程', autogenerate: {directory: '/s1/train'}}, 
                    { label: '理论科普', collapsed: true, autogenerate: {directory: '/s1/trainll'}},
                    { label: '初级教程', collapsed: true, autogenerate: {directory: '/s1/traincj'}},
                  ],
                },
                {label: '篇章学习',
                  collapsed: true,
                  items: [
                  {label: '电子电路设计篇',
                    link: '/s1/electronics/indexecd'
                  },
                  {label: '嵌入式开发篇',
                    collapsed: true,
                    items: [
                    {label: '嵌入式开发概述',
                      link: '/s1/embed/index_emb'
                    },
                    {label: 'ESP32篇',
                      collapsed: true,
                      autogenerate: {directory: '/s1/embed/esp'}
                    }]
                  },
                  {label: '机器人篇',
                    collapsed: true,
                    items: [{
                      label: '建模与控制',
                      autogenerate: {directory: '/s1/robot/jmkz'}
                    }]
                  },
                  {label: '人工智能篇',
                    link: '/s1/ai/indexai'
                  },
                  {label: '项目实战篇',
                    link: '/s1/project/indexpro'
                  },],
                }
              ],
            },
            {
              label: '机工精巧',
              link: '/s2/zero2hero',
              icon: 'open-book',
              items: [
                {label: '写在前面',
                  link: '/s2/zero2hero'
                },
                { label: '理论学习',
                  items: [
                    { label: '概率与统计', autogenerate: {directory:'/s2/ll/prob'}},
                    { label: '线性代数与矩阵论', autogenerate: {directory:'/s2/ll/tom'}},
                  ]
                },
                { label: '实操',
                  autogenerate: {directory: '/s2/sim'}
                }
              ]
            },
          ],
          {
            topics: {
              // Associate custom pages with the "Guides" topic.
              zero: ['/s1/project/cpuzz', '/s1/project/ysyx/*','/s1/project/11b','/s1/ai/**/*','/s1/electronics/**/*'],
            },
          }),
    starlightImageZoom(),
    starlightPageActions(),
    // starlightUtils({
    //   navLinks: {
    //   leading: { useSidebarLabelled:  "leading"  } ,
    // }})
    //starlightThemeNova({}), 
    ],
    title: '万工笔记',
    description:'工科小白零门槛入门教程！覆盖前后端、嵌入式、电子设计、人工智能、MATLAB、建模、机器人仿真等技术领域，足够全面，配套手把手教学视频，足够细致。文档与视频全部开源免费，助你轻松开启工科学习之路！诚邀建议反馈与投稿。',
    tableOfContents: { minHeadingLevel: 2,
       maxHeadingLevel: 4
       },
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    customCss: [
      './src/styles/root.css', 
      './src/styles/iconfont.css', 
      './src/styles/picsize.css',
      './src/styles/scrollbar.css',
      './src/styles/sidebar.css',
      './src/styles/droptopic.css',
      './src/styles/font-face.css',
      './src/styles/katex.css',
      './src/styles/nova.css'
    ],
    components: {
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Sidebar.astro',
        // MarkdownContent: './src/components/MarkdownContent.astro',
      },
    social: [
      { label: 'GitHub', icon: 'github', href: 'https://github.com/maindraster/starlight-blog' },
      { label: 'BiliBili', icon: 'youtube', href: 'https://space.bilibili.com/3546706348084176' },
      { label: 'RSS', icon: 'rss', href: 'https://tang.bearblog.dev/' },
      // 其他社交链接...
    ],
  }),
  ],
  redirects: {
    '/': '/s1/zero2hero'
  },
  markdown: {
    // 应用于 .md 和 .mdx 文件
    smartypants: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
    remarkRehype: { footnoteLabel: '参考', footnoteBackLabel: '返回正文' },
  },
  output: 'server',
  adapter: vercel()
});

