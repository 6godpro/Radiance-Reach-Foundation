# 🌍 Radiance Reach Charity Foundation Website

A responsive web platform for **Radiance Reach Charity Foundation** — empowering communities through **education, healthcare, and outreach initiatives**. The website highlights the foundation’s mission, events, and impact stories while providing ways for supporters to get involved, donate, and stay informed.

---

## ✨ Overview
This project combines **design, storytelling, and interactivity** to showcase Radiance Reach’s initiatives.  
The frontend is built with **React + Chakra UI** and powered by an already configured **Sanity CMS backend**, which enables administrators to manage events, outreach programs, galleries, and blog posts without touching code.

---
![Screenshot of the Landing Page](https://github.com/6godpro/Radiance-Reach-Foundation/blob/main/src/assets/landing_page.png)

---

## 🚀 Features
- **Modern Landing Page**
  - Hero section with **background zoom on scroll**
  - Mission & vision highlights
- **Events & Outreach**
  - Filterable **events carousel and gallery**
  - Outreach programs segmented by category
  - **Lightbox modal** for browsing event photos
- **Animations**
  - Smooth **Framer Motion** transitions and micro-interactions
- **Sanity CMS Integration**
  - Structured content schemas for events, blog posts, galleries
  - Secure admin editing & publishing workflows
- **Accessibility & Responsiveness**
  - Chakra UI v3 ensures mobile-first, accessible design
  - Chakra theming for consistent styling

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite)  
- **UI Library:** Chakra UI v3  
- **Animations:** Framer Motion  
- **CMS:** Sanity.io (configured & live)  
- **Icons:** React Icons (Lucide + FontAwesome)  
- **State Management:** React hooks (`useState`, `useEffect`, `useDisclosure`)  
- **Styling:** Chakra System  

---

## 📦 Installation & Setup
Clone the repository and install dependencies:
```bash
git clone https://github.com/6godpro/Radiance-Reach-Foundation.git
cd Radiance-Reach-Foundation
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure
```bash
src/
  ├── assets/         # Images (hero, events, outreach photos)
  ├── components/     # Reusable UI components
  │     ├── Hero.tsx
  │     ├── Carousel.tsx
  │     ├── GalleryDialog.tsx
  │     └── ...
  ├── theme/          # Chakra theme configuration
  ├── App.tsx         # Root app structure
  └── main.tsx        # Vite entry point
```

## CMS Repository:
The Sanity backend (schemas & structure) is maintained [here](https://github.com/6godpro/studio-radiance-reach-charity-foundation) in a separate repository and already integrated.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch
```bash
git checkout -b feature/your-feature
```

3. Commit your changes
```bash
git commit -m "Add: short description of your feature"
```

4. Push your branch
```bash
git push origin feature/your-feature
```

5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
You’re free to use, modify, and distribute with proper attribution.

## 🌟 Acknowledgements
* Chakra UI for accessible React components
* Framer Motion for animations
* Sanity.io for headless CMS integration
* React Icons for icon sets
* All volunteers, contributors, and supporters of Radiance Reach Foundation ✨
