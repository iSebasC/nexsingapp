/**
 * Configuración de API
 */
export const API_CONFIG = {
  VALORACIONES_URL: (import.meta.env as any).VITE_API_VALORACIONES_URL || 'http://localhost:5000/api/valoraciones/pagina-principal',
  TIMEOUT: 10000, // 10 segundos
} as const;

/**
 * Headers por defecto para las peticiones
 */
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;
