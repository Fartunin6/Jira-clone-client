import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccess = (values) => {
  values.map((message) => toast.success(message));
};

export const showErrors = (values) => {
  values.map((error) => toast.error(error));
};

export const showInfo = (values) => {
  values.map((message) => toast.info(message));
};

export const showWarning = (values) => {
  values.map((message) => toast.warn(message));
};
