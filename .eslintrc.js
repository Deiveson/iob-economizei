module.exports = {
    extends: ['react-app'],
    rules: {
        camelcase: 'off',
        'comma-dangle': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: 'asc',
                },
                groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        group: 'internal',
                        pattern: 'assets/**',
                        position: 'after',
                    },
                    {
                        group: 'internal',
                        pattern: 'components/**',
                    },
                    {
                        group: 'internal',
                        pattern: 'infra/**',
                    },
                    {
                        group: 'internal',
                        pattern: 'modules/**',
                    },
                    {
                        group: 'internal',
                        pattern: 'utils/**',
                    },
                    {
                        group: 'internal',
                        pattern: 'router/**',
                    },
                    {
                        group: 'external',
                        pattern: 'react**',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['internal'],
            },
        ],
        'max-depth': 'warn',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'prefer-destructuring': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'space-before-function-paren': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-empty-interface': [
                    'error',
                    {
                        allowSingleExtends: true,
                    },
                ],
                '@typescript-eslint/no-explicit-any': ['off'],
                '@typescript-eslint/no-use-before-define': ['error'],
            },
        },
    ],
}
