import { createClient } from "@supabase/supabase-js";

// แนะนำให้ใช้ import.meta.env เพื่อความปลอดภัยและความง่ายในการจัดการครับ
const supabaseUrl = "https://uekgllonmogczrylnnlj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2dsbG9ubW9nY3pyeWxubmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MTg1ODgsImV4cCI6MjA4OTI5NDU4OH0.m1_dTvFhoTH0vPnzdn7J4UDxeXpWQU0P1Qpn0fS4wv4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);