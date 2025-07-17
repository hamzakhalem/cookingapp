# CookinApp

CookinApp is a modern, mobile-first recipe and ingredient management app built with **React Native**. It allows users to select ingredients, discover recipes based on their selections, and supports multiple languages and dark mode for a beautiful, accessible experience.

---

## Features

- 🌙 **Dark Mode** UI throughout the app, including navigation and headers
- 🥕 **Ingredient Selector** with categories (Vegetables, Meat, Seafood, Dairy, Grains, Legumes, Condiments, Fruits, Oils & Fats, Herbs & Spices)
- 🍽️ **Recipe Discovery**: Find recipes based on selected ingredients
- 🌐 **Multi-language Support** (English & French out of the box)
- 🎨 **Gradient Buttons** and modern UI elements
- 🖼️ **Ingredient Icons** for visual selection
- 🚀 **Splash Screen** for a polished startup experience

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio or Xcode for device/simulator

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd cockingApp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Install CocoaPods for iOS (macOS only):**
   ```sh
   cd ios
   pod install
   cd ..
   ```

4. **Start Metro Bundler:**
   ```sh
   npm start
   # or
   yarn start
   ```

5. **Run the app:**
   - **Android:** `npm run android` or `yarn android`
   - **iOS:** `npm run ios` or `yarn ios`

---

## Project Structure

```
cockingApp/
├── App.tsx
├── src/
│   ├── api/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── navigation/
│   └── screens/
├── assets/
│   └── icons/
└── ...
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

MIT

---

## Credits

- Built with [React Native](https://reactnative.dev/)
- Uses [react-i18next](https://react.i18next.com/) for localization
- Gradient UI powered by [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)

---

Happy cooking! 🍳
