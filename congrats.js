const confettiBox = document.getElementById('confetti');
const CONFETTI_COLORS = ['#e8546a', '#f08aa0', '#d83a52', '#f6b3c2', '#c83048'];
const PARALLAX = [];

// Membuat titik-titik love dengan 3 lapisan kedalaman yang berbeda
function spawnConfetti(scale = 1) {
  const LAYERS = [
    { n: 22, factor: 7,  min: 5,  max: 9,  blur: 1.6, op: 0.5 }, // Lapisan jauh (kecil & agak buram)
    { n: 24, factor: 16, min: 7,  max: 13, blur: 0,   op: 0.9 }, // Lapisan sedang
    { n: 18, factor: 30, min: 10, max: 18, blur: 0,   op: 1   }, // Lapisan dekat (besar & lebih sensitif kursor)
  ];

  for (const L of LAYERS) {
    const layer = document.createElement('div');
    layer.className = 'confetti__layer';
    if (L.blur) layer.style.filter = `blur(${L.blur}px)`;
    layer.style.opacity = L.op;

    const count = Math.round(L.n * scale);
    for (let i = 0; i < count; i++) {
      const h = document.createElement('span');
      h.className = 'heart';
      const size = L.min + Math.random() * (L.max - L.min);
      h.style.width = h.style.height = size + 'px';
      h.style.left = Math.random() * 100 + 'vw';
      h.style.top  = Math.random() * 100 + 'vh';
      h.style.background = CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0];
      h.style.animationDuration = (3 + Math.random() * 5).toFixed(2) + 's';
      h.style.animationDelay = (-Math.random() * 6).toFixed(2) + 's';
      layer.appendChild(h);
    }
    confettiBox.appendChild(layer);
    PARALLAX.push({ el: layer, factor: L.factor });
  }
}

/* Logika merespons gerak kursor (Parallax Perspective) */
let pX = 0, pY = 0, parallaxRAF = 0;

function applyParallax() {
  parallaxRAF = 0;
  for (const { el, factor } of PARALLAX) {
    el.style.transform = `translate(${-pX * factor}px, ${-pY * factor}px)`;
  }
}

function onParallax(e) {
  pX = (e.clientX / window.innerWidth - 0.5) * 2;
  pY = (e.clientY / window.innerHeight - 0.5) * 2;
  if (!parallaxRAF) parallaxRAF = requestAnimationFrame(applyParallax);
}

// Inisialisasi
spawnConfetti();
window.addEventListener('pointermove', onParallax, { passive: true });

document.addEventListener("DOMContentLoaded", () => {
    const paper = document.getElementById('paper');
    const handle = document.getElementById('handle');
    const paperContent = document.getElementById('paper-content');
    const nextBtn = document.getElementById('next-btn');
    
    // Grab all elements you want to shift upwards when the card is pulled
    const shiftElements = document.querySelectorAll('.congrats-title, .photo-card, .pretty, .love-message');
    shiftElements.forEach(el => el.classList.add('shift-element'));

    let isDragging = false;
    let startY = 0;
    let currentTranslateY = 0;
    
    // The maximum distance (in pixels) the card can be pulled UP (negative value)
    const maxPull = -485; 

    function startDrag(e) {
        isDragging = true;
        // Get touch or mouse position
        startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        
        // Remove transitions so the card sticks 1:1 to the finger/mouse
        paper.style.transition = 'none';
        shiftElements.forEach(el => el.style.transition = 'none');
        
        handle.style.animation = 'none'; // Stop arrow bouncing
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault(); // Prevents page scrolling while dragging the card
        
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        const deltaY = clientY - startY;
        
        let newTranslateY = currentTranslateY + deltaY;
        
        // Boundaries: Can't push lower than 0, can't pull higher than maxPull
        if (newTranslateY > 0) newTranslateY = 0;
        if (newTranslateY < maxPull) newTranslateY = maxPull;

        // Move the card
        paper.style.transform = `translateY(${newTranslateY}px)`;

        // Parallax effect: Shift background elements up slightly (max 120px)
        const progress = newTranslateY / maxPull; // ranges 0 to 1
        const bgShift = progress * -120; 
        shiftElements.forEach(el => {
            el.style.transform = `translateY(${bgShift}px)`;
        });
    }

    function endDrag(e) {
    if (!isDragging) return;
    isDragging = false;
    
    // Kembalikan animasi transisi agar efek "snap" halus
    paper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    shiftElements.forEach(el => el.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)');

    // BACA POSISI SEKARANG LANGSUNG DARI INLINE STYLE UNTUK MENGHINDARI BUG PERHITUNGAN
    const matrix = window.getComputedStyle(paper).transform;
    let actualY = 0;
    if (matrix && matrix !== 'none') {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        actualY = parseFloat(values[5]) || 0; 
    } else {
        actualY = currentTranslateY;
    }

    // LOGIKA SNAP: Jika kartu sudah ditarik ke atas melewati -150px (jarak toleransi sedikit saja)
    // Maka langsung otomatis buka penuh dan munculkan tombol.
    if (actualY < -150) {
        // SNAP TO OPEN (Buka Penuh)
        currentTranslateY = maxPull;
        paper.style.transform = `translateY(${maxPull}px)`;
        shiftElements.forEach(el => el.style.transform = `translateY(-120px)`);
        
        // Aktifkan scroll text dan MEMUNCULKAN TOMBOL
        paperContent.classList.add('scroll-active');
        nextBtn.classList.add('visible');
    } else {
        // SNAP TO CLOSED (Tutup Kembali)
        currentTranslateY = 0;
        paper.style.transform = `translateY(0px)`;
        shiftElements.forEach(el => el.style.transform = `translateY(0px)`);
        
        // Matikan scroll dan SEMBUNYIKAN TOMBOL
        paperContent.classList.remove('scroll-active');
        nextBtn.classList.remove('visible');
        paperContent.scrollTop = 0;
    }
}

    // --- Event Listeners ---
    // Mouse events
    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', endDrag);

    // Touch events (mobile)
    handle.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', drag, { passive: false });
    window.addEventListener('touchend', endDrag);
});