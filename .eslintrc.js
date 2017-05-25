module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  },
};
