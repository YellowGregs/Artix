import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

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
      glow: 'shadow-[0_0_15px_-5px_rgba(34,197,94,0.3)]'
    },
    error: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      text: 'text-red-400',
      glow: 'shadow-[0_0_15px_-5px_rgba(239,68,68,0.3)]'
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
      text: 'text-yellow-400',
      glow: 'shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]'
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
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <motion.div
            className={`flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-xl
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
            <div className={`p-2 rounded-lg ${color.bg} ${color.border}`}>
              <Icon className={`w-5 h-5 ${color.text}`} />
            </div>
            <span className={`font-medium ${color.text}`}>{message}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast;