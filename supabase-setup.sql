-- Add compatibility columns used by the existing Code With Coffee frontend
alter table public.menu_items add column if not exists item_code text;
alter table public.menu_items add column if not exists rating numeric(2,1) default 0;
alter table public.menu_items add column if not exists icon text;
alter table public.menu_items add column if not exists tag text;
create unique index if not exists menu_items_item_code_key on public.menu_items(item_code);

-- Customer profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  mobile text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table public.profiles enable row level security;
drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile" on public.profiles for select to authenticated using (auth.uid() = id);
drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Seed categories

insert into public.categories (name, sort_order, is_active) values ('Coffee', 0, true) on conflict (name) do update set is_active = true;
insert into public.categories (name, sort_order, is_active) values ('Tea', 1, true) on conflict (name) do update set is_active = true;
insert into public.categories (name, sort_order, is_active) values ('Breakfast', 2, true) on conflict (name) do update set is_active = true;
insert into public.categories (name, sort_order, is_active) values ('Snacks', 3, true) on conflict (name) do update set is_active = true;
insert into public.categories (name, sort_order, is_active) values ('Desserts', 4, true) on conflict (name) do update set is_active = true;

-- Seed menu
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm1', c.id, 'Classic Espresso', 'A rich double shot pulled to perfection — bold, full-bodied, with notes of dark chocolate.', 180, 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80', true, true, true, 4.8, '☕', 'Bestseller'
from public.categories c
where c.name = 'Coffee'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm2', c.id, 'Caramel Macchiato', 'Espresso layered with steamed milk, vanilla, and a caramel drizzle finish.', 240, 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80', true, true, true, 4.7, '🥤', 'New'
from public.categories c
where c.name = 'Coffee'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm3', c.id, 'Cold Brew', '24-hour slow-steeped cold brew — smooth, low-acid, naturally sweet.', 220, 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=800&q=80', true, true, false, 4.6, '🧊', null
from public.categories c
where c.name = 'Coffee'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm4', c.id, 'Cappuccino', 'Equal parts espresso, steamed milk, and velvety microfoam.', 200, 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80', true, true, true, 4.9, '☕', 'Popular'
from public.categories c
where c.name = 'Coffee'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm5', c.id, 'Matcha Latte', 'Ceremonial-grade Japanese matcha whisked with creamy oat milk.', 260, 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80', true, true, false, 4.5, '🍵', null
from public.categories c
where c.name = 'Tea'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm6', c.id, 'Earl Grey', 'Classic black tea infused with the citrus aroma of bergamot.', 150, 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80', true, true, false, 4.4, '🫖', null
from public.categories c
where c.name = 'Tea'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm7', c.id, 'Chai Latte', 'Spiced black tea with cinnamon, cardamom, ginger, and steamed milk.', 180, 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80', true, true, true, 4.7, '🍂', 'Bestseller'
from public.categories c
where c.name = 'Tea'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm8', c.id, 'Avocado Toast', 'Sourdough topped with smashed avocado, chili flakes, and a poached egg.', 320, 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80', true, true, false, 4.6, '🥑', null
from public.categories c
where c.name = 'Breakfast'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm9', c.id, 'Pancake Stack', 'Fluffy buttermilk pancakes with maple syrup and fresh berries.', 290, 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80', true, true, true, 4.8, '🥞', 'Popular'
from public.categories c
where c.name = 'Breakfast'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm10', c.id, 'Croissant', 'Buttery, flaky, hand-laminated French-style croissant baked fresh daily.', 120, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', true, true, false, 4.5, '🥐', null
from public.categories c
where c.name = 'Snacks'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm11', c.id, 'Club Sandwich', 'Triple-decker with grilled chicken, bacon, lettuce, tomato, and aioli.', 280, 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80', true, true, false, 4.6, '🥪', null
from public.categories c
where c.name = 'Snacks'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm12', c.id, 'Tiramisu', 'Layers of espresso-soaked ladyfingers, mascarpone, and cocoa.', 260, 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', true, true, true, 4.9, '🍰', 'Bestseller'
from public.categories c
where c.name = 'Desserts'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm13', c.id, 'Chocolate Brownie', 'Fudgy dark-chocolate brownie with a crackly crust, served warm.', 180, 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', true, true, false, 4.7, '🍫', null
from public.categories c
where c.name = 'Desserts'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm14', c.id, 'Cheesecake', 'New York-style baked cheesecake on a buttery graham crust.', 240, 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', true, true, false, 4.6, '🍮', null
from public.categories c
where c.name = 'Desserts'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm15', c.id, 'Mocha Frappe', 'Blended iced espresso with chocolate and whipped cream.', 250, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80', true, true, false, 4.5, '🥛', null
from public.categories c
where c.name = 'Coffee'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();
insert into public.menu_items
(item_code, category_id, name, description, price, image_url, is_veg, is_available, is_featured, rating, icon, tag)
select 'm16', c.id, 'Blueberry Muffin', 'Soft muffin loaded with wild blueberries and a sugar-crusted top.', 130, 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80', true, true, false, 4.4, '🧁', null
from public.categories c
where c.name = 'Snacks'
on conflict (item_code) do update set
category_id = excluded.category_id,
name = excluded.name,
description = excluded.description,
price = excluded.price,
image_url = excluded.image_url,
is_available = excluded.is_available,
is_featured = excluded.is_featured,
rating = excluded.rating,
icon = excluded.icon,
tag = excluded.tag,
updated_at = now();

-- Link orders to authenticated customers
alter table public.orders add column if not exists customer_id uuid references auth.users(id) on delete set null;
create index if not exists idx_orders_customer_id on public.orders(customer_id);

-- Allow the payment choices already present in the frontend
alter table public.orders drop constraint if exists orders_payment_method_check;
alter table public.orders add constraint orders_payment_method_check
check (
  payment_method is null
  or payment_method in ('cash', 'upi', 'razorpay', 'card', 'counter')
);

-- Create 20 dine-in tables for QR ordering
insert into public.cafe_tables (table_number, qr_code, capacity, status)
select
  'Table ' || n,
  'table-' || n,
  4,
  'available'
from generate_series(1, 20) as n
on conflict (table_number) do nothing;

-- Automatically create a profile when a Supabase Auth user signs up
create or replace function public.handle_new_cwc_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, mobile)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'mobile'
  )
  on conflict (id) do update set
    full_name = excluded.full_name,
    mobile = excluded.mobile,
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_cwc_auth_user_created on auth.users;
create trigger on_cwc_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_cwc_user();

-- Useful profile/order indexes
create index if not exists idx_orders_customer_phone on public.orders(customer_phone);
