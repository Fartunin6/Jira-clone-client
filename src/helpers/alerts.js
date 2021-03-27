import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccess = (values, onClose) => {
  values.map((message) => toast.success(message, { onClose: onClose }));
};

export const showErrors = (values, onClose) => {
  values.map((error) => toast.error(error, { onClose: onClose }));
};

export const showInfo = (values, onClose) => {
  values.map((message) => toast.info(message, { onClose: onClose }));
};

export const showWarning = (values, onClose) => {
  values.map((message) => toast.warn(message, { onClose: onClose }));
};
