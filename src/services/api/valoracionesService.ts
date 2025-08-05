import { API_CONFIG, DEFAULT_HEADERS } from '../config/apiConfig';
import type { ValoracionesResponse, ApiError } from '../types/valoraciones';

/**
 * Servicio para obtener valoraciones de la API
 */
export class ValoracionesService {
  /**
   * Obtiene las valoraciones desde la API
   */
  static async obtenerValoraciones(): Promise<ValoracionesResponse> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

      const response = await fetch(API_CONFIG.VALORACIONES_URL, {
        method: 'GET',
        headers: DEFAULT_HEADERS,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }

      const data: ValoracionesResponse = await response.json();
      
      // Validar que la respuesta tenga la estructura esperada
      if (!data || !data.status || !Array.isArray(data.data)) {
        throw new Error('Formato de respuesta inválido');
      }

      return data;
    } catch (error) {
      console.error('Error al obtener valoraciones:', error);
      
      // Si es un error de red o timeout
      if (error instanceof TypeError || (error as any)?.name === 'AbortError') {
        throw new Error('Error de conexión. Verifica tu conexión a internet.');
      }
      
      // Re-lanzar otros errores
      throw error;
    }
  }

  /**
   * Obtiene valoraciones con manejo de errores integrado
   * Retorna un array vacío si hay error
   */
  static async obtenerValoracionesSeguro() {
    try {
      const response = await this.obtenerValoraciones();
      return response.data;
    } catch (error) {
      console.warn('No se pudieron cargar las valoraciones, usando datos por defecto');
      return [];
    }
  }
}
