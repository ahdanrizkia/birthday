const confettiBox = document.getElementById('confetti');
const CONFETTI_COLORS = ['#e8546a', '#f08aa0', '#d83a52', '#f6b3c2', '#c83048'];
const PARALLAX = [];

function spawnConfetti(scale = 1) {
  if (!confettiBox) return;

  const LAYERS = [
    { n: 22, factor: 7,  min: 5,  max: 9,  blur: 1.6, op: 0.5 },
    { n: 24, factor: 16, min: 7,  max: 13, blur: 0,   op: 0.9 },
    { n: 18, factor: 30, min: 10, max: 18, blur: 0,   op: 1   },
  ];

  for (const L of LAYERS) {
    const layer = document.createElement('div');
    layer.className = 'confetti__layer';
    if (L.blur) layer.style.filter = `blur(${L.blur}px)`;
    layer.style.opacity = L.op;

    const count = Math.round(L.n * scale);
    for (let i = 0; i < count; i++) {
      const h = document.createElement('span');
      h.className = 'p-heart'; // Memakai .p-heart agar memisah gaya CSS!
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

spawnConfetti();
window.addEventListener('pointermove', onParallax, { passive: true });



/* --- 1. TRACK DATA --- */
const playlist = [
  {
    title: "PENJAGA HATI",
    audioSrc: "lagu/song1.mp3",
    imageSrc: "img/song1.png",
    lyrics: "Karena bersamamu semua terasa indah,\ngundah gulana hatiku telah hancur sirna.\nJanjiku takkan ku lepas wahai\nkau bidadariku dari surga.\nTuk selamanya."
  },
  {
    title: "ILOMILO",
    audioSrc: "lagu/song2.mp3",
    imageSrc: "img/song2.png",
    lyrics: "So, where did you go i should know but it's cold And i dont wanna be lonely so tell me you'll come home. Even if it's just a lie. \n I tried not to upset you, let you, rescue  me the day i met you \n i just wanted to protect you But now i'll never get to"
  },
  {
    title: "TIME OF DYING",
    audioSrc: "lagu/song3.mp3",
    imageSrc: "img/song3.png",
    lyrics: "I will not die, i'll wait here for you, i fell alive when your beside me. \n I will not die, i'll wait here for you, in MY TIME OF DYING."
  },
  {
    title: "JUST Th WAY Y ARE",
    audioSrc: "lagu/song4.mp3",
    imageSrc: "img/song4.png",
    lyrics: "The way talk, the way you're movin' closer \n The way you kiss, the way you're deep inside me. \n Cause everytime, every time i think about you. I want you just \n JUST THE WAY YOU ARE :D."
  },
  {
    title: "Summertime Sdnes",
    audioSrc: "lagu/song5.mp3",
    imageSrc: "img/song5.png",
    lyrics: "Think i'll miss you forever, like the star miss the sun \n In the morning sky, later's better than never. \n Even if you're gone, im gonna drive, drive."
  },
  {
    title: "8 letters",
    audioSrc: "lagu/song6.mp3",
    imageSrc: "img/song6.png",
    lyrics: "If all it is is eight letters why its so hard to say? \n If all it is is eight lettes-When i close my eyes \n its you there is my mind (its always you :>) When i close my eyes~ \n Just ask me if you dont know what is 8 lettes mean 🗿😭 i know you know opkors ;v"
  },
  {
    title: "Lov Me nt",
    audioSrc: "lagu/song7.mp3",
    imageSrc: "img/song7.png",
    lyrics: "I miss you come here and oh its hard to see you but i wish you were right here \n Owhh its hard to leave you but i get you everywhere."
  },
  {
    title: "be my baby",
    audioSrc: "lagu/song8.mp3",
    imageSrc: "img/song8.png",
    lyrics: "You know I will adore you 'til eternity\n So won't you, please (be my, be my baby)\n Be my little baby? (My one and only baby)\n Say you'll be my darlin' (be my, be my baby xD) \n Be baby now (my one and only baby)"
  },
  {
    title: "Masa ini, masa nanti",
    audioSrc: "lagu/song9.mp3",
    imageSrc: "img/song9.png",
    isSynced: true, // Tanda kalau lagu ini pakai lirik sinkron
    lyrics: [
      { time: 0, text: "Baca semua lirik ini pelan pelan ya Sela :>" },
      { time: 4, text: "Aku juga ingin menyampaikan hal yang sama" },
      { time: 8, text: "Seperti apa yang Nuca tuliskan disini." },
      { time: 11, text: "Hai, kau datang di saat yang tepat." },
      { time: 20, text: "Kau ajarkan apa itu cinta, lewat mata kau berbicara" },
      { time: 35, text: "Hai, mungkin aku telah menanti lama, tapi ternyata tak sia sia.." },
      { time: 47, text: "Tuhan berikan malaikat surga" },
      { time: 58, text: "Izinkan ku berjalan bersamamu. Mimpi yang telah lama kudambakan." },
      { time: 71, text: "Kau adalah semua jawaban dari doa yang kupanjatkan," },
      { time: 82, text: "dengan hadirmu dihidupku sudah ku merasa cukup :>" },
      { time: 93, text: "Sela, Makasih yaa!!" },
      { time: 95, text: "Semoga kamu selalu diberi kebahagiaan" },
      { time: 101, text: "Izin kan ku berjalan bersamamu, mimpi yang tlah lama ku dambakan." },
      { time: 112, text: "Kini semua terasa indah"   },
      { time: 119, text: "hitam putih pun mulai berwarna" },
      { time: 126, text: "Kau adalah semua jawaban dari doa yang ku panjatkan" },
      { time: 137, text: "Dengan hadirmu dihidupku sudah ku merasa cukup :>" },
      { time: 150, text: "Hati ini, telah menetapkan engkau sosok yang kan temani" },
      { time: 161, text: "Di mana ini, masa nanti, dan masa indah lainnya x>" },
      { time: 168, text: "hmm sajdasjkd yeahh you know?" },
      { time: 170, text: "its married lol" },
      { time: 171, text: "Sehat selalu ya!" },
      { time: 179, text: "Semua kata yang terucap semua tertuju padamu 😫 " },
      { time: 190, text: "SEMUA ARAH YANG KU TEMPUH, semua tertuju PADAMU❤️❤️" },
      { time: 201, text: "Kau adalah semua jawaban" },
      { time: 207, text: "Dari doa yang ku panjatkan" },
      { time: 212, text: "Dengan HADIRMUU, dihidupku sudah ku merasa cukup :>" },
      { time: 224, text: "Hati ini, telah menetapkan engkau sosok yang kan temani" },
      { time: 236, text: "Di masa ini, masa nanti dan masa indah lainnya <3" },
      { time: 243, text: "Sela, sehat selalu ya?" },
      { time: 246, text: "Rawat dirimu baik baik ya ameliamikaela." },
      { time: 249, text: "Kamu masih pegang janjinya kan??" },
      { time: 251, text: "aku percaya sama kamu kok. Sela" },
      { time: 254, text: "Happy birthday! my best friend." },
      { time: 257, text: "Sekarang kamu boleh lanjut baca bukunya :V" },
      
    ]
  }
];

/* --- 2. PRELOAD SEMUA AUDIO DI AWAL --- */
playlist.forEach(song => {
  const audioPreload = new Audio();
  audioPreload.src = song.audioSrc;
  audioPreload.preload = "auto";
});

/* --- 3. DOM ELEMENTS --- */
const trackContainer = document.getElementById('track');
const lyricsText = document.getElementById('lyrics-text');
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
let isPlaying = false;

/* --- 4. INITIALIZE CAROUSEL CARDS --- */
function initCarousel() {
  trackContainer.innerHTML = '';
  playlist.forEach((song, index) => {
    const card = document.createElement('div');
    card.classList.add('music-card');
    if (index === currentIndex) card.classList.add('active');
    
    const img = document.createElement('img');
    img.src = song.imageSrc;
    img.alt = song.title;
    
    card.appendChild(img);
    
    card.addEventListener('click', () => {
      if (index !== currentIndex) {
        goToTrack(index);
      }
    });

    trackContainer.appendChild(card);
  });
  updatePlayer(false);
}

/* --- 5. UPDATE CAROUSEL POSITION --- */
function updateCarouselPosition() {
  const cards = document.querySelectorAll('.music-card');
  if (!cards.length) return;

  const wrapperWidth = document.getElementById('carousel-wrapper').clientWidth;
  const cardWidth = cards[0].offsetWidth;
  const cardMargin = parseInt(window.getComputedStyle(cards[0]).marginRight) * 2;
  const fullCardWidth = cardWidth + cardMargin;

  const offset = (wrapperWidth / 2) - (cardWidth / 2) - (currentIndex * fullCardWidth) - (cardMargin / 2);
  trackContainer.style.transform = `translateX(${offset}px)`;

  cards.forEach((card, idx) => {
    if (idx === currentIndex) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

/* --- 6. UPDATE PLAYER (LYRICS & AUDIO) --- */
function updatePlayer(playImmediately = true) {
  const currentSong = playlist[currentIndex];

  lyricsText.style.opacity = 0;
  setTimeout(() => {
    lyricsText.innerHTML = ""; 

   
    if (currentSong.isSynced) {
      currentSong.lyrics.forEach((line, index) => {
        const span = document.createElement('span');
        span.className = 'lyric-line';
        span.innerText = line.text;
        span.dataset.time = line.time; 
        span.dataset.index = index;
        lyricsText.appendChild(span);
      });
    } else {
     
      lyricsText.innerText = currentSong.lyrics;
    }
    
    lyricsText.style.opacity = 1;
    document.querySelector('.lyrics-container').scrollTop = 0;
  }, 150);

  const isNewTrack = !audioPlayer.src || !audioPlayer.src.includes(currentSong.audioSrc);
  if (isNewTrack) {
    audioPlayer.src = currentSong.audioSrc;
    audioPlayer.load(); 
  }

  if (playImmediately) {
    audioPlayer.play().catch(e => console.log("Playback error:", e));
  }

  updateCarouselPosition();
}

/* --- LOGIKA SINKRONISASI LIRIK --- */
audioPlayer.addEventListener('timeupdate', () => {
  const currentSong = playlist[currentIndex];
  if (!currentSong.isSynced) return;

  const currentTime = audioPlayer.currentTime;
  const lines = document.querySelectorAll('.lyric-line');
  let activeIndex = -1;

  for (let i = 0; i < currentSong.lyrics.length; i++) {
    if (currentTime >= currentSong.lyrics[i].time) {
      activeIndex = i;
    } else {
      break; 
    }
  }


  lines.forEach((line, index) => {
    if (index === activeIndex) {
      if (!line.classList.contains('active')) {
        line.classList.add('active');
        
       
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      line.classList.remove('active');
    }
  });
});

/* --- 7. PLAY/PAUSE LOGIC & UI UPDATE --- */
const playBtnIcon = playBtn;

function updatePlayButtonUI() {
  if (audioPlayer.paused) {
    playBtnIcon.innerHTML = "▶"; 
  } else {
    playBtnIcon.innerHTML = "⏸"; 
  }
}

playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().then(() => {
      isPlaying = true;
      updatePlayButtonUI(); 
    }).catch(e => console.log("Playback error:", e));
  } else {
    audioPlayer.pause();
    isPlaying = false;
    updatePlayButtonUI(); 
  }
});

// Pastikan icon kembali benar saat lagu selesai / ganti track otomatis
audioPlayer.addEventListener('play', updatePlayButtonUI);
audioPlayer.addEventListener('pause', updatePlayButtonUI);


/* --- 8. NAVIGATION LOGIC (AUTOPLAY FIX) --- */
function goToTrack(index, forcePlay = false) {
  currentIndex = (index + playlist.length) % playlist.length;
  // Memutar audio jika status sebelumnya sedang play ATAU dipaksa (forcePlay) saat lagu habis
  updatePlayer(isPlaying || forcePlay);
}

nextBtn.addEventListener('click', () => goToTrack(currentIndex + 1));
prevBtn.addEventListener('click', () => goToTrack(currentIndex - 1));

// Event saat lagu selesai: Otomatis pindah dan putar lagu berikutnya (seamless)
audioPlayer.addEventListener('ended', () => {
  goToTrack(currentIndex + 1, true);
});

/* --- 9. TOUCH / SWIPE SUPPORT --- */
let startX = 0;
let endX = 0;

trackContainer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
}, { passive: true });

trackContainer.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const threshold = 50;
  if (startX - endX > threshold) {
    goToTrack(currentIndex + 1);
  } else if (endX - startX > threshold) {
    goToTrack(currentIndex - 1);
  }
}

/* --- 10. WINDOW RESIZE & INIT --- */
window.addEventListener('resize', () => {
  updateCarouselPosition();
});

window.addEventListener('DOMContentLoaded', initCarousel);



/* ======================= MINECRAFT BOOK SCRIPT ======================= */
document.addEventListener('DOMContentLoaded', function () {
  // Isi konten buku — tambah / edit objek di dalam array ini untuk nambah halaman
  var pages = [
    {
      html:
        '<h4>Halo selaa :D</h4>' +
        '<ul>' +
          '<p>Bayangkan kamu sendang mengobrol denganku</p>' +
        '</ul>' +
        '<p>Halaman halaman selanjutnya adalah ratusan kalimat tentang aku, dan caraku memandangmu.</p>' +
        '<h3> This is a hudred of sentences that presenting myselft at July. Im sorry for all of my yapp xD </h3>'
    },
    {
      html:
        
        '<p>For me, you1ll always be my favorite person today, tomorrow and forever. ' +
        'I have no reason to give up on you, even if you show me the worst parts of yourself. I`ll still be here. I don`t care how hard things get. Or how bad your mood is sometime, i still choose you. Cause i don`t wanna love anyone else. Its always been you, and its always be you.</p>'
    },
    {
      html:
        
        '<p> Hey orang orang, ada lohh teman yang baik banget kepada ku. Dia Sela, bayangin dia mengajakku untuk mewujudkan keinginanku di bidang pertanian. Aku kaget, akhirnya ada orang yang mengapresiasi perjalanan ku.. meskipun itu masih plan angan angan saja tapi aku sudah senang banget dia sampai mau menawarkan itu hahahaha xD</p>' +
        '<h4>2 Juli--26. Saat aku kembali heran kenapa aku tidak punya lahan untuk Bertani</h4>'
    },
    {
      html:
       
        '<p>Sela, aku disini. 21:36 atau 9:39 malam.. sedang menunggu konfirmasi kamu untuk waktu yang bisa kamu berikan. Aku menulis ini. Dimana aku pengen jujur, dari awal ketika diriku overthinkingnya untuk karirku.. (sepanjang July) selain itu aku ovt tentang hubungan kita sel, ternyata aku suka sakit hati kalo tidak ada kepastian. Dan anehnya patokan kepastiannya itu ga logis. Bgini, aku ingin diberi kepastian yang sangat  </p>'
    },
    {
      html:
      '<p> sangat sering datang. Sel, aku selalu berfikir bahwa sepertinya kamu akan hilang perasaannya hanya karena respon, anda terlihat tidak senang. Emm, berlebihan kan? Iya, aku tau. Gausah penuhin harapan itu, aku cuman pengen jujur aja. ahehheheh ;v</p>' +
      '<p> Aku takut hilang perasaannya karena kamu akan mendapatkan pemikiran baru yang menyebabkan kamu meninggalkanku. Dan itu selalu menjadi kesimpulan akhir di otakku.. tapi setelah aku menyadari, dimana ketika </p>'
    },
    {
      html:
      '<p>kamu tersenyum padaku saat bertemu, membagi waktu denganku meskipun aku tau kamu sibuk.. tetap memaafkan keanehan diriku, menerima semua yang sudah terjadi kemarin sebelum menginjak tanggal sekarang, 9 september.. dan tetap tidak mengganti tujuan kita sampai menyentuh 5 bulan. 10 April, kita berjanji.</p>' +
      '<p> Aku benar benar sehat waktu itu, pikiranku kosong, bebanpu ngaada. Semakin kesini aku payah sel, aku kaya selalu ga percaya sama apa yang aku rencanakan. </p>'
    },
    {
      html:
      '<p>Aku perjelas lagi, Aku percaya sama kamu yang bakal tetap disini. Tapi aku kurang percaya dengan apakah janji itu bisa tercapai sesuai keinginan kita? Atau lebih jelasnya keinginan ku yang standarnya terlalu tinggi? Bukan standar pasangan, standar hidup ;v </p>' +
      '<p> Sebenarnya aku sekarang tidak realistis, bukan buat hubungan kita, tapi masalahnya di diriku sekarang yang sedang otw kesana. Aku bakal jadi beban buat kamu yang</p>'
    },
    {
      html:
      '<p> yang bakal dengerin Mulu ocehan yang gaperlu dikeluhkan ini. Kamu yang paling paham tentang diriku, kamu bisa memahami overthinking ku sela. Jadi, sampai sini... Kamu benar benar membuatku kagum dengan apa yang kamu katakan terhadap perspektif berpasangan, maksudnya kamu benar benar melakukan itu.. Aku sudah kehilangan kepercayaan pada orang orang yang dirinya berkata hal itu, namun mereka tidak melakukan itu. Tapi… kamu benar benar menjadi apa yang kamu katakan.'
    },
    {
      html:
      '<p>Aku memiliki kunci plan untuk masa depan ku, tapi kuncinya adalah gaji minimal (UMR). Tapi sekarang Aku tidak setara dengan mereka yang sudah bekerja tapi otak menganggap ku sudah harus untuk kesana karena otak ngasi tau "mana plan yang kamu buat, gaada hasil" gimana mau gaada hasil, UMR nya gaada? Sedangkan fisik dan umur belum harus ke sana. Aku gabisa jelasin banyak, kamu tanya lagi aja nanti kalo mau.. kalo gamau gapapa ko, gausah dipaksain. Aku gapapa ko sel ;v. </p>'
    },
    {
      html:
      '<p>Intinya ternyata aku butuh kepastian yang ibaratnya selaluu ada tiap jam, misal kamu terlihat memerhatikan ku selalu, kamu terlihat peduli dan menenangkan ku, kamu menegurku untuk tidak seperti ini dan sebagainya. Yap, itu ga wajib, itu cuman keinginan ku. Aku ga maksa dan ga berharap lebih ko, kita kan temen doang hehehhe, aku cuman pengen jujur aja.</p>'
    },
    {
      html:
      '<p>Karena kata kamu sela, kita harus jaga komunikasi termasuk saling jujur, jangan menutupi apapun. Aku juga malu untuk meminta itu makanya aku lebih memilih simpan ini untuk hari ini, hari ulang tahunmu :) Btw, hbd ya! </p>' +
      '<h5> 15 Juli--26 Saat aku muak sama diri sendiri. Aku menyadari lagi masalahnya bukan orang lain, tapi selalu diriku. </h5>'
    },
    {
      html:
      '<p> Begini, aku tau kenapa orang memperlakukan suatu  hal kepada seseorang. Karena mereka ingin, atau sudah diperlakukan seperti itu. </p>' +
      '<p> Aku sebenarnya pengen banget diperhatikan lebih sama kamu sel, setelah aku perhatikan.. semua yang ingin ku katakan kepadamu itu selalu bersifat perhatian yang lebih. Mungkin banyak yang ga dikeluarin karena mungkin merasa malu ;v Itu bukti bahwa aku ingin diperhatikan sama kamu sela, makanya aku memberi perhatian </p>'
    },
    {
      html:
      '<p>kepadamu heheheh :3 Jadi, begitu kamu memperlakukanku, maka disana adalah kesimpulan keinginanmu yang tidak bisa diwujudkan orang. Bener ga? :p kalo iya.. kasi tau dong aku pengen kamu seneng sel hihihihi</p>'+
      '<h5> 16 Juli--26 Saat overthinking ku mulai mereda berkatmu juga. </h5>'
    },
    {
      html:
      '<p>Setelah beberapa hari akhirnya aku mulai merasa akan baik baik saja. Hmm rasanya lumayan tenang sih dari kemarin yang segala dipikirin sampai ga betah dirumah. Untungnya ada kamu yang masih tahan buat dengerin atau baca keluhan ku waktu itu, meskipun aku sendiri tidak kuat membacanya atau memikirkannya lagi🤣😭🗿🗿 Itu membuatku aga lega ditengah proses lompat jurang, meskipun nangis badag saat ngobrolin itu denganmu tapi eee maklumin aja ;v </p>'
    },
    {
      html:
      '<p>Aku benar benar mirip sama ayahku, dia juga suka berlebihan dalam menanggapi sesuatu. Dan akhirnya aku tau, sela.. selama kamu menemani keresahan itu kamu tempat yang paling nyamann buat aku ngobrol. Sekarang, aku suka mikir kalo gaada kamu, aku gimanain ya ini semua? Aduh makasih yaa cantik.. hehe aaaaa maluuuu sjsjsjsjsnau aaa lupain kata itu, there`s only once i found a pretty, kind girl like you.</p>'
    },
    {
      html:
      '<p>Really! kamu benar benar berarti dihidupku. Aku ingin kita sukses bersama, dengan pilihan yang tetap sama seperti sekarang. Karena aku ingin membuat keadaan dimana kamu tinggal mengeksplor dunia dengan pikirannn yang bebas. Yang dalam keadaan aman, dan dalam keadaan nyaman. I must win right? I think you really want that Soo, i hope you still waiting for me. But im sory if its very long :> </p>'
    },
    {
      html:
      '<p>Aku jadi tau rasanya waktu itu kamu ovt tentang diriku saat katanya aku suka yang namanya sela. Hmm begitu ya rasanya :v Aku takut banget kehilangan dirimu. Kamu masih ingat kan paragraf yang menuliskan bahwa aku takut kehilanganmu? Iyaa ee dah lah ya paham? Hehehehe. Sekarang aku sudah lumayan memahami apa yang kamu rasakan waktu itu, baik tentang kita, Atau tentang itu?  </p>'
    },
    {
      html:
      '<p>Meskipun hanya sedikit ya tapi sudah tau sakit dan capenya, apalagi sejauh kamu. Aku gabakal biarin kamu sendirian kalo kaya gitu lagi. Aku tau rasanya, aku bahkan baru sedikit tapi udah kerasa :> Soo, i`ll here for you Sela :D Aku mau tersedia buat kamu sel, jangan ragu ya buat minta nemenin, ngobrol, atau curhat apapun, atau apapun yang menurutmu bisa membantu keadaan hati kamu.  </p>'
    },
    {
      html:
      '<p>. Libatkan aku untuk membuat dirimu lebih baik. Aku gabakal pergi sama sakali, mau apapun yang kamu ceritakan. "Semua manusia juga layak dengan semua orang, namun yang membedakannya cuman satu, apakah orang itu bisa terus mempelajari orang yang ingin dia dapatkan dari sisi gelap dan sisi terangnya sampai ia menerima semua sisi orang tersebut. Semua manusia ini gk ada yang sempurna, makanya mereka saling melengkapi :> </p>'
    },
    {
      html:
      '<p>Itu kata kamu sel, aku juga berpendapat sama. Yeeheheee, anyway.. kamu tetep suka aku kan... Sel ;v </p>' +
      '<h5> 19 Juli--36 Saat aku bisa kembali tenang </h5>'
    },
    {
      html:
      '<h2>Aku punya harapan dan pesan padamu, boleh?</h2>' +
      '<p> lanjut kalo boleh </p>'
    },
    {
      html:
      '<h5>Harapan 1</h5>'+
      '<p>Jangan pergi ya, jangan pernah ubah tujuan kita ya :< Aku gampang sakit hati, kali ini.. jangan kamu sakiti ya, aku udah terlanjur jauhhh banget. Sel tau ga? ;v</p>'+
      '<p> ... </p>'+
      '<p> Sekarang pikiranku sibuk pengen tau harga properti dan tanah waduh, kejauhan banget tau. Yang dipikiranku bisakah aku membuat kita layak tinggal? Rumah impian ku, halaman impianku. Maka, jangan pergi ya? Banyak orang katanya cinta umur segini tuh suka cinta monyet, dikiranya asli, dikiranya serius tapi ujung ujungnya pisah. Aku mau buktikan itu ga relevan buat kita. Kalo kita punya masalah di perbedaan berfikir yang bisa menyebabkan kita berpisah.. </p>' 

    },
    {
      html:
      '<p> Maukah kamu saling memaafkan? Aku gatau sesakit apa masalahnya, kalo aku siap memaafkanmu dan aku siap buat benerin kesalahannya. Kalo kamu? Bagaimana??  Ahha, gapapa kalo kamu belum siap untuk jelasinnya. Aku hanya pengen kamu kasi jawaban aja dulu ya nanti setelah kamu selesai baca semua ini.</p>' +
      '<p> Sebelum lanjut, biar kamu paham semua maksudku. Aku mematok diriku untuk menjadi orang yang kaya, </p>'
    },
    {
      html:
      '<p>gaboleh biasa saja atau dibilang kaya ortu saya. Midclass stabil tapi ngikut ekonomi negara. Aku mau gaada yang bisa ganggu kekayaanku bahkan sebuah negara. Selama ga lebih dari midclass, selain dari "kaya" aku menganggap diriku gagal dalam hidup.  Standar keberhasilan ku adalah hidup dengan kestabilan, dan yang penting.. aku hidup bersamamu. Jadi, selama aku gak bisa membawaku dan kamu melebihi orang tua kita, </p>'
    },
    {
      html:
      '<p>disana aku menganggap diriku gagal. Aku takut itu, dan aku selalu takut itu. Itu adalah settingan pabrik dari otakku, gabisa diubah. Mungkin nanti bisa diubah heheheh, tapi sekarang susah banget. Kaya gimana ya, hmmm mungkin itu memang keinginan ku gitu atau apalah akwkwkwkk mungkin anda paham karena kita sama ;v</p>'
    },
    {
      html:
      '<h5>Harapan 2</h5>' +
      '<p> Sella, Kamu pasti tau ini. Seorang laki laki itu insecure kalo punya hubungan dengan seorang cewek yang lebih mapan darinya. Laki laki berevolusi dengan "Hero instings" dimana dia merasa menjadi pahlawan atas pasangannya adalah sebuah keberhasilan, diluar itu adalah sebuah kegagalan. Maaf kalo kamu ga ngerti kenapa aku ngomong gitu, begini. Saat ini, otakku sudah hidup di umur 27+. Bukan biar terlihat dewasa dan gagayaan, </p>'
    },
    {
      html:
      '<p>, tapi aku overthinking yang biasanya illegal buat umur 16. Aku sibuk mikirin dunia industri nanti, aku sibuk lihat harga aset dan properti, aku sibuk mikirin gimana nanti ngebiayain diri sendiri, orang tuaku, keluargaku, dan…KAMU? Itu membuatku lebih siap sebenarnya dengan buktinya sekarang saya berani mengatakan sudah lebih depan di anak lainnya. Aku mau sekali aja ngakuin diri sendiri buat ngerasa udah beda LV.</p>'
    },
    {
      html:
      '<p>Bagian ini nanti bisa kamu tanya aja ya :> kalo gamau juga gapapa sih Aduh aku senyum sendiriii, gamau! Anda juga harus senyum senyum sendiri aahhhs :VV Jadi kalo kamu belum paham kenapa aku berkata laki laki insecure jika ceweknya lebih mapan darinya? Karena yang aku lihat itu bukan keadaan sekarang, keadaan kita jauhh didepan, artinya aku melihat aset yang kamu miliki Sela. </p>'
    },
    {
      html:
      '<p>Seperti kamu memiliki tanah, tempat tinggalmu terjamin. Kamu punya lahan untuk bertani. Kamu punya backup ekonomi yang stabil. Dan masih banyak lagi aset yang menurut saya beban hidupmu akan lebih mudah dibanding beban hidupku karena ibaratnya seperti "aku harus membuat kestabilan dulu, baru aku berkembang, baru pikirkan mapan" sedangkan dirimu "kamu harus mapan". Diff? Hmm yes, its different. But i think you have worst things than me</p>'
    },
    {
      html:
      '<p>Bukan adu Nasib ;v maksudnya kamu juga pasti punya beban yang berat. Itu cuman pandanganku jika aku hidup di kehidupanmu. Aku cuman merasa seperti akan susah untuk mapan di keadaan Indonesia seperti ini, yang dimana aku hanya bisa kerja untuk menukar waktuku dengan uang umr, lalu hidup sampai mati. Jika kita bener bener janji, aku akan mati bersamamu. </p>'
    },
    {
      html:
      '<p>Aku pernah denger kamu udah punya nama tanah, aku tau itu warisan. Kamu punya ortu yang stabil ekonominya, aku bilang gini karena aku tau orang tuamu ASN dan PNS. Dengar dengar juga, kamu akan kursus buat ke Jepang itu kan? Itu bukti aset atau previllage yang aku gapunya sama sekali. Aku ga marah karena ngerasa ga mampu, aku bilang sekali lagi. Aku insecure sama aset yang ku miliki. Begini pikiranku:</p>'
    },
    {
      html:
      '<p>Aku mau bertani buat lanjutin penelitian, gaada lahan. Kalo aku di posisi dirimu, aku tinggal minta ke bapa buat minta lahan sebentar. Itu adalah satu dari sekian aset yang aku inginkan. Aku salah ya, aku ga nyebutin kelelahanmu hidup di keluarga yang kaya gitu. </p>' +
      '<p> Kamu sedang di build up buat naik level oleh latar belakangmu. Sedangkan aku tidak punya previllage itu. Aku pikir kamu akan lebih cepat dibanding aku. </p>'
    },
    {
      html:
      '<p>Sebenarnya kebutuhan kita berbeda, tapi dengan itu otakku memberi sinyal bahwa "Sela bisa meninggalkanmu, dia punya apapun tanpamu. Apapun disana adalah keinginan ku". Wajar kan aku semakin merasa tidak layak? Karena semua keinginan ku itu posisi kamu. Ga logis dan ga realistis kan? Itulah kekurangan cara berfikirku. Yang terlalu dalam lalu membandingkan, dan tersesat ditengah jalan yang belum bisa disebut "legal" untuk dipikirkan.</p>'
    },
    {
      html:
      '<p>Sekali lagi aku ingatkan, aku ga marah, ga iri, ga Mandang kamu jadi pusat iri dengki ku, tapi aku cuman merasa tidak layak denganmu. Aku takut dirimu begitu, sungguh. Aku takut. Sela, aku beneran takut. Aku tau potensi diriku, aku cuman ingin mengatakan apa sih yang bikin aku merasa gak layak gitu.. Aku takut ketika dirimu nanti berubah pikiran🥺 </p>'
    },
    {
      html:
      '<p>Maaf, sebenrnya kamu sudah mengatakan bahwa gabakal gitu, aku selalu kembali lagi ke ketakutan ini Sela. Omongan kamu ga sia sia ko, itu membuat ku merasa lebih baik meskipun beberapa hari aja, tapi setidaknya yakan :D. Saat baca ini, mungkin kamu merasa cape karena diriku terus mengeluhkan hal yang sama bahkan sudah kamu kasi jawabannya. Jujur, aku percaya sama kamu kok, aku percaya sama janji kita. Cuman diriku aga sulit  kesana.</p>'
    },
    {
      html:
      '<h5>Pesan dariku</h5>'+
      '<p> Sela, kamu tau kan apa itu realita sosial? Emm, aku jelasin aja singkat takutnya anda belum tau: </p>' +
      '<p> Realita sosial itu kenyataan atau fakta yang terjadi di sosial. Kaya norma, interaksi, tuntutan, nilai orang dll. Kamu tau kan realita sosial berpasangan? Dimana laki laki yang menjalankan hubungan dengan seorang cewek yang lebih mapan darinya biasanya dianggap salah? Kaya yang paling populer "mokondo". </p>'
    },
    {
      html:
      '<p>Tapi.. aku punya kemungkinan keadaan terburuk di diriku yang sudah ku analisis, yaitu : </p>' +
      '<p> Jika aku tidak bisa melewati middle class, maukah kamu tetap ada disini? Memberikan apa yang kamu punya, maksudnya dominan yang kamu punya, baik ilmu, tempat dan sebagainya agar kita bisa hidup layak. Aku tau ini salah, ini gaboleh, ini ga sesuai dengan realita. Adudhhsss aku tulis lebih jelas deh ;v </p>'
    },
    {
      html:
      '<p>Bayangkan ternyata selama yang aku usahakan dari SMP ini aku menjadi orang biasa biasa saja. Tentu untuk biaya sepeserti biaya nikah, properti dll tuh bisa dibilang mustahil (2026+) buat orang kaya gitu. Maaf, aku tau ini salah tapi, ini adalah "the way of worst story of my life". Dimana aku gabisa setara sama kamu Sel, baik dari karir, atau dari keluargamu. </p>'
    },
    {
      html:
      '<p>Aku tau sela, sekarang kamu hidup di ekonomi yang stabil. Tentu seleramu juga kan? Aku takut aku malah membawamu lebih rendah dari itu.. jika aku gagal, Sela.. apa kamu masih tetap mau? Menurutku, itu pertanyaan simple tapi banyak banget pengaruhnya ke diriku. </p>' +
      '<p>..</p>' +
      '<p>Aku gatau apa yang akan ku tanggung di dunia ini kedepannya, aku udah diharepin sama Kakaku, orang yang paling dekat denganku sebelum dirimu. </p>'
    },
    {
      html:
      '<p>Aku dipercaya bakal jadi orang terkaya di keluargaku, aku yang bakal jadi changer dari mereka karena mereka menyimpulkan saya ini pinter. Ibu saya suka bilang bahwa aku yang paling gampang diajari.. dan bahkan aku menyadari di akademik hanya aku yang pinter.</p>' +
      '<p>..</p>' +
      '<p>Apalagi ketika aku perfeksionis tentang apapun yang menyebabka kebingungan, aku takut akan dicap sebagai laki laki yang bingung. </p>'
    },
    {
      html:
      '<p>Kembali lagi ke realita sosial, kamu tau bagaimana seharusnya "laki laki" kan? Yaa, katanya dia akan menjadi pemimpin.  menanggung orang tuanya yang sudah tua, istrinya, anaknya, keluarganya. Ketika aku takut dicap laki laki yang bingung bahkan oleh seorang perempuan yang melihatku lambat dan penuh keraguan. Kalo nanti aku hanya bisa menerima hidup ini, maafkan, karena apalagi yang bisa ku lakukan selain terus bertahan?</p>'
    },
    {
      html:
      '<p>Padahal setiap hari aku memikirkan bagaimana caranya agar "layak" denganmu. Aku juga  setiap kali ingin berkata "Aku serius memperjuangkan ini", hati, lidah, dan otakku selalu tertahan oleh kenyataan bahwa semua yang aku progreskan Itu akan diukur dari angka, pekerjaan, kemapanan, tanggung jawab, isi rekening. Bukan dari seberapa tahan dan seberapa bagus ideku😔</p>'+
      '<p>..</p>'
    },{
      html:
      '<p>Aku gatau gimana nanti, aku juga dalam keadaan mustahil kok kaya gitu, aku yakin. Tapi yang aku sampaikan jelas kan? Bagaimana jika diriku gagal keluar dari mid class sementara kamu berhasil? Atau minimal masih di midclass? Aku mau kamu kasi jawaban sel hihi, kalo masih kurang jelas tentang harapan ini.. mohon ditanyakan ya? Kamu gaboleh pura pura paham, aku takut kamu salah paham dan kamu gatau itu salah paham.</p>'
    },{
      html:
      '<p>Aku pengen bener bener jawaban yang serius ya? I fvcking afraid for my future in this country and for AI wave..</p>' +
      '<p>..</p>'+
      '<p> Aku bersyukur kenal kamu, bertemu teman yang lebih dariku, aku biasanya merasa lebih stabil karena keadaan ku yang bisa dibilang "lebih aman" dari mereka. Namun setelah kenal dirimu dan keluargamu, aku jadi tau bahwa ini adalah zona nyaman yang bakal hancur jika diteruskan. </p>'
    },
    {
      html:
      '<p>Ibaratnya keadaanku saat ini memang layak, enak dan harus disyukuri. Namun jika seperti ini terus kita akan mati. Begitu maksudnya.</p>'+
      '<p>..</p>'+
      '<p>Karena aku sudah meminta harapan dan pesan untuk mu, kamu boleh katakan apa pesan dan harapanmu padaku untuk selamanya? Sekarang aku mau kita tidak peduli apa yang sedang kita omongin di umur segini, gapapa aku pengen tau. Meskipun jauhh banget wkwkkw x> </p>'
    },
    {
      html:
      '<p>Kita lanjutin ngobrolnya di WA ya, Mau? Aku pengen tau pesan dan harapanmu. Aku bakal ngasi waktu ko ke kamu, kapanpun. Kirim kode ini ke WA ku ya: A-99-S<3</p>' +
      '<h5>5 Juli--26 |  27 Juli--26. saat diriku takut kehilanganmu, Sela. Saat diriku benar benar out of mind tentang data data dari 1998 sampai setelah covid. </h5>'
    },
  ];

  var currentPage = 0;

  var coverEl      = document.getElementById('mc-book-cover');
  var guiEl        = document.getElementById('mc-book-gui');
  var textEl       = document.getElementById('mc-page-text');
  var indicatorEl  = document.getElementById('mc-page-indicator');
  var prevBtn      = document.getElementById('mc-prev-btn');
  var nextBtn      = document.getElementById('mc-next-btn');

  if (!coverEl || !guiEl) return;

  function renderPage() {
    textEl.innerHTML = pages[currentPage].html;
    indicatorEl.textContent = 'Page ' + (currentPage + 1) + ' of ' + pages.length;
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
  }

  coverEl.addEventListener('click', function () {
    coverEl.classList.add('mc-hidden');
    guiEl.classList.remove('mc-hidden');
    renderPage();
  });

  prevBtn.addEventListener('click', function () {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  });

  nextBtn.addEventListener('click', function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      renderPage();
    }
  });
});