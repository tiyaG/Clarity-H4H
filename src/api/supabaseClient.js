import { createClient } from '@supabase/supabase-js';

// Accessing variables from your .env file
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper to save a "Conversation" to the DB
 * @param {string} userId - The ID of the logged-in user
 * @param {string} text - The scanned text
 * @param {string} type - 'text' or 'speech'
 */
export const saveConversation = async (userId, text, type) => {
  const { data, error } = await supabase
    .from('conversations') // Make sure you create this table in Supabase!
    .insert([{ 
        user_id: userId, 
        content: text, 
        mode: type, 
        created_at: new Date() 
    }]);
    
  if (error) console.error("Error saving to Supabase:", error);
  return { data, error };
};