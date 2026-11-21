# AGENTS.md

## Project overview
- React 19 + TypeScript + Vite application for previewing and displaying Hyper Elements templates.
- The main shell is [src/components/TemplateStudio.tsx](src/components/TemplateStudio.tsx); templates are registered in [src/template/index.tsx](src/template/index.tsx).
- Package scripts are defined in [package.json](package.json). Use Bun for local commands: `bun run dev`, `bun run build`, `bun run lint`, and `bun run preview`.

## Working conventions
- Keep changes focused; TypeScript uses strict unused-symbol checks and `erasableSyntaxOnly`, so remove unused imports, parameters, locals, and enums.
- Use the existing React function-component, hooks, named `interface`, and CSS-import patterns. Preserve React 19 and `jsx: react-jsx` conventions.
- Use `bun` rather than adding or assuming npm/yarn-specific scripts or lockfiles.
- Run `bun run lint` and `bun run build` after code changes. Do not report completion if either fails.

## Adding or changing templates
1. Create the template component in `src/` and preserve an isolated `<Html>` page/style block when it needs template-specific CSS or browser script behavior.
2. Add a `?raw` source import and register it in [src/template/index.tsx](src/template/index.tsx) with a stable ID and `component` function.
3. Pass stable React elements through [src/hooks/useRenderTemplate.ts](src/hooks/useRenderTemplate.ts); [src/hooks/useRender.ts](src/hooks/useRender.ts) memoizes stale-result protection but still expects stable elements.
4. Verify both preview and source-code views. Unknown IDs currently render an empty source and loading state, so validate template IDs centrally.
5. Rendering is asynchronous. Preserve loading/error states and do not assume `html` is immediately available.

## Preview and styling boundaries
- [src/components/TemplateStudio.css](src/components/TemplateStudio.css) owns the studio shell layout.
- [src/index.css](src/index.css) contains legacy/global entry styles that can affect the outer app; change it only when deliberately updating global layout.
- [src/ReadingGarden.tsx](src/ReadingGarden.tsx) is the template example and keeps template CSS inside its Hyper Elements `<Html>` output for iframe isolation.
- Preview HTML is sandboxed with `allow-scripts allow-forms allow-popups`; do not expand the sandbox unnecessarily.
- Use template-specific CSS and avoid leaking iframe styles into the studio shell.

## Validation notes
- Vite builds through `tsc -b && vite build`; fix TypeScript diagnostics before treating a build as successful.
- ESLint applies React Hooks and React Refresh rules. Do not introduce effects or exports that bypass those rules without a project-specific reason.
- There is currently no test script or test directory. For UI changes, at minimum run lint/build and manually verify the Vite page, template switcher, preview, phone/desktop modes, code view, and copy action.
