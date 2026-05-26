const catalogData = [
  {
    id: "daily-essentials",
    name: "Daily Essentials",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    theme: "linear-gradient(135deg, rgba(255,179,71,0.12), rgba(255,107,107,0.12))",
    color: "#FF6B6B",
    subcategories: [
      {
        name: "Snacks & Biscuits",
        items: [
          { name: "Oreo Original", image: "images/shop-image-1.webp", desc: "Classic chocolate sandwich cookies. A favorite for kids and adults alike." },
          { name: "Good Day Cashew", image: "images/shop-image-2.webp", desc: "Rich butter cookies generously packed with cashew nuts." },
          { name: "Bingo Mad Angles", image: "images/shop-image-3.webp", desc: "Crispy and spicy triangle chips. Perfect for movie nights." },
          { name: "Parle-G", image: "images/shop-image-1.webp", desc: "The original glucose biscuit." },
          { name: "Britannia Marie Gold", image: "images/shop-image-2.webp", desc: "Light and crispy tea-time biscuits." },
          { name: "Haldiram's Bhujia", image: "images/shop-image-3.webp", desc: "Spicy and crunchy besan snacks." },
          { name: "Maggi 2-Minute Noodles", image: "images/shop-image-1.webp", desc: "Classic masala instant noodles." }
        ]
      },
      {
        name: "Personal Care",
        items: [
          { name: "Dove Beauty Bar", image: "images/shop-image-2.webp", desc: "Moisturizing cream bar for soft, glowing skin." },
          { name: "Lux Soap", image: "images/shop-image-3.webp", desc: "Fragrant beauty soap for a refreshing bath." },
          { name: "Himalaya Face Wash", image: "images/shop-image-1.webp", desc: "Purifying neem face wash for clear skin." },
          { name: "Pears Pure & Gentle", image: "images/shop-image-2.webp", desc: "Glycerin soap for sensitive skin." },
          { name: "Clinic Plus Shampoo", image: "images/shop-image-3.webp", desc: "Strong and long hair shampoo." },
          { name: "Colgate Strong Teeth", image: "images/shop-image-1.webp", desc: "Calcium-rich everyday toothpaste." },
          { name: "Parachute Coconut Oil", image: "images/shop-image-2.webp", desc: "100% pure coconut hair oil." }
        ]
      },
      {
        name: "Home Utilities",
        items: [
          { name: "Surf Excel Detergent", image: "images/shop-image-2.webp", desc: "Powerful stain removal powder." },
          { name: "Vim Bar", image: "images/shop-image-3.webp", desc: "Tough on grease, gentle on hands." },
          { name: "Rin Detergent Bar", image: "images/shop-image-1.webp", desc: "Bright clean for clothes." },
          { name: "Harpic Power Plus", image: "images/shop-image-2.webp", desc: "Original toilet cleaner." },
          { name: "Lizol Floor Cleaner", image: "images/shop-image-3.webp", desc: "Disinfectant surface cleaner." },
          { name: "Good Knight Gold Flash", image: "images/shop-image-1.webp", desc: "Liquid mosquito repellent refill." },
          { name: "Matchboxes (Bundle)", image: "images/shop-image-2.webp", desc: "Standard safety matches." }
        ]
      }
    ]
  },
  {
    id: "stationery",
    name: "Stationery",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
    theme: "linear-gradient(135deg, rgba(67,183,255,0.12), rgba(108,92,231,0.12))",
    color: "#43B7FF",
    subcategories: [
      {
        name: "Writing Materials",
        items: [
          { name: "Cello Gripper Pen", image: "images/shop-image-3.webp", desc: "Smooth writing ballpoint pen with a comfortable grip." },
          { name: "Apsara Pencils (Pack of 10)", image: "images/shop-image-1.webp", desc: "Extra dark pencils complete with eraser and sharpener." },
          { name: "Highlighters", image: "images/shop-image-2.webp", desc: "Bright fluorescent colors for study notes." },
          { name: "Reynolds Brite", image: "images/shop-image-3.webp", desc: "Classic blue ball pen." },
          { name: "Whiteboard Markers", image: "images/shop-image-1.webp", desc: "Dry erase markers (Assorted colors)." },
          { name: "Nataraj Erasers", image: "images/shop-image-2.webp", desc: "Dust-free non-toxic erasers." }
        ]
      },
      {
        name: "Notebooks & Paper",
        items: [
          { name: "Classmate 172 Pages", image: "images/shop-image-2.webp", desc: "Premium quality ruled notebook for students." },
          { name: "Drawing Book", image: "images/shop-image-3.webp", desc: "Thick unruled pages ideal for sketching and coloring." },
          { name: "A4 Printing Paper", image: "images/shop-image-1.webp", desc: "Bright white paper for pristine printouts." },
          { name: "Spiral Notebooks", image: "images/shop-image-2.webp", desc: "A4 size spiral bound ruled books." },
          { name: "Practical Record Book", image: "images/shop-image-3.webp", desc: "Hardbound science practical records." },
          { name: "Sticky Notes", image: "images/shop-image-1.webp", desc: "Neon colored adhesive notes." }
        ]
      },
      {
        name: "Art & Craft",
        items: [
          { name: "Camlin Wax Crayons", image: "images/shop-image-2.webp", desc: "24 shades non-toxic crayons." },
          { name: "Fevicol MR", image: "images/shop-image-3.webp", desc: "White adhesive glue for paper and craft." },
          { name: "Watercolors Set", image: "images/shop-image-1.webp", desc: "12 shade watercolor cakes with brush." },
          { name: "Glitter Pens", image: "images/shop-image-2.webp", desc: "Sparkling gel pens for decoration." }
        ]
      }
    ]
  },
  {
    id: "fancy-items",
    name: "Fancy Items",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m13-2.1l-2.1-2.1M7.6 7.6L5.5 5.5"/></svg>`,
    theme: "linear-gradient(135deg, rgba(253,121,168,0.12), rgba(225,112,85,0.12))",
    color: "#FD79A8",
    subcategories: [
      {
        name: "Accessories",
        items: [
          { name: "Hair Clips Set", image: "images/store-interior-1.webp", desc: "Beautiful designer hair clips for daily wear." },
          { name: "Traditional Bangles", image: "images/store-interior-2.webp", desc: "Colorful glass and metal bangles for festivals." },
          { name: "Bindis", image: "images/store-interior.webp", desc: "Assorted stone and velvet bindis." },
          { name: "Scrunchies & Hair Bands", image: "images/store-interior-1.webp", desc: "Soft fabric hair ties in vibrant colors." },
          { name: "Fashion Earrings", image: "images/store-interior-2.webp", desc: "Trendy everyday wear earrings." },
          { name: "Safety Pins (Box)", image: "images/store-interior.webp", desc: "Rust-free safety pins in all sizes." }
        ]
      },
      {
        name: "Gifting",
        items: [
          { name: "Gift Wraps", image: "images/store-interior-2.webp", desc: "Elegant wrapping paper in various finishes." },
          { name: "Keychains", image: "images/store-interior-1.webp", desc: "Cute and premium metal keychains." },
          { name: "Birthday Cards", image: "images/store-interior-2.webp", desc: "Greeting cards for all occasions." },
          { name: "Small Perfumes", image: "images/store-interior.webp", desc: "Pocket perfumes and body sprays." }
        ]
      },
      {
        name: "Cosmetics",
        items: [
          { name: "Nail Polish", image: "images/store-interior-1.webp", desc: "Long-lasting colors in various shades." },
          { name: "Eyeliner & Kajal", image: "images/store-interior-2.webp", desc: "Waterproof daily wear kajal." },
          { name: "Ponds Dreamflower Talc", image: "images/store-interior.webp", desc: "Classic fragrant talcum powder." }
        ]
      }
    ]
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2C3 2 2 5 2 8c0 4 3 6 4 10H3v2h18v-2h-3c1-4 4-6 4-10 0-3-1-6-4-6h-2c-.5 0-1 .5-1.5 1L12 5l-2.5-2c-.5-.5-1-1-1.5-1H6Z"/></svg>`,
    theme: "linear-gradient(135deg, rgba(162,155,254,0.12), rgba(108,92,231,0.12))",
    color: "#A29BFE",
    subcategories: [
      {
        name: "Everyday Wear",
        items: [
          { name: "Cotton Sarees", image: "images/store-interior-2.webp", desc: "Comfortable, breathable sarees for daily wear." },
          { name: "Lungis", image: "images/store-interior.webp", desc: "Premium quality cotton lungis." },
          { name: "Nightgowns", image: "images/store-interior-1.webp", desc: "Soft cotton daily-wear nighties." }
        ]
      },
      {
        name: "Innerwear & Basics",
        items: [
          { name: "Cotton Towels", image: "images/store-interior-1.webp", desc: "Highly absorbent bath towels." },
          { name: "Handkerchiefs", image: "images/store-interior-2.webp", desc: "Soft cotton hankies." },
          { name: "Cotton Socks", image: "images/store-interior.webp", desc: "Breathable everyday socks." },
          { name: "Vests & Briefs", image: "images/store-interior-1.webp", desc: "Comfortable cotton innerwear." }
        ]
      }
    ]
  },
  {
    id: "services",
    name: "Services",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`,
    theme: "linear-gradient(135deg, rgba(0,184,148,0.12), rgba(0,206,201,0.12))",
    color: "#00B894",
    subcategories: [
      {
        name: "Print & Copy",
        items: [
          { name: "B&W Photocopy", image: "images/store-interior-1.webp", desc: "Clear and crisp document copying." },
          { name: "Colour Printout", image: "images/store-interior-2.webp", desc: "High quality color prints." },
          { name: "Spiral Binding", image: "images/store-interior.webp", desc: "Professional project binding." },
          { name: "Lamination", image: "images/store-interior-1.webp", desc: "Protective plastic lamination for documents." }
        ]
      },
      {
        name: "Online Help",
        items: [
          { name: "Form Filling", image: "images/store-interior-2.webp", desc: "Assistance with government and school forms." },
          { name: "Bill Payments", image: "images/store-interior-1.webp", desc: "Quick utility bill payments." },
          { name: "PAN Card Application", image: "images/store-interior.webp", desc: "Help with new PAN cards or corrections." }
        ]
      }
    ]
  },
  {
    id: "snacks-beverages",
    name: "Snacks & Beverages",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    theme: "linear-gradient(135deg, rgba(255,159,67,0.12), rgba(255,71,87,0.12))",
    color: "#FF9F43",
    subcategories: [
      {
        name: "Chips & Snacks",
        items: [
          { name: "Bingo Mad Angles", image: "images/shop-image-3.webp", desc: "Crispy, spicy triangle chips for the perfect crunch." },
          { name: "Lays Classic Salted", image: "images/shop-image-2.webp", desc: "The original timeless potato chips." },
          { name: "Kurkure Masala Munch", image: "images/shop-image-1.webp", desc: "Crunchy and spicy corn puff snacks." },
          { name: "Doritos Nacho Cheese", image: "images/shop-image-2.webp", desc: "Bold cheese flavored tortilla chips." }
        ]
      },
      {
        name: "Chocolates & Candies",
        items: [
          { name: "Dairy Milk Silk", image: "images/shop-image-1.webp", desc: "Premium smooth milk chocolate." },
          { name: "5 Star", image: "images/shop-image-3.webp", desc: "Chewy caramel and chocolate bar." },
          { name: "KitKat", image: "images/shop-image-2.webp", desc: "Crispy wafer fingers covered in chocolate." },
          { name: "Pulse Candy", image: "images/shop-image-1.webp", desc: "Tangy mango candy with a spicy center." },
          { name: "Kinder Joy", image: "images/shop-image-3.webp", desc: "Milk and cocoa cream with a surprise toy." }
        ]
      },
      {
        name: "Beverages",
        items: [
          { name: "Sprite (750ml)", image: "images/store-interior-1.webp", desc: "Clear, crisp, refreshing lemon-lime soda." },
          { name: "Frooti", image: "images/store-interior-2.webp", desc: "Fresh and juicy mango drink." },
          { name: "Thums Up", image: "images/store-interior.webp", desc: "Strong and fizzy cola." },
          { name: "Real Fruit Juice", image: "images/store-interior-1.webp", desc: "100% real mixed fruit juice." },
          { name: "Paper Boat", image: "images/store-interior-2.webp", desc: "Traditional Indian flavored drinks." }
        ]
      }
    ]
  },
  {
    id: "toys-kids",
    name: "Toys & Kids Items",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-2-9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-2 4c-1.38 0-2.5-.84-2.5-1.88h5c0 1.04-1.12 1.88-2.5 1.88z"/></svg>`,
    theme: "linear-gradient(135deg, rgba(243,104,224,0.12), rgba(155,89,182,0.12))",
    color: "#F368E0",
    subcategories: [
      {
        name: "Toy Vehicles",
        items: [
          { name: "Hot Wheels Pack", image: "images/store-interior-1.webp", desc: "Die-cast metal toy cars." },
          { name: "Pull-back Cars", image: "images/store-interior-2.webp", desc: "Fun friction-powered mini cars." },
          { name: "Remote Control Car", image: "images/store-interior.webp", desc: "Battery operated RC cars for kids." },
          { name: "Toy Trains", image: "images/store-interior-1.webp", desc: "Classic winding toy trains." }
        ]
      },
      {
        name: "Play Sets & Games",
        items: [
          { name: "Barbie Doll", image: "images/shop-image-1.webp", desc: "Classic fashion doll with accessories." },
          { name: "Building Blocks", image: "images/shop-image-2.webp", desc: "Creative interlocking plastic bricks." },
          { name: "Kitchen Set", image: "images/shop-image-3.webp", desc: "Miniature cooking set for pretend play." },
          { name: "Ludo & Snakes and Ladders", image: "images/shop-image-1.webp", desc: "Classic board game." },
          { name: "Playing Cards", image: "images/shop-image-2.webp", desc: "Standard deck of playing cards." }
        ]
      }
    ]
  },
  {
    id: "household-plastic",
    name: "Household & Plastic Items",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 7h16M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>`,
    theme: "linear-gradient(135deg, rgba(29,209,161,0.12), rgba(10,189,227,0.12))",
    color: "#1DD1A1",
    subcategories: [
      {
        name: "Containers & Storage",
        items: [
          { name: "Airtight Plastic Containers", image: "images/store-interior-2.webp", desc: "Durable food-grade storage boxes." },
          { name: "Water Bottles (1L)", image: "images/shop-image-3.webp", desc: "BPA-free daily use water bottles." },
          { name: "Spice Boxes", image: "images/store-interior-1.webp", desc: "Multi-compartment boxes for kitchen spices." }
        ]
      },
      {
        name: "Utility & Cleaning",
        items: [
          { name: "Plastic Buckets", image: "images/store-interior-1.webp", desc: "Strong and flexible bathroom buckets." },
          { name: "Plastic Mugs", image: "images/store-interior-2.webp", desc: "Matching bathroom mugs." },
          { name: "Dustpans & Brooms", image: "images/store-interior.webp", desc: "Essential cleaning tools." },
          { name: "Plastic Stools", image: "images/store-interior-1.webp", desc: "Small sturdy stools for bathroom use." },
          { name: "Cloth Hangers", image: "images/store-interior-2.webp", desc: "Durable plastic hangers." }
        ]
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('catalog-sidebar');
  const content = document.getElementById('catalog-content');
  const previewImage = document.getElementById('preview-image');
  const previewTitle = document.getElementById('preview-title');
  const previewDesc = document.getElementById('preview-desc');
  const searchInput = document.getElementById('catalog-search');
  const searchClear = document.getElementById('search-clear');
  
  if (!sidebar || !content) return; // Only run on categories page

  // Parse URL query parameter for initial category
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCategory = urlParams.get('category');
  
  let currentCategory = catalogData[0].id;
  if (requestedCategory && catalogData.some(c => c.id === requestedCategory)) {
    currentCategory = requestedCategory;
  }

  let isMobile = window.innerWidth <= 768;
  let searchDebounceTimeout = null;

  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
  });

  // Render Sidebar
  function renderSidebar() {
    sidebar.innerHTML = '';
    catalogData.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `sidebar-item ${cat.id === currentCategory ? 'active' : ''}`;
      
      const bgTint = cat.id === currentCategory ? cat.theme : 'transparent';
      btn.style.background = bgTint;
      
      btn.innerHTML = `
        <div class="sidebar-icon" style="background: ${cat.theme}; color: ${cat.color}">
          ${cat.icon}
        </div>
        <span>${cat.name}</span>
      `;
      
      btn.addEventListener('click', () => {
        if (searchInput.value.trim() !== '') {
          searchInput.value = '';
          searchClear.style.display = 'none';
        }
        currentCategory = cat.id;
        renderSidebar();
        renderContent(cat);
        
        if (!isMobile && cat.subcategories.length > 0 && cat.subcategories[0].items.length > 0) {
          updatePreview(cat.subcategories[0].items[0]);
        }
      });
      sidebar.appendChild(btn);
    });
  }

  // Render Main Content
  function renderContent(categoryToRender) {
    content.innerHTML = '';
    
    let subcategories = categoryToRender.subcategories;

    if (subcategories.length === 0) {
      content.innerHTML = `<div class="catalog-empty-state">No products found.</div>`;
      return;
    }

    renderContentFragment(subcategories, content);
  }

  // Helper for rendering subcategory lists (used by both renderContent and Search)
  function renderContentFragment(subcategories, container) {
    subcategories.forEach((sub, subIdx) => {
      const group = document.createElement('div');
      group.className = 'subcategory-group';
      group.style.animationDelay = `${subIdx * 0.05}s`;

      group.innerHTML = `<h2 class="subcategory-title">${sub.name}</h2>`;
      
      const list = document.createElement('div');
      list.className = 'product-list';

      sub.items.forEach(item => {
        const productEl = document.createElement('div');
        productEl.className = 'product-item';
        
        productEl.innerHTML = `
          <div class="product-header">
            <span class="product-name">${item.name}</span>
            <svg class="mobile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div class="mobile-product-details">
            <p class="mobile-preview-desc">${item.desc}</p>
            <img src="${item.image}" alt="${item.name}" class="mobile-preview-img" loading="lazy">
          </div>
        `;

        productEl.addEventListener('mouseenter', () => {
          if (!isMobile) {
            updatePreview(item);
            document.querySelectorAll('.product-item').forEach(el => el.classList.remove('active'));
            productEl.classList.add('active');
          }
        });

        productEl.addEventListener('click', () => {
          if (isMobile) {
            const details = productEl.querySelector('.mobile-product-details');
            const isExpanded = details.classList.contains('expanded');
            
            // Close others
            document.querySelectorAll('.mobile-product-details').forEach(el => el.classList.remove('expanded'));
            document.querySelectorAll('.product-item').forEach(el => el.classList.remove('active'));
            
            if (!isExpanded) {
              details.classList.add('expanded');
              productEl.classList.add('active');
            }
          }
        });

        list.appendChild(productEl);
      });

      group.appendChild(list);
      container.appendChild(group);
    });
  }

  // Desktop Hover Image Update
  function updatePreview(item) {
    if (!previewImage) return;
    
    previewImage.classList.remove('loaded');
    
    // Tiny delay to allow fade-out animation
    setTimeout(() => {
      previewImage.src = item.image;
      previewImage.alt = item.name;
      previewTitle.textContent = item.name;
      previewDesc.textContent = item.desc;
      
      previewImage.onload = () => {
        previewImage.classList.add('loaded');
      };
    }, 150);
  }

  // Smart Search Feature
  function handleSearch(query) {
    if (!query) {
      renderSidebar();
      renderContent(catalogData.find(c => c.id === currentCategory));
      return;
    }

    const lowerQuery = query.toLowerCase();
    let hasResults = false;
    content.innerHTML = '';

    catalogData.forEach(cat => {
      let catMatched = cat.name.toLowerCase().includes(lowerQuery);
      let matchingSubcategories = [];

      cat.subcategories.forEach(sub => {
        let subMatched = sub.name.toLowerCase().includes(lowerQuery);
        let matchingItems = sub.items.filter(item => 
          item.name.toLowerCase().includes(lowerQuery) || 
          item.desc.toLowerCase().includes(lowerQuery)
        );

        if (catMatched || subMatched || matchingItems.length > 0) {
          matchingSubcategories.push({
            name: sub.name,
            items: (catMatched || subMatched) ? sub.items : matchingItems
          });
        }
      });

      if (matchingSubcategories.length > 0) {
        hasResults = true;
        const catHeader = document.createElement('h2');
        catHeader.style.fontFamily = "'Playfair Display', serif";
        catHeader.style.fontSize = "var(--text-3xl)";
        catHeader.style.color = "var(--gold-dark)";
        catHeader.style.marginBottom = "var(--space-md)";
        catHeader.style.marginTop = "var(--space-xl)";
        catHeader.textContent = cat.name;
        content.appendChild(catHeader);

        renderContentFragment(matchingSubcategories, content);
      }
    });

    if (!hasResults) {
      content.innerHTML = `
        <div class="catalog-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="64" height="64" style="color: var(--warm-gray-300); margin-bottom: var(--space-md);">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>No results found for "${query}"</p>
          <p style="font-size: var(--text-base); color: var(--text-secondary); margin-top: var(--space-xs); font-family: 'Poppins', sans-serif;">Try searching for something else like 'Oreo' or 'Pen'.</p>
        </div>`;
    }
  }

  // Search Input Listeners
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    searchClear.style.display = query ? 'flex' : 'none';
    
    if (query) {
      document.querySelectorAll('.sidebar-item').forEach(el => {
        el.classList.remove('active');
        el.style.background = 'transparent';
      });
    }

    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
      handleSearch(query);
    }, 150); // slight debounce for smooth typing
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    renderSidebar();
    renderContent(catalogData.find(c => c.id === currentCategory));
  });

  // Initialization
  renderSidebar();
  renderContent(catalogData.find(c => c.id === currentCategory));
  
  const activeCatData = catalogData.find(c => c.id === currentCategory);
  if (!isMobile && activeCatData.subcategories.length > 0 && activeCatData.subcategories[0].items.length > 0) {
    updatePreview(activeCatData.subcategories[0].items[0]);
    // Pre-activate the first item
    setTimeout(() => {
      const firstItem = content.querySelector('.product-item');
      if(firstItem) firstItem.classList.add('active');
    }, 100);
  }
});
