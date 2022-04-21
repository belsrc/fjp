module.exports = {
  extends: ['eslint-config-belsrc'],

  overrides: [
    {
      files: [ '*.js', '*.ts' ],
      rules: {
        'fp-jxl/no-mutating-methods': 'off',

        // 'fp-jxl/no-nil': 'off',
        // 'fp-jxl/no-unused-expression': 'off',
      },
    },
  ],
};
