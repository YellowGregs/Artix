import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'warning';

interface NotificationToastProps {
  show: boolean;
  message: string;
  type: NotificationType;
  onClose: () => void;
}

const NotificationToast = ({ show, message, type, onClose }: NotificationToastProps) => {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
  };

  const colors = {
    success: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      text: 'text-green-400',
      glow: 'shadow-[0_0_15px_-5px_rgba(34,197,94,0.3)]',
      gradient: 'bg-gradient-to-r from-green-500/20 via-green-500/10 to-transparent'
    },
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      text: 'text-red-400',
      glow: 'shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)]',
      gradient: 'bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent'
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
      text: 'text-yellow-400',
      glow: 'shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]',
      gradient: 'bg-gradient-to-r from-yellow-500/20 via-yellow-500/10 to-transparent'
    },
  };

  const Icon = icons[type];
  const color = colors[type];

  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 pointer-events-none z-50"
        >
          <motion.div
            className={`relative max-w-md w-full backdrop-blur-xl rounded-2xl overflow-hidden
              ${color.bg} ${color.border} ${color.glow}`}
            whileHover={{ scale: 1.02 }}
            initial={{ x: 0 }}
            animate={{ x: [0, -2, 2, -2, 2, 0] }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 300
            }}
          >
            <div className={`absolute inset-0 ${color.gradient} animate-pulse`} />

            <div className="relative flex items-center gap-3 p-4">
              <div className={`p-2 rounded-xl ${color.bg} ${color.border}`}>
                <Icon className={`w-5 h-5 ${color.text}`} />
              </div>
              <span className={`flex-1 font-medium ${color.text}`}>{message}</span>
              <button
                onClick={onClose}
                className={`p-1 rounded-lg hover:${color.bg} ${color.text} transition-colors duration-200 pointer-events-auto`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3, ease: "linear" }}
              className={`h-0.5 origin-left ${color.text} bg-opacity-50`}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast;
