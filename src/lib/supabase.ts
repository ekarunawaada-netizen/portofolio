import { createClient } from "@supabase/supabase-js";

// Client-side: for use in Client Components (with anon key, respects RLS)
export function createBrowserClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Server-side: for use in Server Actions and Route Handlers (bypasses RLS)
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

// Legacy export (backward compat for any future client-side usage)
export const supabase = {
  get: () => createBrowserClient(),
};

