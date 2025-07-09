import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jvmbfqapdukoeppvprfw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bWJmcWFwZHVrb2VwcHZwcmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzYzNTEsImV4cCI6MjA2NzQ1MjM1MX0.q-VKIlOZjJiQ-YNk1IQUBBdfzD29LBTwBLnjWFCrWHk";
export const supabase = createClient(supabaseUrl, supabaseKey);
