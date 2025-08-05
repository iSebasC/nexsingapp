import { ValoracionesService } from '../services';
import type { Valoracion } from '../services';

/**
 * Composable para manejar valoraciones
 */
export const useValoraciones = () => {
  /**
   * Obtiene valoraciones con datos por defecto como fallback
   */
  const obtenerValoraciones = async (): Promise<Valoracion[]> => {
    try {
      const valoraciones = await ValoracionesService.obtenerValoracionesSeguro();
      
      // Si no hay valoraciones de la API, usar datos por defecto
      if (valoraciones.length === 0) {
        return getValoracionesPorDefecto();
      }
      
      return valoraciones;
    } catch (error) {
      console.error('Error en useValoraciones:', error);
      return getValoracionesPorDefecto();
    }
  };

  /**
   * Datos por defecto para cuando la API no esté disponible
   */
  const getValoracionesPorDefecto = (): Valoracion[] => [
    {
      nombre_completo: 'Lizbeth Morales',
      area: 'Asistente de enfermería',
      comentario: 'Excelente comunicación y atención, ideas creativas y responsabilidad.',
    },
    {
      nombre_completo: 'Cliente Satisfecho',
      area: 'Empresario',
      comentario: 'Servicio excepcional, muy profesional y cumple con todos los plazos establecidos.',
    },
  ];

  return {
    obtenerValoraciones,
    getValoracionesPorDefecto,
  };
};
