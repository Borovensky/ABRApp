module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    // тільки одинарні лапки
    quotes: ['error', 'single', { avoidEscape: true }],

    // групування та сортування імпортів
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // node-модулі
          'external', // сторонні пакети
          'internal', // внутрішні alias-и типу "@/..."
          'parent', // ../
          'sibling', // ./
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@react-native/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
