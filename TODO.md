# TODO: Conversion TSX → JSX

## Approved Plan Steps:

1. **[COMPLETED]** Create TODO.md
2. **[COMPLETED]** Adapt & create src/main.jsx (remove TS !)
3. **[COMPLETED]** Adapt & create src/app/App.jsx (update imports to .jsx)
4. **[COMPLETED]** Adapt & create src/app/components/ProjectCard.jsx (remove interface & types)
5. **[PENDING]** Adapt main components: HeroSection.jsx, AboutSection.jsx, etc.
6. **[PENDING]** Adapt ALL src/app/components/ui/*.tsx → .jsx (remove heavy TS types, interfaces from shadcn)
7. **[PENDING]** Adapt src/app/components/figma/ImageWithFallback.jsx
8. **[PENDING]** Convert vite.config.ts → vite.config.js (remove TS imports/types)
9. **[PENDING]** Update package.json (confirm no TS deps needed; none listed)
10. **[PENDING]** Update all remaining .tsx files
11. **[PENDING]** Global search/replace import paths .tsx → .jsx if missed
12. **[PENDING]** Test: pnpm install && pnpm dev
13. **[COMPLETED]** Cleanup: remove old .tsx files (manual or rm *)

Progress will be updated after each step.

Next: Start adaptations from src/main.tsx → main.jsx
