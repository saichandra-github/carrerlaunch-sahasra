import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
