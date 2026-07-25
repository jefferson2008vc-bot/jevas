import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Facebook, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactProps {
  isDarkMode?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode = true }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    servicio: 'Fabricación de estructuras metálicas',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        servicio: 'Fabricación de estructuras metálicas',
        mensaje: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ESTAMOS LISTOS PARA ATENDER SU PROYECTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Contacte con <span className="text-[#FF6B00]">Construcciones JEVAS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans">
            Solicite asesoría técnica, visibilidad de planos o agende una visita técnica a su obra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 space-y-6 border border-white/10">
              <h3 className="text-2xl font-bold font-heading text-white">Información de Contacto Directo</h3>

              <div className="space-y-4 text-sm font-sans">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B00]/15 rounded-xl text-[#FF6B00] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ubicación del Taller & Oficinas</h4>
                    <p className="text-gray-300 text-xs mt-0.5">{COMPANY_INFO.address}</p>
                    <button
                      onClick={() => setShowMapModal(!showMapModal)}
                      className="text-xs font-bold text-[#FF6B00] hover:underline mt-1 block"
                    >
                      {showMapModal ? 'Ocultar Mapa' : 'Ver Mapa Interactivo'}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B00]/15 rounded-xl text-[#FF6B00] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Teléfonos & WhatsApp</h4>
                    <p className="text-gray-300 text-xs mt-0.5">{COMPANY_INFO.phone}</p>
                    <a
                      href={COMPANY_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 hover:underline mt-1"
                    >
                      Abrir Chat de WhatsApp Inmediato
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B00]/15 rounded-xl text-[#FF6B00] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Correo Electrónico</h4>
                    <p className="text-gray-300 text-xs mt-0.5">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B00]/15 rounded-xl text-[#FF6B00] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horario de Atención</h4>
                    <p className="text-gray-300 text-xs mt-0.5">{COMPANY_INFO.schedule}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-3 font-bold">SÍGUENOS EN REDES SOCIALES:</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#2E2E2E] hover:bg-[#FF6B00] text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#2E2E2E] hover:bg-[#FF6B00] text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#2E2E2E] hover:bg-[#FF6B00] text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map Preview */}
            {showMapModal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="rounded-3xl overflow-hidden border border-[#FF6B00]/40 shadow-xl"
              >
                <iframe
                  title="Ubicación Construcciones JEVAS"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.800000000000!2d-74.08175!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnMzUuMCJOIDc0wrAwNCc1NC4zIlc!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#FF6B00]/30 shadow-2xl relative">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Formulario de Contacto & Solicitud</h3>
              <p className="text-xs text-gray-400 mb-6 font-sans">
                Diligencie los campos a continuación y un ingeniero estructurista responderá a la brevedad.
              </p>

              {submitted ? (
                <div className="p-8 bg-[#FF6B00]/20 border border-[#FF6B00] rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#FF6B00] mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold font-heading text-white">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-xs text-gray-200">
                    Gracias por comunicarse con <strong>Construcciones JEVAS</strong>. Nos pondremos en contacto al correo o teléfono indicado en un plazo máximo de 2 horas laborables.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Nombre Completo *</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Roberto Gómez"
                        className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Empresa / Razón Social</label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Ej. Constructora Capital"
                        className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+57 300 000 0000"
                        className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">Correo Electrónico *</label>
                      <input
                        type="email"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Servicio de Interés *</label>
                    <select
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#121212] text-white">
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1">Detalles del Mensaje o Proyecto *</label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Describa las dimensiones, requerimientos técnicos o ubicación de la obra..."
                      className="w-full px-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FF6B00] hover:bg-[#E05D00] text-white text-sm font-extrabold rounded-xl shadow-xl shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Cotización</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
