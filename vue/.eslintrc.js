module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['eslint:recommended', 'standard', 'plugin:vue/recommended'],
  rules: {
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    indent: 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/script-indent': ['error', 'tab', { baseIndent: 0 }]
  },
  plugins: ['html', 'eslint-plugin-vue', 'eslint-plugin-html']
}
