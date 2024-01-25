const { defineConfig } = require('eslint-define-config')
const path = require('path')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  globals: {},
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',

    // 通过 tsconfig 文件确定解析范围，这里需要绝对路径，否则子模块中 eslint 会出现异常
    project: path.resolve(__dirname, 'tsconfig.eslint.json'),
    ecmaVersion: 13,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    // vue 允许单单词组件名
    'vue/multi-word-component-names': 'off',

    'operator-linebreak': ['error', 'after'],
    'class-methods-use-this': 'off',

    // 允许使用 ++
    'no-plusplus': 'off',

    'no-spaced-func': 'off',

    // 换行符不作约束
    'linebreak-style': 'off',
  },

  // 文件级别的重写
  overrides: [
    // 对于 vite 和 vitest 的配置文件，不对 console.log 进行错误提示
    {
      files: [
        '**/vite.config.*',
        '**/vitest.config.*',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ],
})
