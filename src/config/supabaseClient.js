import { createClient } from '@supabase/supabase-js'

// 1. Supabase Dashboard > Project Settings > API par jayein
// 2. Wahan se "Project URL" aur "anon public" key copy karein
const supabaseUrl = 'https://tpsfqnijencmxpnexhpm.supabase.co' // <-- Yahan apna URL dalein
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwc2ZxbmlqZW5jbXhwbmV4aHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NTY2NTUsImV4cCI6MjA5MTEzMjY1NX0.lQ3YUg4kZMioxaaZrmMp45GpDs8j-OH1TzGdT6ZA3PE' // <-- Yahan apni Key dalein

// Client initialize karna
export const supabase = createClient(supabaseUrl, supabaseAnonKey)