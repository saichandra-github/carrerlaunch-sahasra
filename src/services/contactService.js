import { supabase } from '../lib/supabase';
import { PORTFOLIO_ID } from '../config/portfolio';

export const sendContactMessage = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase is not configured. Please add your credentials to the .env file and restart the server.");
    }

    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          portfolio_id: PORTFOLIO_ID,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // created_at is automatically handled by the database
        }
      ]);

    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    return { success: false, error: error.message };
  }
};
