/**
 * Interfaz para una valoración individual
 */
export interface Valoracion {
  nombre_completo: string;
  area: string;
  comentario: string;
}

/**
 * Respuesta de la API de valoraciones
 */
export interface ValoracionesResponse {
  status: 'success' | 'error';
  data: Valoracion[];
}

/**
 * Error de la API
 */
export interface ApiError {
  status: 'error';
  message: string;
}
