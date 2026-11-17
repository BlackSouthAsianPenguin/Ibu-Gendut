'use strict';
/* Prices transcribed from restaurant menu photographs supplied by the owner. */
const menuItems = [["signature","Special Portion",75000,"🍛"],["signature","Full Portion",65000,"🍛"],["signature","Regular Portions",45000,"🍛"],["signature","Large Portion",55000,"🍛"],["favorites","Pork Ribs",95000,"🍖"],["favorites","Satay",65000,"🍢"],["favorites","Roasted Pork Skin",70000,"🥓"],["favorites","Fried Pork Meat",55000,"🍖"],["favorites","Fried Pork Skin",55000,"🥓"],["family","Balinese Roasted Chicken",250000,"🍗"],["family","Balinese Roasted Duck",300000,"🦆"],["family","Half Portion Roasted Chicken/Duck",175000,"🍗"],["family","Babi Genyol",200000,"🥘"],["family","Babi Kecap",200000,"🥘"],["family","Babi Guling",200000,"🥘"],["family","Babi Guling Sera Lemo",200000,"🥘"],["dessert","Medium Sized Dessert",25000,"🍉"],["dessert","Small Sized Dessert",20000,"🍉"],["dessert","Special Family Dessert",40000,"🍉"],["drinks","Small Soft Drink",5000,"🥤"],["drinks","Medium Soft Drink",10000,"🥤"],["drinks","Teh Botol",5000,"🧃"],["drinks","Mineral Water",5000,"💧"],["drinks","Ice/Hot Tea",5000,"🍵"],["drinks","Ice/Hot Orange Squash",10000,"🍊"],["drinks","Temulawak",5000,"🍹"],["drinks","Small Beer",30000,"🍺"],["drinks","Large Beer",50000,"🍺"],["drinks","Arak Bali",150000,"🍶"],["drinks","Young Coconut",20000,"🥥"],["drinks","Black Coffee",5000,"☕"],["drinks","Guava Juice",20000,"🧃"],["drinks","Mango Juice",20000,"🥭"],["drinks","Watermelon Juice",20000,"🍉"],["drinks","Orange Juice",20000,"🍊"],["drinks","Happy Soda",20000,"🥤"],["drinks","Coffee Latte",20000,"☕"]];
const menuDescriptions = {"Special Portion":["Nasi babi guling porsi spesial dengan lauk lebih banyak.","Special babi guling rice with a larger selection of sides.","다양한 반찬을 넉넉하게 곁들인 스페셜 바비 굴링 밥."],"Full Portion":["Nasi babi guling lengkap dengan kuah pendamping.","Complete babi guling rice served with accompanying soup.","국물을 곁들인 바비 굴링 한 상."],"Regular Portions":["Nasi babi guling dengan porsi reguler.","Regular serving of Balinese roast pork rice.","기본 크기의 발리식 바비 굴링 밥."],"Large Portion":["Nasi babi guling dengan porsi lebih besar.","A larger serving of Balinese roast pork rice.","푸짐한 양의 발리식 바비 굴링 밥."],"Pork Ribs":["Iga babi panggang dengan saus spesial.","Grilled pork ribs with special sauce.","특제 소스를 곁들인 구운 돼지갈비."],"Satay":["Sate babi panggang dengan saus spesial.","Grilled pork skewers with special sauce.","특제 소스와 함께 제공되는 돼지고기 꼬치."],"Roasted Pork Skin":["Kulit babi guling panggang.","Balinese roasted pork skin.","발리식 구운 돼지껍질."],"Fried Pork Meat":["Potongan daging babi goreng.","Pieces of fried pork.","튀긴 돼지고기 조각."],"Fried Pork Skin":["Kulit babi yang digoreng.","Fried pork skin.","튀긴 돼지껍질."],"Balinese Roasted Chicken":["Ayam panggang khas Bali.","Balinese-style roasted chicken.","발리식 구운 닭고기."],"Balinese Roasted Duck":["Bebek panggang khas Bali.","Balinese-style roasted duck.","발리식 구운 오리고기."],"Half Portion Roasted Chicken/Duck":["Setengah porsi ayam atau bebek panggang khas Bali.","Half portion of Balinese roasted chicken or duck.","발리식 닭고기 또는 오리고기 반 마리 분량."],"Babi Genyol":["Olahan babi genyol disajikan di hotplate.","Babi genyol served on a hot plate.","뜨거운 철판에 제공되는 바비 그뇰."],"Babi Kecap":["Olahan babi kecap disajikan di hotplate.","Sweet soy sauce pork served on a hot plate.","달콤한 간장 소스로 조리한 돼지고기 철판 요리."],"Babi Guling":["Babi guling khas Bali disajikan di hotplate.","Balinese roast pork served on a hot plate.","뜨거운 철판에 제공되는 발리식 바비 굴링."],"Babi Guling Sera Lemo":["Babi guling sera lemo disajikan di hotplate.","Babi guling sera lemo served on a hot plate.","뜨거운 철판에 제공되는 바비 굴링 세라 레모."],"Medium Sized Dessert":["Buah potong dengan satu cup es krim, porsi sedang.","Medium fruit plate served with one cup of ice cream.","과일과 아이스크림 한 컵으로 구성된 중간 크기 디저트."],"Small Sized Dessert":["Buah potong dengan satu cup es krim, porsi kecil.","Small fruit plate served with one cup of ice cream.","과일과 아이스크림 한 컵으로 구성된 작은 디저트."],"Special Family Dessert":["Piring buah potong dengan dua cup es krim untuk dinikmati bersama.","A fruit platter with two cups of ice cream, ideal for sharing.","과일과 아이스크림 두 컵을 함께 즐기는 가족용 디저트."],"Small Soft Drink":["Minuman ringan ukuran kecil.","Small bottled soft drink.","작은 크기의 탄산음료."],"Medium Soft Drink":["Minuman ringan ukuran sedang.","Medium bottled soft drink.","중간 크기의 탄산음료."],"Teh Botol":["Teh dalam kemasan botol.","Bottled tea.","병에 담긴 차 음료."],"Mineral Water":["Air mineral kemasan.","Bottled mineral water.","생수."],"Ice/Hot Tea":["Pilihan teh dingin atau hangat.","Tea served iced or hot.","차갑거나 따뜻하게 제공되는 차."],"Ice/Hot Orange Squash":["Minuman jeruk, tersedia dingin atau hangat.","Orange squash, served iced or hot.","차갑거나 따뜻하게 즐기는 오렌지 음료."],"Temulawak":["Minuman temulawak.","Traditional temulawak drink.","전통 테물라왁 음료."],"Small Beer":["Bir kemasan ukuran kecil.","Small serving of beer.","작은 크기의 맥주."],"Large Beer":["Bir kemasan ukuran besar.","Large serving of beer.","큰 크기의 맥주."],"Arak Bali":["Minuman tradisional arak Bali.","Traditional Balinese arak spirit.","발리 전통 증류주 아락."],"Young Coconut":["Air kelapa muda segar.","Fresh young coconut water.","신선한 어린 코코넛 음료."],"Black Coffee":["Kopi hitam tanpa susu.","Black coffee without milk.","우유가 들어가지 않은 블랙커피."],"Guava Juice":["Jus buah jambu.","Guava fruit juice.","구아바 주스."],"Mango Juice":["Jus buah mangga.","Mango fruit juice.","망고 주스."],"Watermelon Juice":["Jus buah semangka.","Watermelon fruit juice.","수박 주스."],"Orange Juice":["Jus buah jeruk.","Orange fruit juice.","오렌지 주스."],"Happy Soda":["Minuman soda gembira.","Sweet soda drink known locally as Happy Soda.","인도네시아식 달콤한 탄산음료 해피 소다."],"Coffee Latte":["Minuman kopi latte dengan susu.","Coffee latte with milk.","우유가 들어간 카페라테."]};
const menuLabels = {
all:['Semua','All','전체'],signature:['Nasi Babi Guling','Babi Guling Rice','바비 굴링'],favorites:['Favorit','Favorites','인기 메뉴'],family:['Paket & Lauk','Family & Sides','가족 메뉴'],dessert:['Dessert','Desserts','디저트'],drinks:['Minuman','Drinks','음료']
};
function renderMenu(filter='all') {
 const catalog=document.getElementById('menu-catalog');
 if (!catalog) return;
 const groups=filter==='all'?['signature','favorites','family','dessert','drinks']:[filter];
 const language=document.documentElement.lang;
 const idx=language==='en'?1:language==='ko'?2:0;
 catalog.replaceChildren();
 groups.forEach(group=>{
   const entries=menuItems.filter(item=>item[0]===group);
   if(!entries.length)return;
   const section=document.createElement('section');section.className='menu-category';
   const title=document.createElement('h3');title.textContent=menuLabels[group][idx];section.appendChild(title);
   const grid=document.createElement('div');grid.className='menu-product-grid';
   entries.forEach(([category,name,price,emoji])=>{
     const article=document.createElement('article');article.className='menu-product';
     const art=document.createElement('div');art.className='menu-product-art';art.setAttribute('aria-hidden','true');
     const photoNames = ["special-portion","full-portion","regular-portion","large-portion","pork-ribs","satay","roasted-pork-skin","fried-pork-meat","fried-pork-skin","balinese-roasted-chicken","balinese-roasted-duck","babi-genyol","babi-kecap","babi-guling","babi-guling-sera-lemo","medium-sized-dessert","small-sized-dessert","special-family-dessert","watermelon-juice","mango-juice","guava-juice","orange-juice","happy-soda","coffee-latte"];
     const slug=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
     art.textContent=emoji;
     if(photoNames.includes(slug)){
       const photo=document.createElement('img');photo.src='images/menu/'+slug+'.webp';photo.alt=name;photo.loading='lazy';photo.decoding='async';
       photo.onload=()=>{art.textContent='';art.appendChild(photo);};
     }
     const details=document.createElement('div');details.className='menu-product-detail';
     const heading=document.createElement('h4');heading.textContent=name;
     const priceEl=document.createElement('span');priceEl.className='menu-price';priceEl.textContent='Rp '+price.toLocaleString('id-ID');
     const description=document.createElement('p');description.className='menu-product-description';description.textContent=menuDescriptions[name]?.[idx]||'';
     details.append(heading,priceEl,description);article.append(art,details);grid.appendChild(article);
   });
   section.appendChild(grid);catalog.appendChild(section);
 });
}
document.addEventListener('DOMContentLoaded',()=>{
 const buttons=[...document.querySelectorAll('[data-menu-filter]')];
 buttons.forEach(button=>button.addEventListener('click',()=>{
  buttons.forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
  renderMenu(button.dataset.menuFilter);
 }));
 document.querySelectorAll('.lang-switch button[data-lang]').forEach(button=>button.addEventListener('click',()=>{
   const lang=button.dataset.lang;const idx=lang==='en'?1:lang==='ko'?2:0;
   buttons.forEach(b=>{if(menuLabels[b.dataset.menuFilter])b.textContent=menuLabels[b.dataset.menuFilter][idx];});
   renderMenu(buttons.find(b=>b.getAttribute('aria-pressed')==='true')?.dataset.menuFilter||'all');
 }));
 const originalSetLanguage=window.setLanguage;
 // The main script uses a top-level function declaration; it is available globally.
 if(typeof originalSetLanguage==='function')window.setLanguage=function(lang){
   originalSetLanguage(lang);
   buttons.forEach(button=>{const values=menuLabels[button.dataset.menuFilter];if(values)button.textContent=values[lang==='en'?1:lang==='ko'?2:0];});
   renderMenu(buttons.find(b=>b.getAttribute('aria-pressed')==='true')?.dataset.menuFilter||'all');
 };
 renderMenu();
});
