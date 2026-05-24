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
          { name: "Oreo Original", image: "images/shop-image-1.png", desc: "Classic chocolate sandwich cookies. A favorite for kids and adults alike." },
          { name: "Good Day Cashew", image: "images/shop-image-2.png", desc: "Rich butter cookies generously packed with cashew nuts." },
          { name: "Bingo Mad Angles", image: "images/shop-image-3.png", desc: "Crispy and spicy triangle chips. Perfect for movie nights." }
        ]
      },
      {
        name: "Personal Care",
        items: [
          { name: "Dove Beauty Bar", image: "images/shop-image-2.png", desc: "Moisturizing cream bar for soft, glowing skin." },
          { name: "Lux Soap", image: "images/shop-image-3.png", desc: "Fragrant beauty soap for a refreshing bath." },
          { name: "Himalaya Face Wash", image: "images/shop-image-1.png", desc: "Purifying neem face wash for clear skin." }
        ]
      },
      {
        name: "Home Utilities",
        items: [
          { name: "Surf Excel Detergent", image: "images/shop-image-2.png", desc: "Powerful stain removal powder." },
          { name: "Vim Bar", image: "images/shop-image-3.png", desc: "Tough on grease, gentle on hands." }
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
          { name: "Cello Gripper Pen", image: "images/shop-image-3.png", desc: "Smooth writing ballpoint pen with a comfortable grip." },
          { name: "Apsara Pencils (Pack of 10)", image: "images/shop-image-1.png", desc: "Extra dark pencils complete with eraser and sharpener." },
          { name: "Highlighters", image: "images/shop-image-2.png", desc: "Bright fluorescent colors for study notes." }
        ]
      },
      {
        name: "Notebooks & Paper",
        items: [
          { name: "Classmate 172 Pages", image: "images/shop-image-2.png", desc: "Premium quality ruled notebook for students." },
          { name: "Drawing Book", image: "images/shop-image-3.png", desc: "Thick unruled pages ideal for sketching and coloring." },
          { name: "A4 Printing Paper", image: "images/shop-image-1.png", desc: "Bright white paper for pristine printouts." }
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
          { name: "Hair Clips Set", image: "images/store-interior-1.png", desc: "Beautiful designer hair clips for daily wear." },
          { name: "Traditional Bangles", image: "images/store-interior-2.png", desc: "Colorful glass and metal bangles for festivals." },
          { name: "Bindis", image: "images/store-interior.png", desc: "Assorted stone and velvet bindis." }
        ]
      },
      {
        name: "Gifting",
        items: [
          { name: "Gift Wraps", image: "images/store-interior-2.png", desc: "Elegant wrapping paper in various finishes." },
          { name: "Keychains", image: "images/store-interior-1.png", desc: "Cute and premium metal keychains." }
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
          { name: "Cotton Sarees", image: "images/store-interior-2.png", desc: "Comfortable, breathable sarees for daily wear." },
          { name: "Lungis", image: "images/store-interior.png", desc: "Premium quality cotton lungis." }
        ]
      },
      {
        name: "Innerwear & Basics",
        items: [
          { name: "Cotton Towels", image: "images/store-interior-1.png", desc: "Highly absorbent bath towels." },
          { name: "Handkerchiefs", image: "images/store-interior-2.png", desc: "Soft cotton hankies." }
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
          { name: "B&W Photocopy", image: "images/store-interior-1.png", desc: "Clear and crisp document copying." },
          { name: "Colour Printout", image: "images/store-interior-2.png", desc: "High quality color prints." },
          { name: "Spiral Binding", image: "images/store-interior.png", desc: "Professional project binding." }
        ]
      },
      {
        name: "Online Help",
        items: [
          { name: "Form Filling", image: "images/store-interior-2.png", desc: "Assistance with government and school forms." },
          { name: "Bill Payments", image: "images/store-interior-1.png", desc: "Quick utility bill payments." }
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
          { name: "Bingo Mad Angles", image: "images/shop-image-3.png", desc: "Crispy, spicy triangle chips for the perfect crunch." },
          { name: "Lays Classic Salted", image: "images/shop-image-2.png", desc: "The original timeless potato chips." }
        ]
      },
      {
        name: "Chocolates & Candies",
        items: [
          { name: "Dairy Milk Silk", image: "images/shop-image-1.png", desc: "Premium smooth milk chocolate." }
        ]
      },
      {
        name: "Beverages",
        items: [
          { name: "Sprite (750ml)", image: "images/store-interior-1.png", desc: "Clear, crisp, refreshing lemon-lime soda." },
          { name: "Frooti", image: "images/store-interior-2.png", desc: "Fresh and juicy mango drink." }
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
          { name: "Hot Wheels Pack", image: "images/store-interior-1.png", desc: "Die-cast metal toy cars." },
          { name: "Pull-back Cars", image: "images/store-interior-2.png", desc: "Fun friction-powered mini cars." }
        ]
      },
      {
        name: "Play Sets",
        items: [
          { name: "Barbie Doll", image: "images/shop-image-1.png", desc: "Classic fashion doll with accessories." },
          { name: "Building Blocks", image: "images/shop-image-2.png", desc: "Creative interlocking plastic bricks." }
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
          { name: "Airtight Plastic Containers", image: "images/store-interior-2.png", desc: "Durable food-grade storage boxes." },
          { name: "Water Bottles (1L)", image: "images/shop-image-3.png", desc: "BPA-free daily use water bottles." }
        ]
      },
      {
        name: "Utility",
        items: [
          { name: "Plastic Buckets", image: "images/store-interior-1.png", desc: "Strong and flexible bathroom buckets." },
          { name: "Plastic Mugs", image: "images/store-interior-2.png", desc: "Matching bathroom mugs." }
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
