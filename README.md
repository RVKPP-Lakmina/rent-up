# 🏡 Estate Agent Management Website

Welcome to the **Estate Agent Management Website**, a fully responsive and modern front-end application built with the latest technologies, designed to streamline the real estate experience. Explore properties, view details, and navigate seamlessly through an intuitive interface.

## 🚀 Features

### 🌟 Core Features

- **Property Listings**: Browse through a collection of real estate properties.
- **Property Details**: View comprehensive information including price, location, and description.
- **Interactive Image Gallery**: Lightbox-enabled gallery for an enhanced viewing experience.
- **Google Maps Integration**: Visualize property locations with interactive Google Maps.
- **Dynamic Tabs**: Easily switch between property details, map views, and floor plans.
- **Contact Agent**: Directly reach out to agents for more information.

### 💻 Tech Stack

- **React**: Component-based architecture for a scalable and dynamic UI.
- **React Router**: Seamless navigation with single-page application (SPA) experience.
- **Bootstrap**: Ensures a fully responsive and visually appealing design.
- **React DnD**: Adds drag-and-drop functionality for enhanced interactivity.
- **@react-google-maps/api**: Integrates Google Maps for property location visualization.

---

## 🎨 Screenshots

### 🌐 Homepage

![Homepage Screenshot](./screenshots/homepage.png)

### 🏠 Property Details

![Property Details Screenshot](./screenshots/property-details.png)

---

## 🛠️ Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/estate-agent-management.git
   cd estate-agent-management
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Add Google Maps API Key**:

   - Create a `.env` file in the root directory.
   - Add your API key:
     ```env
     VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
     ```

4. **Run the Development Server**:

   ```bash
   npm start
   ```

5. **Open in Browser**:
   Visit `http://localhost:3000`.

---

## 📁 Project Structure

```
estate-agent-management/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── nav-bar/
│   │   ├── footer/
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── PropertyDetails.js
│   │   └── ...
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🖌️ Styling and Theming

This project uses **Bootstrap** for consistent design. You can easily customize the theme by modifying Bootstrap variables or adding custom CSS.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

## 🌟 Contributions

Contributions are welcome! Feel free to submit a pull request or report issues in the [issue tracker](https://github.com/yourusername/estate-agent-management/issues).

---

## 📮 Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: yourname@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

### 🌈 Thank You for Exploring!

We hope you enjoy using the **Estate Agent Management Website**. Your feedback and suggestions are always appreciated!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
