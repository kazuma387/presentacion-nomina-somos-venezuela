import React from 'react';
import { LocationData } from '../types';

interface AnalysisProps {
  data: LocationData[];
  total: number;
}

const AnalysisSection: React.FC<AnalysisProps> = ({ data, total }) => {
  // Find max value
  const maxLocation = data.reduce((prev, current) => (prev.value > current.value) ? prev : current);
  const percentage = ((maxLocation.value / total) * 100).toFixed(1);

  // Find min value
  const minLocation = data.reduce((prev, current) => (prev.value < current.value) ? prev : current);

  // Calculate others
  const othersTotal = total - maxLocation.value;

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-white/50 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
          Resumen Ejecutivo
        </h2>
        <div className="prose prose-slate max-w-none text-base md:text-2xl leading-relaxed text-slate-700">
          <p className="mb-6">
            El análisis de los datos recolectados sobre la estructura del <strong>Movimiento Somos Venezuela</strong> muestra una distribución desigual entre las diferentes parroquias.
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong className="text-blue-700">{maxLocation.name}</strong> es, con diferencia, la parroquia con mayor cantidad de personal, acumulando un total de <strong>{maxLocation.value}</strong> brigadistas. Esto representa aproximadamente el <strong>{percentage}%</strong> del total general.
            </li>
            <li>
              Las otras tres parroquias suman en conjunto <strong>{othersTotal}</strong> brigadistas, lo que sugiere que la fuerza laboral está fuertemente concentrada en {maxLocation.name}.
            </li>
            <li>
              La parroquia con menor cantidad de brigadistas es <strong className="text-amber-600">{minLocation.name}</strong> con {minLocation.value} integrantes registrados.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;