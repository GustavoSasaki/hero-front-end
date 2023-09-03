import { createClient } from '@supabase/supabase-js'
import { Database } from 'src/database.types'

const supabaseUrl = 'https://dgufziqjubvbckrlwnjj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndWZ6aXFqdWJ2YmNrcmx3bmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDQ2NzUsImV4cCI6MjAwOTA4MDY3NX0.0V3Efx13hAvqRztVlvPRkuXV722VlcDyROFA91TSVIs'
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)