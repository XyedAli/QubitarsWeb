# 🚀 Developer Guide - Quick Reference

## 📁 Folder Structure Rules

### Components
```
components/
├── features/          # Page-specific components (home, about, services)
├── layout/           # Layout components (navbar, topnav, dropdowns)
└── shared/           # Reusable UI components (button, cards, slider)
```

**Rules:**
- ✅ Folders: **lowercase** (`navbar`, `topnav`, `dropdowns`)
- ✅ Component files: **PascalCase** (`Hero.tsx`, `CapabilitiesDropdown.tsx`)
- ✅ Component exports: **PascalCase** (`Hero`, `Navbar`)

### Pages
```
app/
├── page.tsx          # Home page (/)
├── about/page.tsx   # /about
└── [page-name]/page.tsx
```

**Rules:**
- ✅ All page files: `page.tsx` (lowercase)
- ✅ Folders: lowercase with hyphens if needed (`case-studies/`)

---

## 🎯 Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| **Folders** | lowercase | `navbar/`, `topnav/`, `dropdowns/` |
| **Component Files** | PascalCase | `Hero.tsx`, `CompanyDropdown.tsx` |
| **Component Exports** | PascalCase | `export const Hero = () => {}` |
| **Hooks** | camelCase + `use` prefix | `useNavbar.ts`, `useHero.ts` |
| **Types** | camelCase | `navbar.ts`, `home.ts` |
| **Data Files** | PascalCase | `Navbar.ts`, `Home.ts` |
| **Images** | lowercase, no spaces | `logo.svg`, `company-logo.png` |

---

## 📦 Component Organization

### 1. Feature Components (`components/features/`)
- **Purpose**: Page-specific components
- **Location**: `features/[page-name]/`
- **Example**: `features/home/Hero.tsx`

### 2. Layout Components (`components/layout/`)
- **Purpose**: Global layout (navbar, footer, dropdowns)
- **Location**: `layout/[component-name]/`
- **Example**: `layout/navbar/index.tsx`, `layout/dropdowns/`

### 3. Shared Components (`components/shared/`)
- **Purpose**: Reusable UI components
- **Location**: `shared/ui/[component-name]/`
- **Example**: `shared/ui/button/Button.tsx`

---

## 🖼️ Image Organization

```
public/assets/images/
├── navbar/        # Navbar images only
├── Company/       # Company-related images
└── Industries/    # Industry logos
```

**Rules:**
- ✅ Organize by usage, not by type
- ✅ Use lowercase, no spaces in filenames
- ✅ Export in `images/index.ts`

---

## 📝 Code Standards

### Imports Order
```typescript
// 1. React/Next.js
import React from "react";
import Image from "next/image";

// 2. Third-party
import { MoveUpRight } from "lucide-react";

// 3. Internal components
import { Button } from "@/components/shared/ui";

// 4. Data/types
import { navItems } from "@/data/Navbar";

// 5. Styles
import { styles } from "@/styles/style";
```

### Component Structure
```typescript
"use client"; // If needed

import ... // Imports

// Component
export const ComponentName = () => {
  // Hooks
  // State
  // Handlers
  // Render
  return (...);
};
```

---

## ✅ Best Practices

1. **Always use Next/Image** - Never use `<img>` tag
2. **Add loading="lazy"** - For below-fold images
3. **Use priority prop** - For above-fold images
4. **Export from index.ts** - Create index files for clean imports
5. **Type everything** - Use TypeScript types
6. **Client components** - Add `"use client"` when needed
7. **Consistent spacing** - Use Tailwind classes consistently

---

## 🚫 Don'ts

- ❌ Don't use `<img>` - Use `next/image`
- ❌ Don't mix naming conventions
- ❌ Don't create deep folder nesting (>3 levels)
- ❌ Don't put page components in `shared/`
- ❌ Don't put layout components in `features/`

---

## 🔄 Adding New Pages

1. Create folder: `app/[page-name]/page.tsx`
2. Create components: `components/features/[page-name]/`
3. Export from index: `components/features/[page-name]/index.ts`
4. Import in page: `import { Component } from "@/components/features/[page-name]"`

---

## 📚 Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Format
npm run format

# Type check
npm run build  # Includes type checking
```

---

## 🎨 Style Guide

- **Tailwind CSS** - Use utility classes
- **Custom styles** - Add to `styles/style.ts`
- **Responsive** - Mobile-first approach
- **Colors** - Use theme colors from `globals.css`

---

**Last Updated**: 2024
**Version**: 1.0.0

