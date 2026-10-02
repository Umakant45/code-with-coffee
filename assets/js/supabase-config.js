/* Code with Coffee — Supabase client
   Paste your Supabase Publishable (anon) key below.
   Never put a service_role/secret key in this file. */
window.CWC_SUPABASE_URL = 'https://sjbbbxsahbfyytiyffg.supabase.co';
window.CWC_SUPABASE_PUBLISHABLE_KEY = 'YOUR_SUPABASE_PUBLISHABLE_KEY';

if (
  window.supabase &&
  window.CWC_SUPABASE_PUBLISHABLE_KEY &&
  !window.CWC_SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')
) {
  window.CWC_SUPABASE = window.supabase.createClient(
    window.CWC_SUPABASE_URL,
    window.CWC_SUPABASE_PUBLISHABLE_KEY
  );
} else {
  window.CWC_SUPABASE = null;
  console.warn('Code With Coffee: add your Supabase Publishable key in assets/js/supabase-config.js');
}
