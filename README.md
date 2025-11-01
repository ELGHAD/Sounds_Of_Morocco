# Next.js Modern Web Application

A modern web application built with Next.js, React, TypeScript, and Tailwind CSS, featuring a comprehensive UI component library and responsive design.

## 🚀 Tech Stack

- **Frontend Framework:** Next.js 16.0.0
- **UI Library:** React 19.2.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Library:** Radix UI
- **Package Manager:** pnpm
- **Additional Tools:**
  - react-hook-form: Form handling
  - zod: Schema validation
  - next-themes: Theme management
  - lucide-react: Icons
  - date-fns: Date manipulation

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (LTS version recommended)
- pnpm (preferred) or npm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SOM
```

2. Install dependencies:
```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install
```

## 🚀 Running the Application

### Development Mode
```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components
│   └── ...             # Other components
├── public/             # Static files
├── styles/            # Additional styles
└── lib/               # Utility functions
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

## 🔨 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Tailwind CSS for styling

### Components
The project includes a comprehensive set of UI components:
- Accordion
- Alert Dialog
- Avatar
- Button
- Card
- Dialog
- Form elements
- Navigation components
- And many more...

## 🎨 Customization

### Theming
The project uses `next-themes` for theme management. You can customize themes in:
- `app/globals.css`
- Tailwind configuration

### UI Components
Most UI components are built on Radix UI primitives, providing:
- Accessibility out of the box
- Customizable styling
- Consistent behavior across browsers

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 is already in use**
   ```bash
   pnpm dev -- -p 3001
   ```

2. **Missing Dependencies**
   ```bash
   pnpm install
   ```

3. **TypeScript Errors**
   - Check `tsconfig.json` settings
   - Run `pnpm tsc` to verify types

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
