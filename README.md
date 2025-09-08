# Radiance Reach Charity Foundation Website 🌍

A responsive web application for **Radiance Reach Charity Foundation** — empowering communities through education, healthcare, and outreach initiatives.  
This project highlights our mission, events, and impact stories while providing ways for supporters to get involved.

---

## 🚀 Features

- **Hero Section** with background image zoom effect on scroll  
- **Events Carousel & Gallery** (segmented by outreach type)  
- **Lightbox Modal** for event photos  
- **Chakra UI v3** powered responsive design  
- **Framer Motion Animations** for smooth transitions  
- **FastAPI (planned)** backend integration for dynamic content  

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite, Chakra UI v3, Framer Motion
- **Styling:** Tailwind Tokens + Chakra System
- **Icons:** React Icons (Lucide + FontAwesome)
- **State Management:** React hooks (`useState`, `useEffect`, `useDisclosure`) 

---

## 📦 Installation
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

Preview production build locally:
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
  ├── theme/          # Chakra system theme config
  ├── App.tsx
  └── main.tsx
```
## 🤝 Contributing
Contributions are welcome!

1. Fork the repo
2. Create a feature branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m "Add new feature")
4. Push to your branch (git push origin feature/your-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🌟 Acknowledgements
Chakra UI for accessible React components
Framer Motion for animations
React Icons
All volunteers and contributors who made Radiance Reach possible ✨
