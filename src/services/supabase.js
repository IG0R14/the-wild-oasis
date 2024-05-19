import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oqxvkkhvufjnwgragwok.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xeHZra2h2dWZqbndncmFnd29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2ODc4NjQsImV4cCI6MjAyMTI2Mzg2NH0.Fu2Ohz2rtK2-Qp7HjgAtH5WFldhhjrzlo_GzOOTTZhw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
