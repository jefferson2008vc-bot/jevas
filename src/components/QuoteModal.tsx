import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, Send, CheckCircle2, PhoneCall, MessageCircle, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { QuoteRequestData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Fabricación de estructuras metálicas',
}) => {
  const [formData, setFormData] = useState<QuoteRequestData>({
    serviceId: '1',
    serviceName: initialService,
    dimensions: '100',
    materials: 'Acero Estructural ASTM A36 + Pintura Epóxica',
    urgency: 'normal',
    name: '',
    phone: '',
    email: '',
    city: 'Bogotá / Sabana',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculate estimated budget range
  const calculateEstimate = () => {
    const dims = parseFloat(formData.dimensions || '100');
    let baseRate = 120000; // COP / m2 base estimate placeholder
    if (formData.serviceName.includes('Galpón') || formData.serviceName.includes('Estructura')) baseRate = 180000;
    if (formData.serviceName.includes('Puerta') || formData.serviceName.includes('Portón')) baseRate = 150000;
    if (formData.serviceName.includes('TIG') || formData.serviceName.includes('Soldadura')) baseRate = 90000;

    const min = Math.round(dims * baseRate * 0.9);
    const max = Math.round(dims * baseRate * 1.25);
    return {
      minStr: min.toLocaleString('es-CO'),
      maxStr: max.toLocaleString('es-CO'),
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Hola *Construcciones JEVAS*, deseo solicitar cotización para:\n\n` +
      `*Servicio:* ${formData.serviceName}\n` +
      `*Dimensiones Estimadas:* ${formData.dimensions} m² / ml\n` +
      `*Materiales:* ${formData.materials}\n` +
      `*Urgencia:* ${formData.urgency.toUpperCase()}\n` +
      `*Cliente:* ${formData.name}\n` +
      `*Teléfono:* ${formData.phone}\n` +
      `*Ciudad:* ${formData.city}\n` +
      `*Notas:* ${formData.notes || 'N/A'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <div className="bg-[#1A1A1A] border border-[#FF6B00]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-auto">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#2E2E2E] text-white hover:bg-[#FF6B00] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#FF6B00]/20 rounded-2xl text-[#FF6B00]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading text-white">Calculadora de Cotización Rápida</h2>
              <p className="text-xs text-gray-400 font-sans">Especifique los parámetros técnicos de su obra para obtener un presupuesto estimado.</p>
            </div>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-[#FF6B00] mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold font-heading text-white">¡Solicitud Generada Exitosamente!</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Hemos registrado los detalles de su cotización. Para agilizar la respuesta técnica inmediata con un ingeniero estructurista de JEVAS, puede enviar el resumen directamente por WhatsApp.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendWhatsApp}
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar por WhatsApp Inmediato</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#2E2E2E] hover:bg-white/10 text-white font-bold text-xs rounded-xl"
                >
                  Cerrar Ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Servicio Requerido *</label>
                <select
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Dimensiones / Área Aprox. (m² o ml)</label>
                  <input
                    type="number"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                    placeholder="Ej. 150"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Nivel de Urgencia</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="normal">Normal (Planeación Estándar)</option>
                    <option value="alta">Alta (Inicio en 1-2 semanas)</option>
                    <option value="urgente">Urgente (Atención Inmediata)</option>
                  </select>
                </div>
              </div>

              {/* Estimated Price Indicator Box */}
              <div className="p-4 bg-[#121212] rounded-2xl border border-[#FF6B00]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#FF6B00]" />
                  <div>
                    <span className="text-[11px] text-gray-400 block font-mono">ESTIMADO PRELIMINAR APROX. (COP):</span>
                    <span className="text-xs text-gray-300">Sujeto a verificación de planos</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm sm:text-base font-extrabold font-heading text-[#FF6B00]">
                    ${estimate.minStr} - ${estimate.maxStr}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Su Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1">Teléfono o WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+57 310 000 0000"
                    className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Ciudad o Municipio de la Obra</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Ej. Bogotá / Medellín / Cali"
                  className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-sm font-extrabold rounded-xl shadow-xl shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Generar Cotización Formal</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
