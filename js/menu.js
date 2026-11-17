'use strict';
/* Prices transcribed from restaurant menu photographs supplied by the owner. */
const menuItems = [["signature","Special Portion",75000,"🍛"],["signature","Full Portion",65000,"🍛"],["signature","Regular Portions",45000,"🍛"],["signature","Large Portion",55000,"🍛"],["favorites","Pork Ribs",95000,"🍖"],["favorites","Satay",65000,"🍢"],["favorites","Roasted Pork Skin",70000,"🥓"],["favorites","Fried Pork Meat",55000,"🍖"],["favorites","Fried Pork Skin",55000,"🥓"],["family","Balinese Roasted Chicken",250000,"🍗"],["family","Balinese Roasted Duck",300000,"🦆"],["family","Half Portion Roasted Chicken/Duck",175000,"🍗"],["family","Babi Genyol",200000,"🥘"],["family","Babi Kecap",200000,"🥘"],["family","Babi Guling",200000,"🥘"],["family","Babi Guling Sera Lemo",200000,"🥘"],["dessert","Medium Sized Dessert",25000,"🍉"],["dessert","Small Sized Dessert",20000,"🍉"],["dessert","Special Family Dessert",40000,"🍉"],["drinks","Small Soft Drink",5000,"🥤"],["drinks","Medium Soft Drink",10000,"🥤"],["drinks","Teh Botol",5000,"🧃"],["drinks","Mineral Water",5000,"💧"],["drinks","Ice/Hot Tea",5000,"🍵"],["drinks","Ice/Hot Orange Squash",10000,"🍊"],["drinks","Temulawak",5000,"🍹"],["drinks","Small Beer",30000,"🍺"],["drinks","Large Beer",50000,"🍺"],["drinks","Arak Bali",150000,"🍶"],["drinks","Young Coconut",20000,"🥥"],["drinks","Black Coffee",5000,"☕"],["drinks","Guava Juice",20000,"🧃"],["drinks","Mango Juice",20000,"🥭"],["drinks","Watermelon Juice",20000,"🍉"],["drinks","Orange Juice",20000,"🍊"],["drinks","Happy Soda",20000,"🥤"],["drinks","Coffee Latte",20000,"☕"]];
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
     const art=document.createElement('div');art.className='menu-product-art';art.textContent=emoji;art.setAttribute('aria-hidden','true');
     const details=document.createElement('div');details.className='menu-product-detail';
     const heading=document.createElement('h4');heading.textContent=name;
     const priceEl=document.createElement('span');priceEl.className='menu-price';priceEl.textContent='Rp '+price.toLocaleString('id-ID');
     details.append(heading,priceEl);article.append(art,details);grid.appendChild(article);
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
 const originalSetLanguage=window.setLanguage;
 // The main script uses a top-level function declaration; it is available globally.
 if(typeof originalSetLanguage==='function')window.setLanguage=function(lang){
   originalSetLanguage(lang);
   buttons.forEach(button=>{const values=menuLabels[button.dataset.menuFilter];if(values)button.textContent=values[lang==='en'?1:lang==='ko'?2:0];});
   renderMenu(buttons.find(b=>b.getAttribute('aria-pressed')==='true')?.dataset.menuFilter||'all');
 };
 renderMenu();
});
