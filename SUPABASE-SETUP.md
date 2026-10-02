# Code With Coffee — Supabase integration

## 1. Run the SQL
In Supabase → SQL Editor, run `supabase-setup.sql`.
It adds the fields needed by the existing frontend, creates customer profiles,
seeds the existing 16 menu items/categories, creates Tables 1–20, and links orders to authenticated customers.

## 2. Add your Supabase Publishable key
Open:
`assets/js/supabase-config.js`

Replace:
`YOUR_SUPABASE_PUBLISHABLE_KEY`

with the project's **Publishable/anon key** from Supabase → Project Settings → API.

Do NOT use the `service_role`/secret key in the browser.

## 3. Authentication
The existing Login and Sign Up pages now use Supabase Auth.
If email confirmation is enabled, a new user is sent to Login after signing up.

## 4. Ordering
The payment page now creates an order in:
- `orders`
- `order_items`

The existing cart remains local to the browser until checkout.

## 5. QR tables
Table URLs such as:
`menu.html?table=5`
store Table 5 locally and attach it to the order.

## 6. Important
The current database policies from the first schema are intentionally permissive for development.
Before a public/production launch, we should tighten order visibility and add a proper staff/admin role system.
