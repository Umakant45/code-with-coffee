
/* ============================================================
   Code with Coffee — Main JS
   Frontend-only.
   Designed for easy backend integration later.
   ============================================================ */


/* ============================================================
   THEME
   ============================================================ */

(function initTheme() {

  const saved =
    localStorage.getItem('cwc-theme');

  const prefersDark =
    window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

  const theme =
    saved ||
    (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute(
    'data-theme',
    theme
  );

})();


function toggleTheme() {

  const cur =
    document.documentElement.getAttribute(
      'data-theme'
    );

  const next =
    cur === 'dark'
      ? 'light'
      : 'dark';

  document.documentElement.setAttribute(
    'data-theme',
    next
  );

  localStorage.setItem(
    'cwc-theme',
    next
  );

  updateThemeIcon();

}


function updateThemeIcon() {

  document
    .querySelectorAll('[data-theme-icon]')
    .forEach(el => {

      el.textContent =
        document.documentElement.getAttribute(
          'data-theme'
        ) === 'dark'
          ? '☀️'
          : '🌙';

    });

}


/* ============================================================
   PAGE LOADER
   ============================================================ */

window.addEventListener(
  'load',
  () => {

    setTimeout(
      () => {

        document
          .getElementById('pageLoader')
          ?.classList.add('hidden');

      },
      350
    );

  }
);


/* ============================================================
   TOASTS
   ============================================================ */

function toast(msg, type = '') {

  let host =
    document.querySelector('.toast-host');

  if (!host) {

    host =
      document.createElement('div');

    host.className =
      'toast-host';

    document.body.appendChild(host);

  }

  const t =
    document.createElement('div');

  t.className =
    `toast ${type}`;

  t.textContent =
    msg;

  host.appendChild(t);

  setTimeout(
    () => {

      t.style.opacity =
        '0';

      t.style.transform =
        'translateX(20px)';

    },
    2600
  );

  setTimeout(
    () => t.remove(),
    3100
  );

}


/* ============================================================
   MOCK DATA
   ============================================================ */

const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;


let MENU = [
  {
    id: "m1", name: "Classic Espresso", cat: "Coffee", price: 180, rating: 4.8, icon: "☕", tag: "Bestseller", img: IMG("photo-1510707577719-ae7c14805e3a"), desc: "A rich double shot pulled to perfection — bold, full-bodied, with notes of dark chocolate."
  },
  {
    id: "m2", name: "Caramel Macchiato", cat: "Coffee", price: 240, rating: 4.7, icon: "🥤", tag: "New", img: IMG("photo-1485808191679-5f86510681a2"), desc: "Espresso layered with steamed milk, vanilla, and a caramel drizzle finish."
  },
  {
    id: "m3", name: "Cold Brew", cat: "Coffee", price: 220, rating: 4.6, icon: "🧊", tag: null, img: IMG("photo-1517959105821-eaf2591984ca"), desc: "24-hour slow-steeped cold brew — smooth, low-acid, naturally sweet."
  },
  {
    id: "m4", name: "Cappuccino", cat: "Coffee", price: 200, rating: 4.9, icon: "☕", tag: "Popular", img: IMG("photo-1534778101976-62847782c213"), desc: "Equal parts espresso, steamed milk, and velvety microfoam."
  },
  {
    id: "m5", name: "Matcha Latte", cat: "Tea", price: 260, rating: 4.5, icon: "🍵", tag: null, img: IMG("photo-1536256263959-770b48d82b0a"), desc: "Ceremonial-grade Japanese matcha whisked with creamy oat milk."
  },
  {
    id: "m6", name: "Earl Grey", cat: "Tea", price: 150, rating: 4.4, icon: "🫖", tag: null, img: IMG("photo-1597481499750-3e6b22637e12"), desc: "Classic black tea infused with the citrus aroma of bergamot."
  },
  {
    id: "m7", name: "Chai Latte", cat: "Tea", price: 180, rating: 4.7, icon: "🍂", tag: "Bestseller", img: IMG("photo-1571934811356-5cc061b6821f"), desc: "Spiced black tea with cinnamon, cardamom, ginger, and steamed milk."
  },
  {
    id: "m8", name: "Avocado Toast", cat: "Breakfast", price: 320, rating: 4.6, icon: "🥑", tag: null, img: IMG("photo-1588137378633-dea1336ce1e2"), desc: "Sourdough topped with smashed avocado, chili flakes, and a poached egg."
  },
  {
    id: "m9", name: "Pancake Stack", cat: "Breakfast", price: 290, rating: 4.8, icon: "🥞", tag: "Popular", img: IMG("photo-1528207776546-365bb710ee93"), desc: "Fluffy buttermilk pancakes with maple syrup and fresh berries."
  },
  {
    id: "m10", name: "Croissant", cat: "Snacks", price: 120, rating: 4.5, icon: "🥐", tag: null, img: IMG("photo-1555507036-ab1f4038808a"), desc: "Buttery, flaky, hand-laminated French-style croissant baked fresh daily."
  },
  {
    id: "m11", name: "Club Sandwich", cat: "Snacks", price: 280, rating: 4.6, icon: "🥪", tag: null, img: IMG("photo-1567234669003-dce7a7a88821"), desc: "Triple-decker with grilled chicken, bacon, lettuce, tomato, and aioli."
  },
  {
    id: "m12", name: "Tiramisu", cat: "Desserts", price: 260, rating: 4.9, icon: "🍰", tag: "Bestseller", img: IMG("photo-1571877227200-a0d98ea607e9"), desc: "Layers of espresso-soaked ladyfingers, mascarpone, and cocoa."
  },
  {
    id: "m13", name: "Chocolate Brownie", cat: "Desserts", price: 180, rating: 4.7, icon: "🍫", tag: null, img: IMG("photo-1606313564200-e75d5e30476c"), desc: "Fudgy dark-chocolate brownie with a crackly crust, served warm."
  },
  {
    id: "m14", name: "Cheesecake", cat: "Desserts", price: 240, rating: 4.6, icon: "🍮", tag: null, img: IMG("photo-1533134242443-d4fd215305ad"), desc: "New York-style baked cheesecake on a buttery graham crust."
  },
  {
    id: "m15", name: "Mocha Frappe", cat: "Coffee", price: 250, rating: 4.5, icon: "🥛", tag: null, img: IMG("photo-1461023058943-07fcbe16d735"), desc: "Blended iced espresso with chocolate and whipped cream."
  },
  {
    id: "m16", name: "Blueberry Muffin", cat: "Snacks", price: 130, rating: 4.4, icon: "🧁", tag: null, img: IMG("photo-1607958996333-41aef7caefaa"), desc: "Soft muffin loaded with wild blueberries and a sugar-crusted top."
  }
];


/* ============================================================
   SUPABASE DATA LAYER
   ============================================================ */

const CWC_DB = window.CWC_SUPABASE || null;

function saveLocalUser(user) {
  if (!user) {
    localStorage.removeItem('cwc-user');
    return;
  }
  const metadata = user.user_metadata || {};
  localStorage.setItem('cwc-user', JSON.stringify({
    id: user.id,
    email: user.email || '',
    name: metadata.full_name || metadata.name || (user.email || '').split('@')[0],
    mobile: metadata.mobile || ''
  }));
}

function mapMenuRow(row) {
  return {
    id: row.item_code || String(row.id),
    dbId: row.id,
    name: row.name,
    cat: row.categories?.name || 'Other',
    price: Number(row.price),
    rating: Number(row.rating || 0),
    icon: row.icon || '☕',
    tag: row.tag || null,
    img: row.image_url || '',
    desc: row.description || ''
  };
}

const ORDER_STATUS_TO_DB = {
  New: 'pending',
  Accepted: 'confirmed',
  Preparing: 'preparing',
  Ready: 'ready',
  Served: 'served',
  Cancelled: 'cancelled'
};

const ORDER_STATUS_FROM_DB = {
  pending: 'New',
  confirmed: 'Accepted',
  preparing: 'Preparing',
  ready: 'Ready',
  served: 'Served',
  cancelled: 'Cancelled'
};

const API = {

  /* ---------- Dine-in Table ---------- */

  getTable() {
    const table = new URLSearchParams(location.search).get('table');
    if (table && /^\d{1,3}$/.test(table)) {
      localStorage.setItem('cwc-table', table);
    }
    return localStorage.getItem('cwc-table');
  },

  clearTable() {
    localStorage.removeItem('cwc-table');
  },

  /* ---------- Menu ---------- */

  getMenu() {
    return MENU;
  },

  async refreshMenu() {
    if (!CWC_DB) return MENU;
    const { data, error } = await CWC_DB
      .from('menu_items')
      .select('id,item_code,name,description,price,image_url,is_veg,is_available,is_featured,rating,icon,tag,categories(name)')
      .eq('is_available', true)
      .order('id');

    if (error) {
      console.warn('Supabase menu load failed:', error.message);
      return MENU;
    }

    if (data?.length) {
      MENU.splice(0, MENU.length, ...data.map(mapMenuRow));
      window.dispatchEvent(new Event('menu-change'));
    }
    return MENU;
  },

  getItem(id) {
    return MENU.find(item => String(item.id) === String(id));
  },

  getRelated(id, n = 4) {
    const item = this.getItem(id);
    return MENU.filter(i => i.cat === item?.cat && i.id !== id).slice(0, n);
  },

  /* ---------- Cart ---------- */

  getCart() {
    try {
      const cart = JSON.parse(localStorage.getItem('cwc-cart') || '[]');
      let changed = false;
      cart.forEach(item => {
        if (!item.cartItemId) {
          item.cartItemId = Date.now().toString() + Math.random().toString(36).substring(2, 8);
          changed = true;
        }
      });
      if (changed) localStorage.setItem('cwc-cart', JSON.stringify(cart));
      return cart;
    } catch {
      return [];
    }
  },

  setCart(cart) {
    localStorage.setItem('cwc-cart', JSON.stringify(cart));
    this._fireCart();
  },

  addToCart(id, qty = 1, customization = null) {
    const cart = this.getCart();

    if (customization) {
      cart.push({
        cartItemId: Date.now().toString() + Math.random().toString(36).substring(2, 8),
        id, qty, customization
      });
    } else {
      const existing = cart.find(item => item.id === id && !item.customization);
      if (existing) existing.qty += qty;
      else cart.push({
        cartItemId: Date.now().toString() + Math.random().toString(36).substring(2, 8),
        id, qty
      });
    }

    this.setCart(cart);
  },

  updateQty(cartItemId, qty) {
    const cart = this.getCart();
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) item.qty = Math.max(1, Number(qty));
    this.setCart(cart);
  },

  removeFromCart(cartItemId) {
    this.setCart(this.getCart().filter(item => item.cartItemId !== cartItemId));
  },

  clearCart() {
    this.setCart([]);
  },

  cartCount() {
    return this.getCart().reduce((total, item) => total + Number(item.qty), 0);
  },

  cartItems() {
    return this.getCart().map(cartItem => {
      const product = this.getItem(cartItem.id);
      if (!product) return null;
      return {
        ...product,
        qty: Number(cartItem.qty),
        cartItemId: cartItem.cartItemId,
        customization: cartItem.customization || null
      };
    }).filter(Boolean);
  },

  cartSubtotal() {
    return this.cartItems().reduce((total, item) => {
      const price = item.customization?.customPrice ?? item.price;
      return total + Number(price) * Number(item.qty);
    }, 0);
  },

  _fireCart() {
    window.dispatchEvent(new Event('cart-change'));
  },

  /* ---------- Wishlist ---------- */

  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem('cwc-wish') || '[]');
    } catch {
      return [];
    }
  },

  toggleWish(id) {
    const wishlist = this.getWishlist();
    const index = wishlist.indexOf(id);
    if (index >= 0) wishlist.splice(index, 1);
    else wishlist.push(id);
    localStorage.setItem('cwc-wish', JSON.stringify(wishlist));
    return wishlist.includes(id);
  },

  /* ---------- Authentication ---------- */

  async login(email, password) {
    if (!CWC_DB) throw new Error('Supabase is not configured yet.');

    const { data, error } = await CWC_DB.auth.signInWithPassword({ email, password });
    if (error) throw error;

    saveLocalUser(data.user);
    return data.user;
  },

  async signup(data) {
    if (!CWC_DB) throw new Error('Supabase is not configured yet.');

    const { data: result, error } = await CWC_DB.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.name,
          mobile: data.mobile
        }
      }
    });

    if (error) throw error;

    if (result.user) saveLocalUser(result.user);
    return {
      user: result.user,
      session: result.session,
      needsConfirmation: !!result.user && !result.session
    };
  },

  logout() {
    if (CWC_DB) CWC_DB.auth.signOut().catch(() => {});
    localStorage.removeItem('cwc-user');
  },

  currentUser() {
    try {
      return JSON.parse(localStorage.getItem('cwc-user') || 'null');
    } catch {
      return null;
    }
  },

  async refreshAuth() {
    if (!CWC_DB) return this.currentUser();
    const { data } = await CWC_DB.auth.getSession();
    saveLocalUser(data.session?.user || null);
    return this.currentUser();
  },

  /* ---------- Orders ---------- */

  async placeOrder(payload) {
    const orderNumber = 'CWC-' + Date.now().toString().slice(-8);
    const customer = payload.customer || {};
    const tableNumber = payload.table || this.getTable();

    let tableId = null;
    if (CWC_DB && tableNumber) {
      const { data: table } = await CWC_DB
        .from('cafe_tables')
        .select('id')
        .eq('table_number', String(tableNumber))
        .maybeSingle();
      tableId = table?.id || null;
    }

    const paymentMethod =
      payload.method === 'counter' ? 'counter' :
      payload.method === 'card' ? 'card' :
      payload.method || null;

    const localOrder = {
      id: orderNumber,
      order_number: orderNumber,
      date: new Date().toISOString(),
      items: payload.items || [],
      customer,
      table: tableNumber,
      method: payload.method,
      total: Number(payload.total || 0),
      subtotal: Number(payload.subtotal || 0),
      tax: Number(payload.tax || 0),
      status: 'New'
    };

    if (!CWC_DB) {
      this._saveLocalOrder(localOrder);
      return localOrder;
    }

    const user = this.currentUser();

    const { data: inserted, error } = await CWC_DB
      .from('orders')
      .insert({
        order_number: orderNumber,
        table_id: tableId,
        customer_name: customer.name || null,
        customer_phone: customer.mobile || null,
        subtotal: localOrder.subtotal,
        tax: localOrder.tax,
        discount: Number(payload.discount || 0),
        total_amount: localOrder.total,
        order_status: 'pending',
        payment_status: 'pending',
        payment_method: paymentMethod,
        notes: [tableNumber ? `Table ${tableNumber}` : '', customer.notes || ''].filter(Boolean).join(' | ') || null,
        ...(user?.id ? { customer_id: user.id } : {})
      })
      .select()
      .single();

    if (error) throw error;

    const orderItems = (payload.items || []).map(item => ({
      order_id: inserted.id,
      menu_item_id: item.dbId || null,
      item_name: item.name,
      item_price: Number(item.customization?.customPrice ?? item.price),
      quantity: Number(item.qty),
      special_instructions: item.customization?.specialInstructions || null
    }));

    if (orderItems.length) {
      const { error: itemsError } = await CWC_DB.from('order_items').insert(orderItems);
      if (itemsError) throw itemsError;
    }

    localOrder.dbId = inserted.id;
    this._saveLocalOrder(localOrder);
    return localOrder;
  },

  _saveLocalOrder(order) {
    localStorage.setItem('cwc-last-order', JSON.stringify(order));
    const history = JSON.parse(localStorage.getItem('cwc-orders') || '[]');
    history.unshift(order);
    localStorage.setItem('cwc-orders', JSON.stringify(history));
  },

  getLastOrder() {
    try {
      return JSON.parse(localStorage.getItem('cwc-last-order') || 'null');
    } catch {
      return null;
    }
  },

  getOrders() {
    try {
      return JSON.parse(localStorage.getItem('cwc-orders') || '[]');
    } catch {
      return [];
    }
  },

  async refreshOrders() {
    if (!CWC_DB) return this.getOrders();

    const { data: orders, error } = await CWC_DB
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase orders load failed:', error.message);
      return this.getOrders();
    }

    const ids = (orders || []).map(o => o.id);
    let items = [];
    if (ids.length) {
      const { data } = await CWC_DB
        .from('order_items')
        .select('*')
        .in('order_id', ids);
      items = data || [];
    }

    const mapped = (orders || []).map(o => ({
      id: o.order_number,
      dbId: o.id,
      date: o.created_at,
      table: (o.notes || '').match(/Table\s+(\d+)/i)?.[1] || '—',
      total: Number(o.total_amount || 0),
      subtotal: Number(o.subtotal || 0),
      tax: Number(o.tax || 0),
      method: o.payment_method,
      status: ORDER_STATUS_FROM_DB[o.order_status] || o.order_status,
      customer: {
        name: o.customer_name || '',
        mobile: o.customer_phone || ''
      },
      items: items.filter(i => i.order_id === o.id).map(i => ({
        name: i.item_name,
        price: Number(i.item_price),
        qty: Number(i.quantity),
        customization: i.special_instructions ? { specialInstructions: i.special_instructions } : null
      }))
    }));

    localStorage.setItem('cwc-orders', JSON.stringify(mapped));
    if (mapped[0]) localStorage.setItem('cwc-last-order', JSON.stringify(mapped[0]));
    window.dispatchEvent(new Event('orders-change'));
    return mapped;
  },

  async updateOrderStatus(id, status) {
    const orders = this.getOrders();
    const latest = orders.find(order => order.id === id);

    if (CWC_DB && latest?.dbId) {
      const dbStatus = ORDER_STATUS_TO_DB[status] || status;
      const { error } = await CWC_DB
        .from('orders')
        .update({ order_status: dbStatus, updated_at: new Date().toISOString() })
        .eq('id', latest.dbId);
      if (error) throw error;
    }

    const updated = orders.map(order =>
      order.id === id
        ? { ...order, status, updatedAt: new Date().toISOString() }
        : order
    );

    localStorage.setItem('cwc-orders', JSON.stringify(updated));
    const item = updated.find(order => order.id === id);
    if (item) localStorage.setItem('cwc-last-order', JSON.stringify(item));
    return item;
  },

  /* ---------- Reviews (still local for this first integration) ---------- */

  getReviews() {
    try {
      return JSON.parse(localStorage.getItem('cwc-reviews') || '[]');
    } catch {
      return [];
    }
  },

  addReview(review) {
    const reviews = this.getReviews();
    reviews.unshift({ id: Date.now(), date: new Date().toISOString(), ...review });
    localStorage.setItem('cwc-reviews', JSON.stringify(reviews));
  }
};

window.API = API;

if (CWC_DB) {
  CWC_DB.auth.getSession().then(({ data }) => saveLocalUser(data.session?.user || null));
  CWC_DB.auth.onAuthStateChange((_event, session) => saveLocalUser(session?.user || null));
}


/* ============================================================
   NAVBAR
   ============================================================ */

function initNav() {

  const nav =
    document.querySelector('.nav');

  if (!nav) {

    return;

  }

  const onScroll =
    () =>
      nav.classList.toggle(
        'scrolled',
        window.scrollY > 12
      );

  onScroll();

  window.addEventListener(
    'scroll',
    onScroll,
    {
      passive: true
    }
  );

  const burger =
    nav.querySelector('.hamburger');

  const links =
    nav.querySelector('.nav-links');

  burger?.addEventListener(

    'click',

    () =>
      links?.classList.toggle(
        'open'
      )

  );

  links
    ?.querySelectorAll('a')
    .forEach(

      a =>

        a.addEventListener(

          'click',

          () =>
            links.classList.remove(
              'open'
            )

        )

    );


  /* ---------- Active Link ---------- */

  const here =
    location.pathname
      .split('/')
      .pop() ||
    'index.html';

  links
    ?.querySelectorAll('a')
    .forEach(

      a => {

        const href =
          a.getAttribute('href');

        if (
          href === here
        ) {

          a.classList.add(
            'active'
          );

        }

      }

    );


  updateCartBadge();

  window.addEventListener(
    'cart-change',
    updateCartBadge
  );

  updateThemeIcon();


  const table =
    API.getTable();

  const marker =
    document.querySelector(
      '[data-table-marker]'
    );

  if (
    marker &&
    table
  ) {

    marker.textContent =
      `Table ${table}`;

    marker.style.display =
      'inline-flex';

  }

}


/* ============================================================
   CART BADGE
   ============================================================ */

function updateCartBadge() {

  const count =
    API.cartCount();

  document
    .querySelectorAll('[data-cart-count]')
    .forEach(

      el => {

        el.textContent =
          count;

        el.style.display =
          count > 0
            ? 'grid'
            : 'none';

      }

    );

}


/* ============================================================
   CART ROW BUTTONS
   ============================================================ */

function bindCartRowActions(row) {

  if (!row) {

    return;

  }

  const cartItemId =
    row.dataset.cartItemId;

  if (!cartItemId) {

    console.error(
      'Missing data-cart-item-id on cart row'
    );

    return;

  }


  /* ---------- Increase Quantity ---------- */

  const incButton =
    row.querySelector(
      '[data-act="inc"]'
    );

  incButton?.addEventListener(

    'click',

    () => {

      const currentItem =
        API
          .cartItems()
          .find(
            item =>
              item.cartItemId ===
              cartItemId
          );

      if (!currentItem) {

        return;

      }

      const currentQty =
        Number(
          currentItem.qty
        );

      API.updateQty(

        cartItemId,

        currentQty + 1

      );

      renderCart();

    }

  );


  /* ---------- Decrease Quantity ---------- */

  const decButton =
    row.querySelector(
      '[data-act="dec"]'
    );

  decButton?.addEventListener(

    'click',

    () => {

      const currentItem =
        API
          .cartItems()
          .find(
            item =>
              item.cartItemId ===
              cartItemId
          );

      if (!currentItem) {

        return;

      }

      const currentQty =
        Number(
          currentItem.qty
        );

      API.updateQty(

        cartItemId,

        Math.max(
          1,
          currentQty - 1
        )

      );

      renderCart();

    }

  );


  /* ---------- Remove Item ---------- */

  const removeButton =
    row.querySelector(
      '[data-act="rm"]'
    );

  removeButton?.addEventListener(

    'click',

    () => {

      API.removeFromCart(
        cartItemId
      );

      toast(
        'Removed from cart'
      );

      renderCart();

    }

  );

}


/* ============================================================
   BACK TO TOP
   ============================================================ */

function initToTop() {

  const btn =
    document.querySelector(
      '.to-top'
    );

  if (!btn) {

    return;

  }

  const on =
    () =>
      btn.classList.toggle(
        'show',
        window.scrollY > 400
      );

  on();

  window.addEventListener(
    'scroll',
    on,
    {
      passive: true
    }
  );

  btn.addEventListener(

    'click',

    () =>

      window.scrollTo({

        top: 0,

        behavior: 'smooth'

      })

  );

}


/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */

function initReveal() {

  const els =
    document.querySelectorAll(
      '.reveal'
    );

  if (

    !els.length ||

    !(
      'IntersectionObserver'
      in window
    )

  ) {

    els.forEach(

      element =>
        element.classList.add(
          'in'
        )

    );

    return;

  }

  const io =
    new IntersectionObserver(

      entries => {

        entries.forEach(

          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                'in'
              );

              io.unobserve(
                entry.target
              );

            }

          }

        );

      },

      {
        threshold:
          0.12
      }

    );

  els.forEach(

    element =>
      io.observe(
        element
      )

  );

}


/* ============================================================
   RENDER HELPERS
   ============================================================ */

function priceTag(n) {

  return (
    '₹' +
    n.toLocaleString(
      'en-IN'
    )
  );

}


function starRating(r) {

  const full =
    Math.floor(r);

  const half =
    r - full >= 0.5;

  return (

    '★'.repeat(full) +

    (
      half
        ? '½'
        : ''
    ) +

    `  ${r.toFixed(1)}`

  );

}


/* ============================================================
   PRODUCT CARD
   ============================================================ */

function productCard(

  item,

  {
    showWishlist = true
  } = {}

) {

  const wishActive =
    API
      .getWishlist()
      .includes(item.id);

  const media =

    item.img

      ?

      `<img
        src="${item.img}"
        alt="${item.name}"
        loading="lazy"
      />`

      :

      `<span class="card-emoji">
        ${item.icon}
      </span>`;


  return `

    <article
      class="card reveal"
      data-id="${item.id}"
    >

      <a
        class="card-media"
        href="product.html?id=${item.id}"
        aria-label="${item.name}"
      >

        ${media}

        ${
          item.tag
            ?
            `<span class="tag">
              ${item.tag}
            </span>`
            :
            ''
        }

        ${
          showWishlist
            ?
            `<button
              class="wishlist-btn ${
                wishActive
                  ? 'active'
                  : ''
              }"
              aria-label="Wishlist"
              data-wish="${item.id}"
            >
              ♥
            </button>`
            :
            ''
        }

      </a>


      <div class="card-body">

        <p class="card-cat">
          ${item.cat}
        </p>


        <h3 class="card-title">

          <a
            href="product.html?id=${item.id}"
          >

            ${item.name}

          </a>

        </h3>


        <div class="card-row">

          <span class="price">

            ${priceTag(item.price)}

          </span>


          <span class="rating">

            ★ ${item.rating}

          </span>

        </div>


        <button

          class="
            btn
            btn-primary
            btn-block
          "

          style="
            margin-top:1rem
          "

          data-add="${item.id}"

        >

          Add to Cart

        </button>

      </div>

    </article>

  `;

}


/* ============================================================
   PRODUCT CARD ACTIONS
   ============================================================ */

function bindCardActions(

  root = document

) {

  root
    .querySelectorAll('.reveal')
    .forEach(

      el =>
        el.classList.add('in')

    );


  /* ---------- Add To Cart ---------- */

  root
    .querySelectorAll('[data-add]')
    .forEach(

      button => {

        button.addEventListener(

          'click',

          event => {

            event.preventDefault();

            API.addToCart(
              button.dataset.add
            );

            toast(
              'Added to your cart ☕',
              'success'
            );

          }

        );

      }

    );


  /* ---------- Wishlist ---------- */

  root
    .querySelectorAll('[data-wish]')
    .forEach(

      button => {

        button.addEventListener(

          'click',

          event => {

            event.preventDefault();

            event.stopPropagation();

            const on =
              API.toggleWish(
                button.dataset.wish
              );

            button.classList.toggle(
              'active',
              on
            );

            toast(

              on
                ? 'Saved to wishlist'
                : 'Removed from wishlist'

            );

          }

        );

      }

    );

}


/* ============================================================
   NEWSLETTER
   ============================================================ */

function initNewsletter() {

  const form =
    document.getElementById(
      'newsletterForm'
    );

  if (!form) {

    return;

  }

  form.addEventListener(

    'submit',

    event => {

      event.preventDefault();

      const email =

        form
          .querySelector(
            'input[type=email]'
          )
          .value
          .trim();

      if (

        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/

          .test(email)

      ) {

        toast(
          'Enter a valid email',
          'error'
        );

        return;

      }


      /*
        FUTURE:

        POST /api/newsletter

        {
          email
        }
      */

      form.reset();

      toast(
        'Subscribed! Watch your inbox ☕',
        'success'
      );

    }

  );

}


/* ============================================================
   BOOT
   ============================================================ */

document.addEventListener(

  'DOMContentLoaded',

  () => {

    initNav();

    initToTop();

    initReveal();

    initNewsletter();


    document
      .querySelectorAll(
        '[data-theme-toggle]'
      )
      .forEach(

        button =>

          button.addEventListener(

            'click',

            toggleTheme

          )

      );

  }

);
