import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Sparkles } from 'lucide-react';

interface LoaderProps {
  onFinish?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] text-white select-none"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-96 h-96 bg-[#FF6B00]/20 rounded-full blur-[120px] pointer-events-none animate-spark" />

          {/* Logo & Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 text-center"
          >
            <div className="relative inline-block">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#2E2E2E] to-[#1A1A1A] border border-[#FF6B00]/40 flex items-center justify-center shadow-2xl glow-orange mx-auto">
                <Flame className="w-10 h-10 text-[#FF6B00] animate-bounce" />
              </div>
              <Sparkles className="w-6 h-6 text-[#FF6B00] absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '4s' }} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider font-heading mt-4 text-white">
              CONSTRUCCIONES <span className="text-[#FF6B00]">JEVAS</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1 font-mono">
              ESTRUCTURAS METÁLICAS & SOLDADURA
            </p>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 bg-[#2E2E2E]/60 h-2 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B00] via-amber-500 to-[#FF6B00] rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              {/* Spark Glow Head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#FF6B00]" />
            </motion.div>
          </div>

          <div className="flex justify-between w-64 sm:w-80 mt-2 text-xs font-mono text-gray-400">
            <span>INICIALIZANDO SISTEMAS</span>
            <span className="text-[#FF6B00] font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
