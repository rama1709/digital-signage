/* CV Cahaya Mustika - shared multi-page JavaScript */

const PRODUCTS = [
  {
    "id": "samsung-qe65t",
    "brand": "SAMSUNG",
    "category": "Indoor Display",
    "name": "Samsung Smart Signage QE65T",
    "size": "65\"",
    "desc": "Display 4K UHD 65 inci dengan Crystal Processor 4K dan MagicINFO Lite Player untuk informasi dan promosi indoor.",
    "tags": [
      "4K UHD",
      "65\"",
      "MagicINFO Lite"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "65 inch"
      ],
      [
        "Resolusi",
        "3840 x 2160 (4K UHD)"
      ],
      [
        "Brightness",
        "300 nit"
      ],
      [
        "Contrast Ratio",
        "4000:1"
      ],
      [
        "Response Time",
        "8 ms"
      ],
      [
        "Prosesor",
        "Crystal Processor 4K"
      ],
      [
        "Player",
        "MagicINFO Lite"
      ],
      [
        "Konektivitas",
        "HDMI 2.0, HDCP 2.2, USB 2.0, Stereo Mini Jack"
      ]
    ],
    "image": "./assets/products/samsung-qe65t.jpg"
  },
  {
    "id": "samsung-qb55",
    "brand": "SAMSUNG",
    "category": "Indoor Display",
    "name": "Samsung Smart Signage QB55",
    "size": "55\"",
    "desc": "Signage 55 inci 4K UHD berbodi ramping 28,5 mm dengan bezel tipis 11,5 mm dan brightness 350 nit.",
    "tags": [
      "4K UHD",
      "55\"",
      "350 nit"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55 inch"
      ],
      [
        "Resolusi",
        "3840 x 2160 px (4K UHD)"
      ],
      [
        "Dimensi Produk",
        "1237,9 x 708,8 x 28,5 mm"
      ],
      [
        "Bezel",
        "11,5 mm (atas/samping/bawah)"
      ],
      [
        "Berat Bersih",
        "15,7 kg"
      ],
      [
        "Brightness",
        "350 cd/m²"
      ],
      [
        "Contrast Ratio",
        "4000:1"
      ],
      [
        "Response Time",
        "8 ms"
      ],
      [
        "Konsumsi Daya",
        "154 W (maks)"
      ],
      [
        "VESA",
        "200 x 200 mm"
      ],
      [
        "Konektivitas",
        "HDMI 2.0, HDCP 2.2, USB 2.0 x 2, Stereo Mini Jack, RS232C (in/out), RJ45"
      ]
    ],
    "image": "./assets/products/samsung-qb55.jpg"
  },
  {
    "id": "samsung-qm55",
    "brand": "SAMSUNG",
    "category": "Indoor Display",
    "name": "Samsung Smart Signage QM55",
    "size": "55\"",
    "desc": "Signage 55 inci 4K UHD brightness 500 nit, dirancang untuk operasional 24/7 di area publik.",
    "tags": [
      "4K UHD",
      "500 nit",
      "24/7"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55 inch"
      ],
      [
        "Resolusi",
        "3840 x 2160 px (4K UHD)"
      ],
      [
        "Dimensi Produk",
        "1237,9 x 708,8 x 28,5 mm"
      ],
      [
        "Bezel",
        "11,5 mm (atas/samping/bawah)"
      ],
      [
        "Berat Bersih",
        "15,7 kg"
      ],
      [
        "Brightness",
        "500 cd/m²"
      ],
      [
        "Konsumsi Daya",
        "154 W (maks)"
      ],
      [
        "VESA",
        "200 x 200 mm"
      ],
      [
        "Jam Operasional",
        "24/7"
      ]
    ],
    "image": "./assets/products/samsung-qm55.jpg"
  },
  {
    "id": "samsung-qh55",
    "brand": "SAMSUNG",
    "category": "Indoor Display",
    "name": "Samsung Smart Signage QH55",
    "size": "55\"",
    "desc": "Signage 55 inci 4K UHD brightness 700 nit dengan Tizen Zero Config dan Dynamic Crystal Color untuk ruang terang.",
    "tags": [
      "4K UHD",
      "700 nit",
      "Tizen"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55 inch"
      ],
      [
        "Resolusi",
        "3840 x 2160 (4K UHD)"
      ],
      [
        "Brightness",
        "700 nit"
      ],
      [
        "Contrast Ratio",
        "4000:1"
      ],
      [
        "Platform",
        "Tizen Zero Config"
      ],
      [
        "Teknologi",
        "UHD upscaling, Dynamic Crystal Color"
      ],
      [
        "Konektivitas",
        "HDMI, DP 1.2, HDCP 2.2, USB 2.0"
      ]
    ],
    "image": "./assets/products/samsung-qh55.jpg"
  },
  {
    "id": "lg-55uh7j",
    "brand": "LG",
    "category": "Indoor Display",
    "name": "LG 55UH7J-H",
    "size": "55\"",
    "desc": "Signage IPS 4K UHD 55 inci dengan brightness 700 nit, siap operasi 24/7 dalam orientasi landscape maupun portrait.",
    "tags": [
      "4K UHD",
      "700 nit",
      "24/7"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55\""
      ],
      [
        "Panel",
        "IPS, Edge LED"
      ],
      [
        "Resolusi",
        "3840 x 2160 (UHD)"
      ],
      [
        "Brightness",
        "700 nit (typ.)"
      ],
      [
        "Contrast Ratio",
        "1.100:1 (Dynamic CR 1.000.000:1)"
      ],
      [
        "Color Gamut",
        "BT709 95%"
      ],
      [
        "Sudut Pandang",
        "178° x 178°"
      ],
      [
        "Color Depth",
        "10 bit (D), 1,07 miliar warna"
      ],
      [
        "Response Time",
        "8 ms (G to G)"
      ],
      [
        "Haze",
        "28%"
      ],
      [
        "Umur Pakai",
        "50.000 jam (min.)"
      ],
      [
        "Jam Operasional",
        "24/7"
      ],
      [
        "Orientasi",
        "Landscape / Portrait"
      ]
    ],
    "image": "./assets/products/lg-55uh7j.jpg"
  },
  {
    "id": "lg-55uh5j",
    "brand": "LG",
    "category": "Indoor Display",
    "name": "LG 55UH5J-H",
    "size": "55\"",
    "desc": "Signage IPS 4K UHD 55 inci brightness 500 nit untuk operasi 24/7, cocok untuk retail dan area publik.",
    "tags": [
      "4K UHD",
      "500 nit",
      "24/7"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55\""
      ],
      [
        "Panel",
        "IPS, Edge LED"
      ],
      [
        "Resolusi",
        "3840 x 2160 (UHD)"
      ],
      [
        "Brightness",
        "500 nit (typ.)"
      ],
      [
        "Contrast Ratio",
        "1.100:1 (Dynamic CR 1.000.000:1)"
      ],
      [
        "Color Gamut",
        "BT709 95%"
      ],
      [
        "Sudut Pandang",
        "178° x 178°"
      ],
      [
        "Color Depth",
        "10 bit (D), 1,07 miliar warna"
      ],
      [
        "Response Time",
        "8 ms (G to G)"
      ],
      [
        "Haze",
        "28%"
      ],
      [
        "Umur Pakai",
        "50.000 jam (min.)"
      ],
      [
        "Jam Operasional",
        "24/7"
      ],
      [
        "Orientasi",
        "Landscape / Portrait"
      ]
    ],
    "image": "./assets/products/lg-55uh5j.jpg"
  },
  {
    "id": "lg-55ul3j",
    "brand": "LG",
    "category": "Indoor Display",
    "name": "LG 55UL3J-B",
    "size": "55\"",
    "desc": "Signage IPS 4K UHD 55 inci dengan backlight direct dan haze rendah, pilihan ekonomis untuk penggunaan harian.",
    "tags": [
      "4K UHD",
      "400 nit",
      "Direct LED"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55\""
      ],
      [
        "Panel",
        "IPS, Direct LED"
      ],
      [
        "Resolusi",
        "3840 x 2160 (UHD)"
      ],
      [
        "Brightness",
        "400 nit (typ.)"
      ],
      [
        "Contrast Ratio",
        "1.200:1 (Dynamic CR 1.000.000:1)"
      ],
      [
        "Color Gamut",
        "DCI 80%"
      ],
      [
        "Sudut Pandang",
        "178° x 178°"
      ],
      [
        "Color Depth",
        "10 bit, 1,07 miliar warna"
      ],
      [
        "Response Time",
        "8 ms (G to G)"
      ],
      [
        "Haze",
        "3%"
      ],
      [
        "Umur Pakai",
        "30.000 jam (min.)"
      ],
      [
        "Jam Operasional",
        "16/7"
      ],
      [
        "Orientasi",
        "Landscape / Portrait"
      ]
    ],
    "image": "./assets/products/lg-55ul3j.jpg"
  },
  {
    "id": "lg-32sm5j",
    "brand": "LG",
    "category": "Indoor Display",
    "name": "LG 32SM5J-B",
    "size": "32\"",
    "desc": "Signage IPS Full HD 32 inci yang ringkas, cocok untuk menu, informasi antrean, dan promosi di area terbatas.",
    "tags": [
      "Full HD",
      "32\"",
      "400 nit"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "32\""
      ],
      [
        "Panel",
        "IPS"
      ],
      [
        "Rasio Aspek",
        "16:9"
      ],
      [
        "Resolusi",
        "1.920 x 1.080 (FHD)"
      ],
      [
        "Brightness",
        "400 nit (typ.)"
      ],
      [
        "Contrast Ratio",
        "1.100:1"
      ],
      [
        "Sudut Pandang",
        "178° x 178°"
      ],
      [
        "Response Time",
        "10 ms (G to G)"
      ],
      [
        "Haze",
        "1%"
      ],
      [
        "Umur Pakai",
        "30.000 jam (min.)"
      ],
      [
        "Jam Operasional",
        "24/7"
      ],
      [
        "Orientasi",
        "Landscape / Portrait"
      ]
    ],
    "image": "./assets/products/lg-32sm5j.jpg"
  },
  {
    "id": "hik-d6043un",
    "brand": "HIKVISION",
    "category": "Wall Mount",
    "name": "Hikvision DS-D6043UN-B",
    "size": "43\"",
    "desc": "Signage wall-mounted 43 inci 4K UHD berbasis Android dengan antarmuka industrial A+ dan brightness 500 cd/m².",
    "tags": [
      "4K UHD",
      "43\"",
      "Android 8.1"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "43\""
      ],
      [
        "Tipe",
        "Wall-mounted"
      ],
      [
        "Resolusi",
        "UHD 4K"
      ],
      [
        "Prosesor",
        "Cortex-A17, 4-core"
      ],
      [
        "Memori",
        "2 GB"
      ],
      [
        "Penyimpanan",
        "16 GB"
      ],
      [
        "Sistem Operasi",
        "Android 8.1"
      ],
      [
        "Brightness",
        "500 cd/m²"
      ],
      [
        "Antarmuka",
        "Industrial A+"
      ],
      [
        "Konektivitas",
        "RJ45, USB, WiFi, HDMI input x 2"
      ]
    ],
    "image": "./assets/products/hik-d6043un.jpg"
  },
  {
    "id": "hik-d6055un",
    "brand": "HIKVISION",
    "category": "Wall Mount",
    "name": "Hikvision DS-D6055UN-B",
    "size": "55\"",
    "desc": "Signage wall-mounted 55 inci 4K UHD berbasis Android untuk lobi, retail, dan ruang publik.",
    "tags": [
      "4K UHD",
      "55\"",
      "Android 8.1"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55\""
      ],
      [
        "Tipe",
        "Wall-mounted"
      ],
      [
        "Resolusi",
        "UHD 4K"
      ],
      [
        "Prosesor",
        "Cortex-A17, 4-core"
      ],
      [
        "Memori",
        "2 GB"
      ],
      [
        "Penyimpanan",
        "16 GB"
      ],
      [
        "Sistem Operasi",
        "Android 8.1"
      ],
      [
        "Brightness",
        "500 cd/m²"
      ],
      [
        "Antarmuka",
        "Industrial A+"
      ],
      [
        "Konektivitas",
        "RJ45, USB, WiFi, HDMI input x 2"
      ]
    ],
    "image": "./assets/products/hik-d6055un.jpg"
  },
  {
    "id": "hik-d6065un",
    "brand": "HIKVISION",
    "category": "Wall Mount",
    "name": "Hikvision DS-D6065UN",
    "size": "65\"",
    "desc": "Signage wall-mounted 65 inci 4K UHD dengan memori 3 GB, penyimpanan 32 GB, dan pilihan input HDMI, DVI-I serta DP.",
    "tags": [
      "4K UHD",
      "65\"",
      "3GB + 32GB"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "65\""
      ],
      [
        "Tipe",
        "Wall-mounted"
      ],
      [
        "Resolusi",
        "UHD 4K"
      ],
      [
        "Memori",
        "3 GB"
      ],
      [
        "Penyimpanan",
        "32 GB"
      ],
      [
        "Sistem Operasi",
        "Android 8.0"
      ],
      [
        "Brightness",
        "500 cd/m²"
      ],
      [
        "Antarmuka",
        "Industrial A+"
      ],
      [
        "Konektivitas",
        "RJ45, USB, WiFi, HDMI input x 2, DVI-I input x 1, DP 1.2 input x 1"
      ]
    ],
    "image": "./assets/products/hik-d6065un.jpg"
  },
  {
    "id": "hik-d6055ul",
    "brand": "HIKVISION",
    "category": "Floor Standing",
    "name": "Hikvision DS-D6055UL-B/S",
    "size": "55\"",
    "desc": "Signage floor standing 55 inci 4K UHD berbasis Android, praktis dipasang tanpa dinding untuk lobi dan showroom.",
    "tags": [
      "4K UHD",
      "55\"",
      "Floor Standing"
    ],
    "specs": [
      [
        "Ukuran Layar",
        "55\""
      ],
      [
        "Tipe",
        "Floor Standing"
      ],
      [
        "Resolusi",
        "UHD 4K"
      ],
      [
        "Prosesor",
        "Cortex-A17, 4-core"
      ],
      [
        "Memori",
        "2 GB"
      ],
      [
        "Penyimpanan",
        "16 GB"
      ],
      [
        "Sistem Operasi",
        "Android 8.1"
      ],
      [
        "Brightness",
        "500 cd/m²"
      ],
      [
        "Antarmuka",
        "Industrial A+"
      ],
      [
        "Konektivitas",
        "RJ45, USB, WiFi, HDMI input x 2"
      ]
    ],
    "image": "./assets/products/hik-d6055ul.jpg"
  }
];

const WA_NUMBER = '628113301819';
const CONTACT_EMAIL = '';
const formatRp = n => 'Rp ' + Number(n).toLocaleString('id-ID');
const waLink = text => WA_NUMBER ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}` : `https://wa.me/628113301819?text=${encodeURIComponent(text)}`;

const ARTICLES = [
  {id:'a1',cat:'Tips',date:'12 September 2026',title:'Cara Memilih Digital Signage Sesuai Kebutuhan Bisnis',image:'./assets/articles/artikel-pilihan-display.jpg',excerpt:'Pertimbangkan ukuran layar, lokasi pemasangan, tingkat kecerahan, dan kebutuhan konten sebelum memilih display.',content:'<p>Digital signage perlu dipilih berdasarkan lokasi, jarak pandang, jenis konten, dan jam operasional. Mulailah dengan menentukan ukuran layar dan resolusi yang sesuai dengan ruang.</p><p>Untuk area terang, perhatikan brightness dan karakter permukaan panel. Untuk penggunaan profesional, pertimbangkan juga dukungan software, konektivitas, serta layanan purna jual.</p>'},
  {id:'a2',cat:'Teknologi',date:'5 September 2026',title:'Mengenal Resolusi 4K pada Digital Signage',image:'./assets/articles/artikel-4k.jpg',excerpt:'Resolusi tinggi membantu menampilkan teks, gambar, dan video dengan detail yang lebih tajam.',content:'<p>Resolusi 4K memberikan jumlah piksel yang lebih tinggi dibanding Full HD sehingga detail visual dapat terlihat lebih jelas pada layar berukuran besar.</p><p>Dalam penggunaan komersial, resolusi perlu disesuaikan dengan jarak melihat dan materi konten agar investasi display tetap efektif.</p>'},
  {id:'a3',cat:'Penggunaan',date:'28 Agustus 2026',title:'Digital Signage untuk Area Retail dan Mall',image:'./assets/articles/artikel-pilihan-display.jpg',excerpt:'Gunakan layar digital untuk promosi, informasi produk, navigasi, dan komunikasi visual pengunjung.',content:'<p>Retail dan pusat perbelanjaan dapat memanfaatkan digital signage untuk menyampaikan promosi secara dinamis. Konten dapat diperbarui tanpa mengganti materi cetak.</p><p>Penempatan layar sebaiknya mempertimbangkan arus pengunjung, visibilitas, dan pencahayaan area.</p>'},
  {id:'a4',cat:'Penggunaan',date:'20 Agustus 2026',title:'Digital Signage untuk Institusi Pendidikan',image:'./assets/articles/artikel-pendidikan.jpg',excerpt:'Display digital dapat membantu menyampaikan pengumuman, agenda kegiatan, dan informasi kampus atau sekolah.',content:'<p>Di lingkungan pendidikan, digital signage dapat digunakan untuk pengumuman, jadwal, agenda kegiatan, dan informasi fasilitas.</p><p>Konten yang terjadwal membantu informasi tersampaikan secara konsisten kepada siswa, mahasiswa, staf, dan pengunjung.</p>'},
  {id:'a5',cat:'Teknologi',date:'14 Agustus 2026',title:'Perbedaan Indoor Display dan Wall Mount Display',image:'./assets/articles/artikel-indoor-wall.jpg',excerpt:'Kenali karakter penggunaan display indoor dan wall mount agar pilihan perangkat sesuai dengan lokasi pemasangan.',content:'<p>Indoor display umumnya dirancang untuk kebutuhan ruang dalam dengan karakter pencahayaan yang lebih terkontrol. Wall mount display dapat menjadi pilihan ketika perangkat dipasang langsung pada dinding.</p><p>Pemilihan tetap perlu mempertimbangkan ukuran, brightness, sistem pemasangan, dan pola penggunaan.</p>'},
  {id:'a6',cat:'Perusahaan',date:'8 Agustus 2026',title:'CV Cahaya Mustika dan Solusi Display Profesional',image:'./assets/articles/artikel-cahaya-mustika.jpg',excerpt:'Mengenal pendekatan CV Cahaya Mustika dalam membantu kebutuhan perangkat display untuk bisnis dan institusi.',content:'<p>CV Cahaya Mustika berfokus pada penyediaan perangkat Digital Signage dan Office Equipment untuk kebutuhan bisnis serta institusi.</p><p>Tim dapat membantu proses pemilihan perangkat dan konsultasi berdasarkan kebutuhan ruang serta penggunaan.</p>'}
];

document.addEventListener('DOMContentLoaded', () => {
  // WhatsApp
  document.querySelectorAll('[data-wa-number]').forEach(a => { a.href = waLink('Halo CV Cahaya Mustika, saya ingin konsultasi Digital Signage.'); });
  if (CONTACT_EMAIL) document.querySelectorAll('[data-email]').forEach(el => { el.hidden=false; const a=el.querySelector('a'); if(a){a.href=`mailto:${CONTACT_EMAIL}`;a.textContent=CONTACT_EMAIL;} });

  // Mobile navigation
  const hamburger=document.getElementById('hamburger'), navMenu=document.getElementById('navMenu');
  if(hamburger && navMenu){ hamburger.addEventListener('click',()=>{const open=navMenu.classList.toggle('open'); hamburger.setAttribute('aria-expanded',open);}); navMenu.querySelectorAll('.nav-link:not(.nav-dropdown-toggle), .dropdown-link').forEach(l=>l.addEventListener('click',()=>navMenu.classList.remove('open'))); }

  // Dropdown Produk (hover di desktop via CSS, klik/tap di semua perangkat)
  document.querySelectorAll('.has-dropdown').forEach(dd=>{const t=dd.querySelector('.nav-dropdown-toggle');if(!t)return;t.addEventListener('click',e=>{if(e.target.closest('.dd-caret')){e.preventDefault();const open=dd.classList.toggle('open');t.setAttribute('aria-expanded',open);}});t.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();dd.classList.add('open');t.setAttribute('aria-expanded','true');dd.querySelector('.dropdown-link')?.focus();}});dd.addEventListener('mouseleave',()=>{if(window.matchMedia('(min-width:1025px)').matches){dd.classList.remove('open');t.setAttribute('aria-expanded','false');}});});
  const closeDropdowns=()=>document.querySelectorAll('.has-dropdown.open').forEach(dd=>{dd.classList.remove('open');dd.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded','false');});
  document.addEventListener('click',e=>{if(!e.target.closest('.has-dropdown'))closeDropdowns();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDropdowns();});

  // Header shadow
  const header=document.getElementById('header');
  const onScroll=()=>{ if(header) header.classList.toggle('scrolled',window.scrollY>12); };
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  // Scroll progress
  const progress=document.getElementById('scrollProgress');
  window.addEventListener('scroll',()=>{if(progress){const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h?window.scrollY/h*100:0)+'%';}},{passive:true});

  // Back to top
  const back=document.getElementById('backToTop');
  if(back){window.addEventListener('scroll',()=>back.classList.toggle('show',window.scrollY>500),{passive:true});back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}

  // Reveal
  const reveals=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.08});reveals.forEach(e=>io.observe(e));} else reveals.forEach(e=>e.classList.add('in'));

  // Product catalog
  const grid=document.getElementById('productGrid');
  if(grid){
    const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
    const FALLBACK_IMG='assets/products/cover-mall.jpg';
    const titleCase=s=>s.charAt(0)+s.slice(1).toLowerCase();
    const cards=PRODUCTS.map((p,i)=>{
      const cat=p.category;
      const msg=`Halo CV Cahaya Mustika, saya tertarik dengan ${p.name}. Mohon info penawaran.`;
      const searchTxt=[p.brand,p.name,cat,p.size,p.desc,p.tags.join(' ')].join(' ').toLowerCase();
      return `<article class="product-card in" data-brand="${p.id.split('-')[0]==='hik'?'hikvision':p.id.split('-')[0]}" data-category="${esc(cat.toLowerCase())}" data-search="${esc(searchTxt)}"><div class="product-img"><img src="${p.image}" alt="Foto ${esc(p.name)} - digital signage ${p.brand}" loading="${i<3?'eager':'lazy'}" decoding="async" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';"><span class="brand-chip">${p.brand}</span></div><div class="product-body"><div class="product-cat">${cat}</div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p><div class="feat-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="product-foot"><button class="btn-detail" data-open="${p.id}">Lihat Detail <i class="fa-solid fa-arrow-right"></i></button><a href="${waLink(msg)}" target="_blank" rel="noopener" class="btn-quote"><i class="fa-brands fa-whatsapp"></i> Minta Penawaran</a></div></div></article>`;
    });
    const noRes=document.getElementById('noResult');
    grid.querySelectorAll('.product-card').forEach(c=>c.remove());
    grid.insertAdjacentHTML('afterbegin',cards.join(''));
  }
  if(grid){
    const tabs=document.getElementById('productTabs'), search=document.getElementById('productSearch'); let active='all', brand=(()=>{const q=new URLSearchParams(location.search);return (q.get('brand')||q.get('merek')||'').toLowerCase();})();
    const apply=()=>{const q=(search?.value||'').trim().toLowerCase();let shown=0;grid.querySelectorAll('.product-card').forEach(c=>{const cat=c.dataset.category||'';const okFilter=active==='all'||(active==='indoor'&&cat.includes('indoor'))||(active==='wall'&&(cat.includes('wall')||cat.includes('floor')));const okSearch=(!q||c.dataset.search.includes(q))&&(!brand||c.dataset.brand===brand);c.style.display=okFilter&&okSearch?'flex':'none';if(okFilter&&okSearch)shown++;});const nr=document.getElementById('noResult');if(nr)nr.style.display=shown?'none':'block';};
    tabs?.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{brand='';active=b.dataset.filter;tabs.querySelectorAll('.filter-btn').forEach(x=>x.classList.toggle('active',x===b));apply();})); search?.addEventListener('input',apply); apply();
    const kat=new URLSearchParams(location.search).get('kategori');if(kat){tabs?.querySelector(`.filter-btn[data-filter="${kat}"]`)?.click();}
    grid.addEventListener('click',e=>{const btn=e.target.closest('[data-open]');if(btn)openProduct(btn.dataset.open);});
  }

  function openProduct(id){const p=PRODUCTS.find(x=>x.id===id), modal=document.getElementById('productModal');if(!p||!modal)return;const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v;};const img=document.getElementById('modalImg');if(img){img.onerror=()=>{img.onerror=null;img.src='./assets/products/cover-mall.jpg';};img.src=p.image;img.alt='Foto produk '+p.name+' - '+p.brand;}set('modalBrand',p.brand);set('modalTitle',p.name);set('modalDesc',p.desc);const hi=document.getElementById('modalHighlights');if(hi)hi.innerHTML=p.tags.map(h=>`<li><i class="fa-solid fa-circle-check"></i><span>${h}</span></li>`).join('');const mw=document.getElementById('modalWa');if(mw)mw.href=waLink(`Halo CV Cahaya Mustika, saya tertarik dengan ${p.name}. Mohon info penawaran.`);const bottom=document.getElementById('modalBottom');if(bottom){bottom.innerHTML=`<h4><i class="fa-solid fa-list-check"></i> Spesifikasi</h4><table class="spec-table">${p.specs.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}</table><p class="msrp-note"><i class="fa-solid fa-circle-info"></i> Hubungi kami untuk harga terbaru, harga proyek, dan ketersediaan stok.</p>`;}modal.classList.add('active');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  function closeProduct(){const m=document.getElementById('productModal');if(m){m.classList.remove('active');m.setAttribute('aria-hidden','true');document.body.style.overflow='';}}

  // Portfolio filter + lightbox
  const pfGrid=document.getElementById('pfGrid');
  if(pfGrid){const tabs=document.getElementById('pfTabs');tabs?.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{tabs.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;pfGrid.querySelectorAll('.pf-card').forEach(c=>c.style.display=f==='all'||c.dataset.group===f?'block':'none');}));const cards=[...pfGrid.querySelectorAll('.pf-card')];let idx=0;const lb=document.getElementById('lightboxModal');const show=i=>{if(!lb||!cards.length)return;idx=(i+cards.length)%cards.length;const c=cards[idx],img=c.querySelector('img');const target=document.getElementById('lightboxImg');if(target){target.src=img.src;target.alt=img.alt;}const cap=document.getElementById('lightboxCaption');if(cap)cap.textContent=c.querySelector('h3')?.textContent||img.alt;const desc=document.getElementById('lightboxDesc');if(desc)desc.textContent=c.querySelector('.pf-body p')?.textContent||'';lb.classList.add('active');lb.setAttribute('aria-hidden','false');};cards.forEach((c,i)=>c.addEventListener('click',e=>{if(e.target.closest('a'))return;show(i);}));document.getElementById('closeLightbox')?.addEventListener('click',closeLb);document.getElementById('lbPrev')?.addEventListener('click',e=>{e.stopPropagation();show(idx-1)});document.getElementById('lbNext')?.addEventListener('click',e=>{e.stopPropagation();show(idx+1)});lb?.addEventListener('click',e=>{if(e.target===lb)closeLb();});function closeLb(){lb?.classList.remove('active');lb?.setAttribute('aria-hidden','true');}}

  // Articles
  const articleGrid=document.getElementById('articleGrid');
  if(articleGrid){
    const cards=[...articleGrid.querySelectorAll('[data-article-card]')];
    const render=list=>{const ids=new Set(list.map(a=>a.id)); cards.forEach(c=>c.style.display=ids.has(c.dataset.articleCard)?'flex':'none');};
    render(ARTICLES);
    document.getElementById('articleTabs')?.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#articleTabs .filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;render(f==='all'?ARTICLES:ARTICLES.filter(a=>a.cat===f));}));
    articleGrid.addEventListener('click',e=>{const b=e.target.closest('[data-article]');if(!b)return;const a=ARTICLES.find(x=>x.id===b.dataset.article),m=document.getElementById('articleModal');if(!a||!m)return;document.getElementById('articleImg').src=a.image;document.getElementById('articleImg').alt=a.title;document.getElementById('articleCat').textContent=a.cat;document.getElementById('articleDate').textContent=a.date;document.getElementById('articleTitle').textContent=a.title;document.getElementById('articleContent').innerHTML=a.content;m.classList.add('active');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';});
    const m=document.getElementById('articleModal');const close=()=>{m?.classList.remove('active');m?.setAttribute('aria-hidden','true');document.body.style.overflow='';};document.getElementById('closeArticle')?.addEventListener('click',close);m?.addEventListener('click',e=>{if(e.target===m)close();});
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item?.querySelector('.faq-a');
      if (!item || !answer) return;

      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openAnswer = openItem.querySelector('.faq-a');
        if (openAnswer) openAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Contact form
  const form=document.getElementById('contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();const nama=document.getElementById('nama')?.value.trim()||'';const perusahaan=document.getElementById('perusahaan')?.value.trim()||'';const minat=document.getElementById('minat')?.value||'';const pesan=document.getElementById('pesan')?.value.trim()||'';const text=`Halo CV Cahaya Mustika, saya ${nama}${perusahaan?' dari '+perusahaan:''}.\n\nKebutuhan: ${minat}\n\nPesan: ${pesan}`;window.open(waLink(text),'_blank');});

  // ESC closes overlays
  document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.style.background='#eef2ff';img.style.objectFit='contain';},{once:true}));

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.active,.lightbox.active').forEach(m=>m.classList.remove('active'));document.body.style.overflow='';}});
});
