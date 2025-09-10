# 🌟 Rimac Prub

Este proyecto es una aplicación **frontend** desarrollada con **React + TypeScript + Vite**, que incluye integración con **Firebase** y estilos en **SCSS**.  
Su objetivo es construir una página de **login** y **planes de seguros** con diseño **responsivo** y buenas prácticas de desarrollo.

---
# 🌟 Solución del Proyecto

La solución propuesta consiste en el desarrollo de una aplicación **frontend** que simula el flujo de contratación digital de un seguro, compuesta por **login**, **selección de planes** y **resumen final**, con un diseño totalmente **responsivo** y basado en buenas prácticas de desarrollo moderno.  

---

## 🎯 Objetivos de la solución
- Implementar una aplicación **frontend** que simule el proceso de **login, selección de planes y resumen final**.  
- Garantizar una **experiencia de usuario sencilla, clara y responsiva**, adaptable a móviles, tablets y desktops.  
- Aplicar buenas prácticas de desarrollo con **React + TypeScript**, asegurando mantenibilidad y escalabilidad del código.  
- Integrar **Firebase** para autenticación y despliegue en la nube.  

---

## 📌 Justificación
En un contexto donde la **experiencia digital** es fundamental, esta aplicación busca reproducir un flujo común en sistemas de seguros y servicios financieros:  

➡️ **Autenticación → Personalización → Confirmación**  

- El uso de **SCSS** permite definir un diseño adaptable y visualmente atractivo.  
- La arquitectura basada en **componentes de React** garantiza **reutilización, modularidad y legibilidad** en el código.  

---

## 🖥️ Alcance de la aplicación
- **🏠 Vista Home/Login** → Permite el ingreso de usuarios registrados.  
- **📑 Selección de planes** → Muestra distintas opciones y beneficios de seguros.  
- **📋 Resumen final** → El usuario revisa y confirma su elección.  
- **📱 Diseño responsive** → Interfaz accesible desde móviles, tablets y escritorios.  

---

## 🚀 Conclusión
El proyecto demuestra cómo el uso de **tecnologías modernas** (React, TypeScript, SCSS y Firebase) permite construir aplicaciones web:  
- Rápidas ⚡  
- Seguras 🔐  
- Responsivas 📱  
- Con un flujo realista orientado al sector de **seguros digitales**.  

---

## 🛠️ Tecnologías utilizadas
- ⚛️ [React](https://react.dev/) + [Vite](https://vitejs.dev/) → Framework y bundler de alto rendimiento.  
- 🟦 [TypeScript](https://www.typescriptlang.org/) → Tipado estático para un código más robusto.  
- 🎨 [SCSS](https://sass-lang.com/) → Estilos modulares y reutilizables.  
- 🔥 [Firebase](https://firebase.google.com/) → Hosting y servicios en la nube.  
- 📏 [ESLint](https://eslint.org/) → Reglas de estilo y buenas prácticas.  

---

## 📂 Estructura del proyecto
```bash
├── public/            # Archivos estáticos (imágenes globales, favicon, etc.)
├── src/               # Código fuente principal
│   ├── assets/        # Recursos como imágenes, íconos, fuentes
│   ├── components/    # Componentes reutilizables de React
│   ├── pages/         # Páginas principales (Login, Planes, etc.)
│   ├── styles/        # Estilos SCSS
│   └── main.tsx       # Punto de entrada de la app
├── firebase.json      # Configuración de Firebase
├── vite.config.ts     # Configuración de Vite
└── package.json       # Dependencias y scripts
```


---

## 🚀 Instalación y ejecución

Clona el repositorio y entra en la carpeta:


git clone https://github.com/tu-usuario/rimac_prub.git
cd rimac_prub


# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Deploy del proyecto con Firebase
npm run build
firebase deploy


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
