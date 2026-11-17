'use strict';
/* Multilingual content — Indonesian (default), English, Korean. */
const translations = {
  "navAbout": [
    "About",
    "소개"
  ],
  "navMenu": [
    "Menu",
    "메뉴"
  ],
  "navReviews": [
    "Reviews",
    "리뷰"
  ],
  "navLocation": [
    "Location",
    "위치"
  ],
  "heroLead": [
    "Enjoy Balinese roast pork, pork satay, and pork ribs at Babi Guling Ibu Gendut in Pengosekan, Ubud.",
    "우붓 펭오세칸의 이부 겐둣에서 발리식 바비 굴링, 돼지고기 사테와 돼지갈비를 즐겨보세요."
  ],
  "exploreMenu": [
    "Explore Menu ↗",
    "메뉴 보기 ↗"
  ],
  "directions": [
    "📍 Get Directions",
    "📍 길찾기"
  ],
  "welcome": [
    "Welcome",
    "환영합니다"
  ],
  "aboutTitle": [
    "A Taste of Bali in Every Bite.",
    "한 접시에 담긴 발리의 맛."
  ],
  "aboutDesc": [
    "Located on Jalan Raya Pengosekan in Mas, Ubud, Babi Guling Ibu Gendut serves Balinese pork specialties. From roast pork rice to satay and ribs, it is a dining option for visitors to Ubud.",
    "우붓 마스의 잘란 라야 펭오세칸에 위치한 이부 겐둣은 바비 굴링, 사테, 돼지갈비 등 발리식 돼지고기 요리를 선보입니다."
  ],
  "spices": [
    "Balinese Spices",
    "발리 향신료"
  ],
  "spicesDesc": [
    "Distinctive Balinese spices and flavors.",
    "발리 고유의 향신료와 풍미."
  ],
  "meats": [
    "Meat Specialties",
    "고기 요리"
  ],
  "meatsDesc": [
    "Roast pork, pork satay, and pork ribs.",
    "바비 굴링, 돼지고기 사테, 돼지갈비."
  ],
  "inUbud": [
    "In Ubud",
    "우붓에서"
  ],
  "inUbudDesc": [
    "Located in Mas, Pengosekan, Gianyar.",
    "기안야르 펭오세칸 마스 지역에 위치합니다."
  ],
  "menuLabel": [
    "Mentioned in Guest Reviews",
    "방문객 리뷰 속 메뉴"
  ],
  "menuTitle": [
    "Dishes Guests Talk About.",
    "방문객들이 이야기하는 메뉴."
  ],
  "menuDesc": [
    "The dishes below have been mentioned in visitor reviews collected from Google. Availability, selection, and prices may change; please confirm with the restaurant.",
    "다음 요리는 Google 방문객 리뷰에 언급되었습니다. 제공 여부와 가격은 변경될 수 있으니 매장에 확인해 주세요."
  ],
  "favorite": [
    "Guest Favorite",
    "인기 메뉴"
  ],
  "porkDish": [
    "Pork Dish",
    "돼지고기 요리"
  ],
  "sideDish": [
    "Side Dish",
    "곁들임 메뉴"
  ],
  "otherDish": [
    "Other Choices",
    "기타 메뉴"
  ],
  "drinks": [
    "Drinks",
    "음료"
  ],
  "rice": [
    "Babi Guling Mixed Rice",
    "바비 굴링 모둠 덮밥"
  ],
  "riceDesc": [
    "Rice served with Balinese roast pork and traditional side dishes.",
    "발리식 구운 돼지고기와 다양한 전통 반찬을 곁들인 밥."
  ],
  "satay": [
    "Pork Satay",
    "돼지고기 사테"
  ],
  "satayDesc": [
    "Grilled pork skewers mentioned in guest reviews.",
    "방문객 리뷰에 언급된 돼지고기 꼬치구이."
  ],
  "ribs": [
    "Pork Ribs",
    "돼지갈비"
  ],
  "ribsDesc": [
    "A pork rib specialty.",
    "돼지갈비 요리."
  ],
  "cukiokDesc": [
    "A pork trotter dish mentioned by guests.",
    "방문객이 언급한 돼지족 요리."
  ],
  "soup": [
    "Accompanying Soup",
    "곁들임 수프"
  ],
  "soupDesc": [
    "Soup reported as an accompaniment to selected dishes.",
    "일부 메뉴에 곁들여 제공된 수프."
  ],
  "duck": [
    "Duck Dish",
    "오리 요리"
  ],
  "duckDesc": [
    "Some reviews mention duck dishes; please ask about availability.",
    "일부 리뷰에 오리 요리가 언급됩니다. 제공 여부를 확인해 주세요."
  ],
  "juice": [
    "Fruit Juice",
    "과일 주스"
  ],
  "juiceDesc": [
    "Fruit juice drinks mentioned by visitors.",
    "방문객이 언급한 과일 주스."
  ],
  "sodaDesc": [
    "A soda drink mentioned by visitors.",
    "방문객이 언급한 탄산음료."
  ],
  "menuNote": [
    "This is not a complete official menu.",
    "공식 전체 메뉴가 아닙니다."
  ],
  "readGoogle": [
    "Check Reviews on Google Maps ↗",
    "Google 지도 리뷰 확인 ↗"
  ],
  "guestVoice": [
    "What Guests Say",
    "방문객 후기"
  ],
  "reviewsTitle": [
    "Reviews on Google.",
    "Google 리뷰."
  ],
  "reviewsDesc": [
    "Read guest experiences and share your own visit directly on Google Maps.",
    "Google 지도에서 방문객의 경험을 읽고 직접 리뷰를 남겨보세요."
  ],
  "viewReviews": [
    "⭐ Read Google Reviews",
    "⭐ Google 리뷰 보기"
  ],
  "writeReview": [
    "✍️ Write a Google Review",
    "✍️ Google 리뷰 작성"
  ],
  "reviewNote": [
    "This link opens Google Maps. Select the restaurant listing, then choose “Write a review.”",
    "Google 지도가 열립니다. 식당 정보를 선택한 뒤 '리뷰 작성'을 누르세요."
  ],
  "reviewPanelLabel": [
    "Google Maps & Reviews",
    "Google 지도 및 리뷰"
  ],
  "reviewPanelTitle": [
    "Stories from Our Guests",
    "방문객들의 이야기"
  ],
  "reviewPanelDesc": [
    "See current ratings, photos, and reviews directly on Google Maps. We do not present a fixed rating as a live score.",
    "Google 지도에서 최신 평점, 사진, 리뷰를 확인하세요. 이 사이트는 고정 평점을 실시간 점수로 표시하지 않습니다."
  ],
  "openReviews": [
    "Open Guest Reviews ↗",
    "방문객 리뷰 보기 ↗"
  ],
  "findUs": [
    "Find Us",
    "찾아오시는 길"
  ],
  "visitTitle": [
    "Visit Us in Ubud.",
    "우붓에서 만나요."
  ],
  "address": [
    "Address",
    "주소"
  ],
  "hours": [
    "Opening Hours",
    "영업시간"
  ],
  "hoursDesc": [
    "Please check current opening hours on Google Maps before visiting.",
    "방문 전 Google 지도에서 최신 영업시간을 확인해 주세요."
  ],
  "route": [
    "🧭 Directions to Restaurant",
    "🧭 식당 길찾기"
  ],
  "openMaps": [
    "Open Google Maps ↗",
    "Google 지도 열기 ↗"
  ],
  "stickyRoute": [
    "📍 Directions to Restaurant",
    "📍 식당 길찾기"
  ],
  "footerText": [
    "Made with ♥ for Balinese food",
    "발리 음식을 사랑하는 마음으로 ♥"
  ]
};
const heroTranslations = {"en":"Authentic <em>Balinese Roast Pork</em>.","ko":"정통 발리식 <em>바비 굴링</em>의 맛."};
const allowedLanguages = ['id','en','ko'];
function setLanguage(lang) {
  if (!allowedLanguages.includes(lang)) lang = 'id';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const values = translations[el.dataset.i18n];
    if (!values) return;
    if (!el.hasAttribute('data-i18n-original')) el.setAttribute('data-i18n-original', el.textContent);
    el.textContent = lang === 'id' ? el.getAttribute('data-i18n-original') : values[lang === 'en' ? 0 : 1];
  });
  const hero = document.querySelector('[data-i18n-html="heroTitle"]');
  if (hero) {
    if (!hero.dataset.i18nOriginal) hero.dataset.i18nOriginal = hero.innerHTML;
    hero.innerHTML = lang === 'id' ? hero.dataset.i18nOriginal : heroTranslations[lang];
  }
  const switcher = document.querySelector('.lang-switch');
  if (switcher) {
    switcher.dataset.active = lang;
    switcher.querySelectorAll('button[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
  }
  try { localStorage.setItem('ibu-gendut-language', lang); } catch (_) {}
}
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  document.querySelectorAll('.lang-switch button[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  let saved = 'id';
  try { saved = localStorage.getItem('ibu-gendut-language') || 'id'; } catch (_) {}
  setLanguage(saved);
});
