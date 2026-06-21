/// <reference types="vite/client" />
// Declaraciones mínimas para `import.meta.glob` y `import.meta.globEager`
// Evita errores de TypeScript cuando se usan en componentes Vite + TS.
declare interface ImportMeta {
  glob(pattern: string): Record<string, () => Promise<{ default: any }>>;
  globEager(pattern: string): Record<string, { default: any }>;
}
