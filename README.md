## (1). API link : https://pokeapi.co/api/v2/pokemon/ditto

# (2). 45min-useEffect-hook(PokemonList.jsx)

# (3). deploying `vite-react-app` on github:

- (i). edit `vite.config.js` file :---
``` js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  "base":"</Pokedex>" <!-- Here you have to add the reposetory name that you want to make live -->
})
```

- (ii). edit `package.json` file :---

```json
{
  "name": "11-pokedex",
  "homepage": "htts://<your-username>.github.io/<repository-name>",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.7.8",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "vite": "^6.0.1"
  }
}

```

- (iii). Install package : `gh-pages` :---

```bash
install gh-pages
```

- (iv). Add these two scripts in the `scripts` section of `package.json` file :---
``` json
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
```
- (v). Push all the file to the github :---
```
git push
```

- (vi). run the command in the terminal :---
```bash
npm run build
```






