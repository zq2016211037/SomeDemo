// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // 缩进风格
        "indent": ["error", 4], //缩进风格
        // allow async-await
        'generator-star-spacing': 0,
        // 语句结尾强制分号
        'semi': [2, 'always'],
        // no-tabs
        'no-tabs': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 函数参数前不允许空格
        'space-before-function-paren': ["error", "never"],
        'eol-last': 0,
        // 允许.转义
        'no-useless-escape': 0
    }
}
