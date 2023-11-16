import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://kpevqglhzvbotejyzebj.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZXZxZ2xoenZib3Rlanl6ZWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3NjI2ODcsImV4cCI6MTk4MzMzODY4N30.nFnatcRjTbMdKfECAvJizShq_RhwE0xU8Jd_jP8fvM0'

const supabase = createClient(supabaseURL, supabaseKey)

export default supabase
