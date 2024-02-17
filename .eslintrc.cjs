/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Assurez-vous que Prettier est configuré selon vos préférences
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // ou 2021
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // Détecte automatiquement la version de React à utiliser
    },
  },
  plugins: [
    "react", // Utilise le plugin eslint-plugin-react
    "react-hooks", // Utilise le plugin eslint-plugin-react-hooks
  ],
  rules: {
    // Règles ESLint personnalisées
    "react/react-in-jsx-scope": "off", // Nécessaire pour React 17+ où l'import de React n'est plus nécessaire dans chaque fichier
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }], // Autorise les extensions .jsx et .js pour les fichiers JSX
    "no-unused-vars": "warn", // Avertit sur les variables non utilisées plutôt que de générer une erreur
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Utilise les règles de formatage de Prettier à partir de votre fichier .prettierrc si vous en avez un
  },
};
