
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


const MENU = [

  {
    id: 'm1',
    name: 'Classic Espresso',
    cat: 'Coffee',
    price: 180,
    rating: 4.8,
    icon: '☕',
    tag: 'Bestseller',
    img: IMG('photo-1510707577719-ae7c14805e3a'),
    desc: 'A rich double shot pulled to perfection — bold, full-bodied, with notes of dark chocolate.'
  },

  {
    id: 'm2',
    name: 'Caramel Macchiato',
    cat: 'Coffee',
    price: 240,
    rating: 4.7,
    icon: '🥤',
    tag: 'New',
    img: IMG('photo-1485808191679-5f86510681a2'),
    desc: 'Espresso layered with steamed milk, vanilla, and a caramel drizzle finish.'
  },

  {
    id: 'm3',
    name: 'Cold Brew',
    cat: 'Coffee',
    price: 220,
    rating: 4.6,
    icon: '🧊',
    img: IMG('photo-1517959105821-eaf2591984ca'),
    desc: '24-hour slow-steeped cold brew — smooth, low-acid, naturally sweet.'
  },

  {
    id: 'm4',
    name: 'Cappuccino',
    cat: 'Coffee',
    price: 200,
    rating: 4.9,
    icon: '☕',
    tag: 'Popular',
    img: IMG('photo-1534778101976-62847782c213'),
    desc: 'Equal parts espresso, steamed milk, and velvety microfoam.'
  },

  {
    id: 'm5',
    name: 'Matcha Latte',
    cat: 'Tea',
    price: 260,
    rating: 4.5,
    icon: '🍵',
    img: IMG('photo-1536256263959-770b48d82b0a'),
    desc: 'Ceremonial-grade Japanese matcha whisked with creamy oat milk.'
  },

  {
    id: 'm6',
    name: 'Earl Grey',
    cat: 'Tea',
    price: 150,
    rating: 4.4,
    icon: '🫖',
    img: IMG('photo-1597481499750-3e6b22637e12'),
    desc: 'Classic black tea infused with the citrus aroma of bergamot.'
  },

  {
    id: 'm7',
    name: 'Chai Latte',
    cat: 'Tea',
    price: 180,
    rating: 4.7,
    icon: '🍂',
    tag: 'Bestseller',
    img: IMG('photo-1571934811356-5cc061b6821f'),
    desc: 'Spiced black tea with cinnamon, cardamom, ginger, and steamed milk.'
  },

  {
    id: 'm8',
    name: 'Avocado Toast',
    cat: 'Breakfast',
    price: 320,
    rating: 4.6,
    icon: '🥑',
    img: IMG('photo-1588137378633-dea1336ce1e2'),
    desc: 'Sourdough topped with smashed avocado, chili flakes, and a poached egg.'
  },

  {
    id: 'm9',
    name: 'Pancake Stack',
    cat: 'Breakfast',
    price: 290,
    rating: 4.8,
    icon: '🥞',
    tag: 'Popular',
    img: IMG('photo-1528207776546-365bb710ee93'),
    desc: 'Fluffy buttermilk pancakes with maple syrup and fresh berries.'
  },

  {
    id: 'm10',
    name: 'Croissant',
    cat: 'Snacks',
    price: 120,
    rating: 4.5,
    icon: '🥐',
    img: IMG('photo-1555507036-ab1f4038808a'),
    desc: 'Buttery, flaky, hand-laminated French-style croissant baked fresh daily.'
  },

  {
    id: 'm11',
    name: 'Club Sandwich',
    cat: 'Snacks',
    price: 280,
    rating: 4.6,
    icon: '🥪',
    img: IMG('photo-1567234669003-dce7a7a88821'),
    desc: 'Triple-decker with grilled chicken, bacon, lettuce, tomato, and aioli.'
  },

  {
    id: 'm12',
    name: 'Tiramisu',
    cat: 'Desserts',
    price: 260,
    rating: 4.9,
    icon: '🍰',
    tag: 'Bestseller',
    img: IMG('photo-1571877227200-a0d98ea607e9'),
    desc: 'Layers of espresso-soaked ladyfingers, mascarpone, and cocoa.'
  },

  {
    id: 'm13',
    name: 'Chocolate Brownie',
    cat: 'Desserts',
    price: 180,
    rating: 4.7,
    icon: '🍫',
    img: IMG('photo-1606313564200-e75d5e30476c'),
    desc: 'Fudgy dark-chocolate brownie with a crackly crust, served warm.'
  },

  {
    id: 'm14',
    name: 'Cheesecake',
    cat: 'Desserts',
    price: 240,
    rating: 4.6,
    icon: '🍮',
    img: IMG('photo-1533134242443-d4fd215305ad'),
    desc: 'New York-style baked cheesecake on a buttery graham crust.'
  },

  {
    id: 'm15',
    name: 'Mocha Frappe',
    cat: 'Coffee',
    price: 250,
    rating: 4.5,
    icon: '🥛',
    img: IMG('photo-1461023058943-07fcbe16d735'),
    desc: 'Blended iced espresso with chocolate and whipped cream.'
  },

  {
    id: 'm16',
    name: 'Blueberry Muffin',
    cat: 'Snacks',
    price: 130,
    rating: 4.4,
    icon: '🧁',
    img: IMG('photo-1607958996333-41aef7caefaa'),
    desc: 'Soft muffin loaded with wild blueberries and a sugar-crusted top.'
  }

];


/* ============================================================
   DATA LAYER
   ============================================================ */

const API = {

  /* ---------- Dine-in Table ---------- */

  getTable() {

    const table =
      new URLSearchParams(
        location.search
      ).get('table');

    if (
      table &&
      /^\d{1,3}$/.test(table)
    ) {

      localStorage.setItem(
        'cwc-table',
        table
      );

    }

    return localStorage.getItem(
      'cwc-table'
    );

  },


  clearTable() {

    localStorage.removeItem(
      'cwc-table'
    );

  },


  /* ---------- Menu ---------- */

  getMenu() {

    return MENU;

  },


  getItem(id) {

    return MENU.find(
      item => item.id === id
    );

  },


  getRelated(id, n = 4) {

    const item =
      this.getItem(id);

    return MENU
      .filter(
        i =>
          i.cat === item?.cat &&
          i.id !== id
      )
      .slice(
        0,
        n
      );

  },


  /* ============================================================
     CART
     ============================================================ */

  getCart() {

    try {

      const cart =
        JSON.parse(
          localStorage.getItem(
            'cwc-cart'
          ) || '[]'
        );

      let changed = false;

      cart.forEach(
        item => {

          if (!item.cartItemId) {

            item.cartItemId =
              Date.now().toString() +
              Math.random()
                .toString(36)
                .substring(2, 8);

            changed = true;

          }

        }
      );

      if (changed) {

        localStorage.setItem(
          'cwc-cart',
          JSON.stringify(cart)
        );

      }

      return cart;

    } catch {

      return [];

    }

  },


  setCart(cart) {

    localStorage.setItem(
      'cwc-cart',
      JSON.stringify(cart)
    );

    this._fireCart();

  },


  addToCart(
    id,
    qty = 1,
    customization = null
  ) {

    const cart =
      this.getCart();

    if (customization) {

      cart.push({

        cartItemId:
          Date.now().toString() +
          Math.random()
            .toString(36)
            .substring(2, 8),

        id,

        qty,

        customization

      });

    } else {

      const existing =
        cart.find(
          item =>
            item.id === id &&
            !item.customization
        );

      if (existing) {

        existing.qty += qty;

      } else {

        cart.push({

          cartItemId:
            Date.now().toString() +
            Math.random()
              .toString(36)
              .substring(2, 8),

          id,

          qty

        });

      }

    }

    this.setCart(cart);

  },


  updateQty(
    cartItemId,
    qty
  ) {

    const cart =
      this.getCart();

    const item =
      cart.find(
        item =>
          item.cartItemId ===
          cartItemId
      );

    if (item) {

      item.qty =
        Math.max(
          1,
          Number(qty)
        );

    }

    this.setCart(cart);

  },


  removeFromCart(
    cartItemId
  ) {

    const cart =
      this
        .getCart()
        .filter(
          item =>
            item.cartItemId !==
            cartItemId
        );

    this.setCart(cart);

  },


  clearCart() {

    this.setCart([]);

  },


  cartCount() {

    return this
      .getCart()
      .reduce(
        (
          total,
          item
        ) =>
          total +
          Number(item.qty),
        0
      );

  },


  cartItems() {

    return this
      .getCart()
      .map(
        cartItem => {

          const product =
            this.getItem(
              cartItem.id
            );

          if (!product) {

            return null;

          }

          return {

            ...product,

            qty:
              cartItem.qty,

            cartItemId:
              cartItem.cartItemId,

            customization:
              cartItem.customization ||
              null

          };

        }
      )
      .filter(Boolean);

  },


  cartSubtotal() {

    return this
      .cartItems()
      .reduce(
        (
          total,
          item
        ) => {

          const price =
            item
              .customization
              ?.customPrice ??
            item.price;

          return (
            total +
            price *
            item.qty
          );

        },
        0
      );

  },


  _fireCart() {

    window.dispatchEvent(
      new Event(
        'cart-change'
      )
    );

  },


  /* ============================================================
     WISHLIST
     ============================================================ */

  getWishlist() {

    try {

      return JSON.parse(
        localStorage.getItem(
          'cwc-wish'
        ) || '[]'
      );

    } catch {

      return [];

    }

  },


  toggleWish(id) {

    const wishlist =
      this.getWishlist();

    const index =
      wishlist.indexOf(id);

    if (index >= 0) {

      wishlist.splice(
        index,
        1
      );

    } else {

      wishlist.push(id);

    }

    localStorage.setItem(
      'cwc-wish',
      JSON.stringify(wishlist)
    );

    return wishlist.includes(id);

  },


  /* ============================================================
     AUTH
     ============================================================ */

  login(
    email,
    password
  ) {

    if (
      !email ||
      !password
    ) {

      return Promise.reject(
        new Error(
          'Missing credentials'
        )
      );

    }

    const user = {

      email,

      name:
        email.split('@')[0]

    };

    localStorage.setItem(
      'cwc-user',
      JSON.stringify(user)
    );

    return Promise.resolve(user);

  },


  signup(data) {

    localStorage.setItem(

      'cwc-user',

      JSON.stringify({

        name:
          data.name,

        email:
          data.email,

        mobile:
          data.mobile

      })

    );

    return Promise.resolve(true);

  },


  logout() {

    localStorage.removeItem(
      'cwc-user'
    );

  },


  currentUser() {

    try {

      return JSON.parse(
        localStorage.getItem(
          'cwc-user'
        ) || 'null'
      );

    } catch {

      return null;

    }

  },


  /* ============================================================
     ORDERS
     ============================================================ */

  placeOrder(payload) {

    const id =
      'CWC-' +
      Date.now()
        .toString()
        .slice(-8);

    const order = {

      ...payload,

      id,

      date:
        new Date()
          .toISOString()

    };

    localStorage.setItem(

      'cwc-last-order',

      JSON.stringify(order)

    );

    const history =
      JSON.parse(

        localStorage.getItem(
          'cwc-orders'
        ) || '[]'

      );

    history.unshift(order);

    localStorage.setItem(

      'cwc-orders',

      JSON.stringify(history)

    );

    return Promise.resolve(order);

  },


  getLastOrder() {

    try {

      return JSON.parse(

        localStorage.getItem(
          'cwc-last-order'
        ) || 'null'

      );

    } catch {

      return null;

    }

  },


  getOrders() {

    try {

      return JSON.parse(

        localStorage.getItem(
          'cwc-orders'
        ) || '[]'

      );

    } catch {

      return [];

    }

  },


  updateOrderStatus(
    id,
    status
  ) {

    const orders =
      this
        .getOrders()
        .map(
          order =>

            order.id === id

              ? {

                  ...order,

                  status,

                  updatedAt:
                    new Date()
                      .toISOString()

                }

              : order
        );

    localStorage.setItem(

      'cwc-orders',

      JSON.stringify(orders)

    );

    const latest =
      orders.find(
        order =>
          order.id === id
      );

    if (latest) {

      localStorage.setItem(

        'cwc-last-order',

        JSON.stringify(latest)

      );

    }

    return latest;

  },


  /* ---------- Reviews ---------- */

  getReviews() {

    try {

      return JSON.parse(

        localStorage.getItem(
          'cwc-reviews'
        ) || '[]'

      );

    } catch {

      return [];

    }

  },


  addReview(review) {

    const reviews =
      this.getReviews();

    reviews.unshift({

      id:
        Date.now(),

      date:
        new Date()
          .toISOString(),

      ...review

    });

    localStorage.setItem(

      'cwc-reviews',

      JSON.stringify(reviews)

    );

  }

};


window.API =
  API;


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
