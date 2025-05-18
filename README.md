# Career Up Dashboard

## Overview:
This is a very basic responsive dashboard app featuring modular frontend architecture and clean, reusable components — built with Vue 3, Vuetify 3, and TypeScript.

## Project Setup
1. Clone this repo:
```sh
git clone https://github.com/your-username/career-up-dashboard.git
cd career-up-dashboard
```

2. Install dependencies:
```sh
npm install
```

3. Create a `.env` file in the root of the project and add your Google Maps API key:
```env
VITE_GOOGLE_MAPS_API_KEY=your-api-key-here
```

### 📍 How to Get a Google Maps API Key:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Navigate to **APIs & Services > Library**.
4. Enable the **Maps JavaScript API**.
5. Go to **APIs & Services > Credentials**.
6. Click **+ Create Credentials** > **API key**.
7. Copy the generated key and add it to your `.env` file as shown above.
8. (Optional) Restrict your key to specific referrers (recommended for security).

---

### Compile and Hot-Reload for Development
```sh
npm run dev
```

### Type-Check, Compile and Minify for Production
```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)
```sh
npm run lint
```
