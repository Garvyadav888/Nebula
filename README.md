# NEBULA - Portfolio Website

A modern, animated portfolio website built with React, Vite, and GSAP. Features glassmorphism design, smooth animations, and a fully responsive layout.

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design with smooth animations
- **GSAP Animations**: Scroll-triggered animations and page transitions
- **Responsive Design**: Mobile-first approach with breakpoints
- **Contact Form**: Integrated with EmailJS for form submissions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Error Handling**: Error boundaries for graceful error handling
- **Toast Notifications**: User-friendly feedback for actions
- **Scroll to Top**: Smooth scroll button for better navigation
- **Loading States**: Visual feedback during async operations

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **GSAP** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **EmailJS** - Email service for contact form
- **React Hot Toast** - Toast notifications

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd NEBULA
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
   - Update contact information
   - Add your social media links
   - Configure EmailJS credentials (for contact form)

5. Start the development server:
```bash
npm run dev
```

## ⚙️ Configuration

### Contact Form Setup (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key
5. Update `.env` with your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Site Configuration

Update `src/config/constants.js` with your information:
- Site name and description
- Contact information
- Social media links
- EmailJS configuration

## 📁 Project Structure

```
NEBULA/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── home/            # Home page sections
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components
│   ├── config/              # Configuration files
│   ├── Pages/               # Page components
│   ├── assets/              # Static assets
│   └── lib/                 # Utility functions
├── public/                  # Public assets
├── .env.example             # Environment variables template
└── package.json
```

## 🎨 Customization

### Colors

The primary accent color is `#e77402` (orange). To change it:
1. Update the color in `src/index.css` or Tailwind config
2. Update the `trp` class in `src/App.css`

### Animations

Animations are configured in individual components using GSAP. Adjust timing and easing in component files.

### Content

- **Projects**: Update `src/components/home/Project.jsx` with your projects
- **Skills**: Update `src/components/home/Services.jsx` with your skills
- **About**: Update `src/components/home/About.jsx` with your information

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Add environment variables
4. Deploy

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

See `.env.example` for all available environment variables. Copy it to `.env` and fill in your values.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Garv Yadav**
- Portfolio: [Your Website]
- Email: [Your Email]
- GitHub: [Your GitHub]

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for amazing animations
- [Tailwind CSS](https://tailwindcss.com/) for utility classes
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ by Garv Yadav
