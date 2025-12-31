# Portfolio Optimization Patterns

This document outlines the production-grade performance patterns implemented to ensure fast rendering and smooth experience.

## 1. Hybrid Rendering Strategy
### Partial Prerendering (PPR)
We've enabled Next.js 15's **Partial Prerendering**. This allows the static shell of the portfolio (navigation, layout, hero text) to be served instantly from the edge, while dynamic components are streamed in.
- **Benefit**: Best of both worlds—static speed with dynamic flexibility.

## 2. Optimized Asset Loading
### Next.js Image Optimization
Standard `<img>` tags were replaced with `next/image` to leverage auto-resizing, WebP/AVIF support, and lazy loading.
- **Priority Loading**: Above-the-fold images (Hero background, Profile Photo) use the `priority` flag to bypass lazy loading and start fetching immediately.
- **Responsive Sizes**: Added `sizes` attribute to inform the browser about the actual display size of images, preventing the download of 2x-3x larger assets on mobile.

## 3. Rendering Performance
### Hardware Acceleration
Animations involving broad transforms (like the ID Badge or horizontal scrolls) now use the `will-change: transform` CSS hint.
- **Benefit**: Offloads expensive layout calculations to the GPU (Graphics Processing Unit), ensuring 60fps even on mid-range devices.

### Deferred Rendering (Next/Dynamic)
Heavy 3D components (Three.js) are now dynamically imported with `ssr: false`.
- **Skeleton States**: While the 3D scene initializes, a lightweight matching skeleton is shown to prevent layout shifts (CLS).

## 4. Adaptive 3D Quality
The Blockchain Visualization now detects the user's hardware capabilities:
- **Low-Power Detection**: If the device has low memory (<4GB) or is a mobile device, it automatically reduces particle counts and target FPS (30 instead of 60).
- **Resource Management**: Implemented strict disposal of WebGL geometries, materials, and textures to prevent memory leaks during long sessions.

## 5. Layout Stability
### Avoiding FOUC & Layout Shifts
Initial GSAP and Framer Motion states are pre-set to their starting positions to prevent the "Flash of Unstyled Content" where elements might jump or flicker during initialization.
