/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANTHROPIC_API_KEY?: string
  readonly VITE_GEMINI_API_KEY?: string
  // Vertex AI express-mode key used for image generation.
  readonly VITE_GOOGLE_API_KEY?: string
  // AI Studio free-tier key used for text generation.
  readonly VITE_GEMINI_TEXT_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
