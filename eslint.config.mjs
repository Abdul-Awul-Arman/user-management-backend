// eslint.config.js (ESLint 9+)
import tseslint from 'typescript-eslint';

export default [
    ...tseslint.configs.recommended,
    {
        ignores: ["node_modules",
            "dist",
            "build"],
        files: ['**/*.ts'],
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            // more rules
        },
    },
];
