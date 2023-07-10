import chalk from 'chalk';
import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

const headPkgList: string[] = [];
// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);

const alias = pkgList.reduce((pre, pkg) => {
  pre[`@ant-design/pro-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {});

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`);

const tailPkgList = pkgList.map((path) => `packages/${path}/src/components`);

export default defineConfig({
  sitemap: { hostname: 'https://procomponents.ant.design' },
  metas: [
    {
      property: 'og:site_name',
      content: 'ProComponents',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://procomponents.ant.design/icon.png',
    },
    {
      property: 'og:description',
      content: '🏆 让中后台开发更简单',
    },
    {
      name: 'keywords',
      content: '中后台,admin,Ant Design,ant design,Table,react,alibaba',
    },
    {
      name: 'description',
      content: '🏆 让中后台开发更简单 包含 table form 等多个组件。',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#1890ff',
    },
    {
      name: 'google-site-verification',
      content: '9LDp--DeEC-xOggsHl_t1MlR_1_2O972JpSUu8NZKMU',
    },
  ],
  analytics: {
    ga_v2: 'G-RMBLDHGL1N',
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
  ],
  alias,
  resolve: {
    docDirs: ['docs'],
    atomDirs: tailPkgList.map((dir) => ({ type: 'component', dir })),
  },
  styles: [`.markdown table{table-layout: fixed;}`],
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  // ssr: {},
  themeConfig: {
    hero: {
      title: 'ProComponents',
      description: '🏆 让中后台开发更简单',
      actions: {
        text: '🏮🏮 快速开始 →',
        link: '/docs/intro',
      },
    },
    features: [
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
        title: '简单易用',
        description: '在 Ant Design 上进行了自己的封装，更加易用',
      },
      {
        image:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        title: 'Ant Design',
        description: '与 Ant Design 设计体系一脉相承，无缝对接 antd 项目',
      },
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/UKqDTIp55HYAAAAAAAAAAAAAFl94AQBr',
        title: '国际化',
        description: '提供完备的国际化，与 Ant Design 体系打通，无需多余配置',
      },

      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/Y_NMQKxw7OgAAAAAAAAAAAAAFl94AQBr',
        title: '预设样式',
        description:
          '样式风格与 antd 一脉相承，无需魔改，浑然天成。默认好用的主题系统',
      },
      {
        image:
          'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
        title: '预设行为',
        description: '更少的代码，更少的 Bug，更多的功能',
      },

      {
        image:
          'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
        title: 'TypeScript',
        description:
          '使用 TypeScript 开发，提供完整的类型定义文件，无需频繁打开官网',
      },
    ],
    siteToken: { demoInheritSiteTheme: true },
    name: 'ProComponents',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    socialLinks: {
      github: 'https://github.com/ant-design/pro-components',
    },
    nav: {
      'zh-CN': [
        { title: '文档', link: '/docs' },
        { title: '组件', link: '/components' },
        { title: 'Changelog', link: '/changelog' },
        { title: 'Playground', link: '/playground' },
      ],
      'en-US': [
        { title: 'Docs', link: '/en-US/docs' },
        { title: 'Components', link: '/en-US/components' },
        { title: 'Changelog', link: '/en-US/changelog' },
        { title: 'Playground', link: '/en-US/playground' },
      ],
    },
    sidebar: {
      '/en-US/components': [
        {
          title: 'Architecture Design',
          children: [
            {
              title: 'Component Design',
              link: '/en-US/components',
            },
            {
              title: 'General Schema',
              link: '/en-US/components/schema',
            },
          ],
        },
        {
          title: 'Layout',
          children: [
            {
              title: 'ProLayout',
              link: '/en-US/components/layout',
            },
            {
              title: 'PageContainer',
              link: '/en-US/components/page-container',
            },
            {
              title: 'ProCard',
              link: '/en-US/components/card',
            },
            {
              title: 'WaterMark',
              link: '/en-US/components/water-mark',
            },
            {
              title: 'StatisticCard',
              link: '/en-US/components/statistic-card',
            },
            {
              title: 'CheckCard',
              link: '/en-US/components/check-card',
            },
          ],
        },
        {
          title: 'Data Entry',
          children: [
            {
              title: 'ProForm',
              link: '/en-US/components/form',
            },
            {
              title: 'ProFormFields',
              link: '/en-US/components/field-set',
            },
            {
              title: 'ProFormList',
              link: '/en-US/components/group',
            },
            {
              title: 'ProFormDependency',
              link: '/en-US/components/dependency',
            },
            {
              title: 'Schema Form',
              link: '/en-US/components/schema-form',
            },
            {
              title: 'Query/LightFilter',
              link: '/en-US/components/query-filter',
            },
            {
              title: 'StepsForm',
              link: '/en-US/components/steps-form',
            },
            {
              title: 'Modal/Drawer Form',
              link: '/en-US/components/modal-form',
            },
            {
              title: 'LoginForm/LoginPageForm',
              link: '/en-US/components/login-form',
            },
          ],
        },
        {
          title: 'Data Display',
          children: [
            {
              title: 'ProTable',
              link: '/en-US/components/table',
            },
            {
              title: 'EditableProTable',
              link: '/en-US/components/editable-table',
            },
            {
              title: 'DragSortTable',
              link: '/en-US/components/drag-sort-table',
            },
            {
              title: 'ProList',
              link: '/en-US/components/list',
            },
            {
              title: 'ProDescriptions',
              link: '/en-US/components/descriptions',
            },
          ],
        },
        {
          title: 'Universal',
          children: [
            {
              title: 'ProSkeleton',
              link: '/en-US/components/skeleton',
            },
            {
              title: 'ProField',
              link: '/en-US/components/field',
            },
          ],
        },
      ],
      '/components': [
        {
          title: '架构设计',
          children: [
            {
              title: 'Components - 组件设计',
              link: '/components',
            },
            {
              title: 'Schema - 通用配置',
              link: '/components/schema',
            },
          ],
        },
        {
          title: '布局',
          children: [
            {
              title: 'ProLayout - 高级布局',
              link: '/components/layout',
            },
            {
              title: 'PageContainer - 页容器',
              link: '/components/page-container',
            },
            {
              title: 'ProCard - 高级卡片',
              link: '/components/card',
            },
            {
              title: 'WaterMark - 水印组件',
              link: '/components/water-mark',
            },
            {
              title: 'StatisticCard - 指标卡',
              link: '/components/statistic-card',
            },
            {
              title: 'CheckCard - 多选卡片',
              link: '/components/check-card',
            },
          ],
        },
        {
          title: '数据录入',
          children: [
            {
              title: 'ProForm - 高级表单',
              link: '/components/form',
            },
            {
              title: 'ProFormFields - 表单项',
              link: '/components/field-set',
            },
            {
              title: 'ProFormList - 数据结构化',
              link: '/components/group',
            },
            {
              title: 'ProFormDependency - 数据联动',
              link: '/components/dependency',
            },
            {
              title: 'Schema Form - JSON 表单',
              link: '/components/schema-form',
            },
            {
              title: ' Query/LightFilter - 筛选表单',
              link: '/components/query-filter',
            },
            {
              title: 'StepsForm - 分步表单',
              link: '/components/steps-form',
            },
            {
              title: 'Modal/Drawer - 浮层表单',
              link: '/components/modal-form',
            },
            {
              title: 'LoginForm/Page - 登录表单',
              link: '/components/login-form',
            },
          ],
        },
        {
          title: '数据展示',
          children: [
            {
              title: 'ProTable - 高级表格',
              link: '/components/table',
            },
            {
              title: 'EditableProTable - 可编辑表格',
              link: '/components/editable-table',
            },
            {
              title: ' DragSortTable - 拖动排序表格',
              link: '/components/drag-sort-table',
            },
            {
              title: 'ProList - 高级列表',
              link: '/components/list',
            },
            {
              title: 'ProDescriptions - 定义列表',
              link: '/components/descriptions',
            },
          ],
        },
        {
          title: '通用',
          children: [
            {
              title: 'ProSkeleton - 骨架屏',
              link: '/components/skeleton',
            },
            {
              title: 'ProField - 原子组件',
              link: '/components/field',
            },
          ],
        },
      ],
    },
    navs: {
      'en-US': [
        null,
        {
          title: 'GitHub',
          path: 'https://github.com/ant-design/pro-components',
        },
      ],
      'zh-CN': [
        null,
        {
          title: 'GitHub',
          path: 'https://github.com/ant-design/pro-components',
        },
      ],
    },
    apiHeader: {
      // 组件库包名，可以从 package.json 中引入名称
      pkg: '@ant-design/pro-components',
      // 匹配路由，默认为 /api 或 /components
      match: ['/api', '/components'],
    },
  },
  hash: true,
  ignoreMomentLocale: true,
  base: '/mirror/ant-procomponents',
  publicPath: '/mirror/ant-procomponents/',
});
