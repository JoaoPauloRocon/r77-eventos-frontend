module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:react/recommended',
      'prettier',            // desativa regras conflitantes com Prettier
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off'
    },
  };
  