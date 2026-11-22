# CookinApp

CookinApp is a modern, mobile-first recipe and ingredient management app built with **React Native**. It allows users to select ingredients, discover recipes based on their selections, and supports multiple languages and dark mode for a beautiful, accessible experience.

---

## Features

- 🌙 **Dark Mode** UI throughout the app, including navigation and headers
- 🥕 **Ingredient Selector** with categories (Vegetables, Meat, Seafood, Dairy, Grains, Legumes, Condiments, Fruits, Oils & Fats, Herbs & Spices)
- 🍽️ **Recipe Discovery**: Find recipes that use your selected ingredients, powered by the [Spoonacular API](https://spoonacular.com/food-api)
- 🌐 **Multi-language Support** (English & French out of the box)
- 🎨 **Gradient Buttons** and modern UI elements
- 🖼️ **Ingredient Icons** for visual selection
- 🚀 **Splash Screen** for a polished startup experience

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- A working [React Native environment](https://reactnative.dev/docs/set-up-your-environment) (the app uses React Native 0.80)
- Android Studio or Xcode for device/simulator

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/hamzakhalem/cookingapp.git
   cd cookingapp
   ```

2. **Add your Spoonacular API key:**
   ```sh
   cp src/constants/config.example.js src/constants/config.js
   ```
   Then put your own key (free at https://spoonacular.com/food-api/console) in `config.js`. That file is in `.gitignore`, so your key is never committed.

3. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

4. **Install CocoaPods for iOS (macOS only):**
   ```sh
   bundle install
   cd ios && bundle exec pod install && cd ..
   ```

5. **Start Metro Bundler:**
   ```sh
   npm start
   # or
   yarn start
   ```

6. **Run the app:**
   - **Android:** `npm run android` or `yarn android`
   - **iOS:** `npm run ios` or `yarn ios`

---

## Project Structure

```text
cookingapp/
├── App.tsx
├── src/
│   ├── api/          Spoonacular requests
│   ├── assets/       logo and ingredient icons
│   ├── components/   ingredient input, item and selector
│   ├── constants/    config.js with your API key (git-ignored)
│   ├── data/         ingredients and categories
│   ├── hooks/        useFetchRecipes
│   ├── i18n/         English and French translations
│   ├── navigation/
│   ├── screens/      Home and Recipes
│   └── styles/
├── android/
└── ios/
```

---

## Customization

- **Add more languages:** Edit `src/i18n/translations.js`
- **Add more ingredients or categories:** Edit `src/data/ingredientsByCategory.js`
- **Customize theme:** Edit styles in components or navigation theme in `App.tsx`

---

## Troubleshooting

- If you have issues running the app, see the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).
- For Metro issues, try `npx react-native start --reset-cache`.

---

## License

[MIT](LICENSE)

---

## Credits

- Built with [React Native](https://reactnative.dev/)
- Uses [react-i18next](https://react.i18next.com/) for localization
- Gradient UI powered by [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)

---

Happy cooking! 🍳
