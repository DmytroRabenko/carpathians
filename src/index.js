//mob menu

const mobMenuIcon = document.querySelector('.mob_nav');
if(mobMenuIcon){
  const nav = document.querySelector('.nav');
  mobMenuIcon.addEventListener('click', () => {
    document.body.classList.toggle('_noScroll');
    nav.classList.toggle('_active');
    mobMenuIcon.classList.toggle('_active');
  })
};


//add class on scroll

const addClassOnScroll = (elementTag, scrollThreshold, className) => {
  const element = document.querySelector(elementTag);

  if(element){
    window.addEventListener('scroll', function() {
      // Визначаємо відстань, на яку була прокручена сторінка
      const scrolledPixels = window.scrollY;
      // Якщо відстань прокручування більше або дорівнює заданому порогу (scrollThreshold)
      if (scrolledPixels > scrollThreshold) {
          // Додаємо клас до елементу
          element.classList.add(className);
      } else {
          // Видаляємо клас, якщо відстань менше порогу
          element.classList.remove(className);
      }
    });
    if(element.id === 'up_button'){
      element.onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      };
    }
  }
}  
addClassOnScroll('.header_content', 1, 'header_active');
addClassOnScroll('.mob_nav', 1, '_act');
//addClassOnScroll('.up_button', 1000, 'hide');


//fool Screen
/*
  const zoomPhotos = document.querySelectorAll('.visit_photo');

  if(zoomPhotos.length > 0){
    for(let i = 0; i < zoomPhotos.length; i++){
      zoomPhotos[i].addEventListener('click', () => {
        zoomPhotos[i].classList.toggle('_active');
        document.body.classList.toggle('_noScroll');//щоб не скролився боді при відкритому меню
      })
    }
  }


//animation
const animateElements = document.querySelectorAll('._animate');
if (animateElements.length > 0) {
    const animeOnScroll = () => {
        for (let index = 0; index < animateElements.length; index++) {
            const animateElement = animateElements[index];
            const animateElementHeight = animateElement.offsetHeight;
            const animateElementOffset = offset(animateElement).top;
            const animateStart = 4;

            let animItemPoint = window.innerHeight - animateElementHeight / animateStart;
            if (animateElementHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animateStart;
            }

            if ((pageYOffset > animateElementOffset - animItemPoint) && pageYOffset < (animateElementOffset + animateElementHeight)){
                animateElement.classList.add('_active');
            } else {
              if(!animateElement.classList.contains('_one_animate')){
                animateElement.classList.remove('_active');
              }
              
            }
        }
    };
    const offset = (el) => {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    window.addEventListener('scroll', animeOnScroll);
    setTimeout(animeOnScroll, 1000)
}
*/
//Parallax
/*
window.onload = () => {
  const parallax = document.querySelector('.parallax');
  //перевіряємо, чи є цей об'єкт
  if (parallax) {
      const content = document.querySelector('.content');
      const topImg = document.querySelector('.top_image');
      const bottomImg = document.querySelector('.bottom_image');
      //коефіцієнти переміщення
      const forTopImg = 40;
      const forBottomImg = 20;
      const speedAnimation = 0.05;

      let positionX = 0, positionY = 0, coordXprocent = 0, coordYprocent = 0;

      const setMouseParallaxStyle = () => {
          const distX = coordXprocent - positionX;
          const distY = coordYprocent - positionY;

          positionX = positionX + (distX * speedAnimation);
          positionY = positionY + (distY * speedAnimation);
          //передаємо стилі
          topImg.style.transform = `translate(${positionX / forTopImg}%, ${positionY / forTopImg}%)`;
          bottomImg.style.transform = `translate(${positionX / forBottomImg}%, ${positionY / forBottomImg}%)`;
          //метод вказує браузеру, що відбудеться анімація, в якості аргумента приймає ф-ю, яка виконається перед анімацією
          requestAnimationFrame(setMouseParallaxStyle);
      }

      setMouseParallaxStyle();

      parallax.addEventListener('mousemove', function (e) {
          //отримуємо ширину і основного блока
          const parallaxWidth = parallax.offsetWidth;
          const parallaxHeight = parallax.offsetHeight;
          //встяновлюємо курсор по середині нульовими кооринатами
          const coordX = e.pageX - parallaxWidth / 2;
          const coordY = e.pageY - parallaxHeight / 2;
          //заповнюємо змінні значеннями в відсотках, яку частину екрана подолав курсор відносно центру
          coordXprocent = coordX / parallaxWidth * 100;
          coordYprocent = coordY / parallaxHeight * 100;
      });
  }
}
*/

//Slider
/*
let slideIndex = 1;
const nextSlide = () => {
    showSlides(slideIndex += 1);
}
const previousSlide = () => {
    showSlides(slideIndex -= 1);
}
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}
const showSlides = (n) => {
    let slides = document.querySelectorAll(".item");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
document.querySelector('.previous_slide').addEventListener('click', previousSlide);
document.querySelector('.next_slide').addEventListener('click', nextSlide);
showSlides(slideIndex);
setInterval(nextSlide, 7000);
*/



const visitPlaces = [
  {
    title: 'Bukovel',
    description: 'Bukovel is the largest and most touristic ski resort in Ukraine, located at an altitude of 920 meters (3,018 feet) above sea level. It has a well-developed infrastructure and magnificent mountain views that make you feel as if in the winter wonderland. In summer, people come here for wellness and SPA activities. Meanwhile, from the beginning of November till April, the village is covered in snow and constitutes a great destination for winter sports and leisure.',
    url: './assets/visit_place/bukovel.jpg',
    href: 'https://uk.wikipedia.org/wiki/%D0%91%D1%83%D0%BA%D0%BE%D0%B2%D0%B5%D0%BB%D1%8C'
  },
  {
    title: 'Dzembronya',
    description: 'There are only 250 people, who live in Dzembronya. Its length is only 10 kilometers (6.2 miles). However, this tiny village is considered to be the most mountainous settlement in Ukraine — 898 meters (2,946 feet) high. The residents of the village have preserved the ancient Ukrainian customs and traditions, which one can observe all year round. Also, Dzembronya attracts tourists from different corners of the world because of its incredibly beautiful nature and dizzying fresh air. Many hiking trails to the Chornohora ridge start exactly from here.',
    url: './assets/visit_place/dzembronia.jpeg',
    href: 'https://uk.wikipedia.org/wiki/%D0%94%D0%B7%D0%B5%D0%BC%D0%B1%D1%80%D0%BE%D0%BD%D1%8F_(%D1%81%D0%B5%D0%BB%D0%BE)'
  },
  {
    title: 'Valley of daffodils',
    description: 'If you want to capture the fascinating daffodils in bloom, come to the Carpathians in May. It is the only place in the world, where the flower grows at an altitude of 200 meters (656 feet). All other fields, for instance, ones in the Alps are located at more than 2,000 meters (6,561 feet) above sea level. The valley is a part of the Carpathian Biosphere Reserve since 1992, therefore, it is protected by UNESCO. Every year, tens of thousands of travellers come to this area to spot the unique and inspiring phenomena.',
    url: './assets/visit_place/daffodils.jpg',
    href: 'https://discover.ua/en/locations/dolina-narcissov'
  },
  {
    title: 'Synevir Lake',
    description: 'Synevir Lake is a real natural wonder of Ukraine. It was formed about 10 thousand years ago as a result of the powerful rock shifts. Locals call the lake the Sea Eye because a small island in the middle resembles an eye pupil. It is associated with many legends and mystical stories. Moreover, a lot of people believe it to be a place of power and come here to gain strength and energy. Within a short distance there`s a village of the same name (Synevir). Tourists can rent a cottage and stay as long as they like to recover from the crazy pace of life.',
    url: './assets/visit_place/sunevir.webp',
    href: 'https://en.wikipedia.org/wiki/Synevyr'
  },
  {
    title: 'Palanok Castle',
    description: 'Palanok Castle occupies an old 68-meter-high (223 feet) hill, that many years ago used to be a volcano. The building itself was constructed in the best traditions of medieval defence architecture. Although there`s no exact date when the fortress was built, the first mention of it traces back to the 11th century. Since that time, it has changed dozens of owners and rulers and survived many battles and wars. Nowadays, it is the highest point in the Mukachevo town and a must-visit spot for everyone.',
    url: './assets/visit_place/palanok.jpg',
    href: 'https://en.wikipedia.org/wiki/Palanok_Castle'
  },
  {
    title: 'Shenborn Palace',
    description: 'Among the amazing architectural sights of Western Ukraine, one can distinguish a fairy tale Shenborn Palace. It is preserved almost in its original form both inside and outside. Special attention should be paid to the peculiar architecture of the castle. According to the astronomical principles, each of the elements of the façade has a special symbolic interpretation. Thus, there are exactly 365 windows in the castle, all representing the days of the year. In the case of a leap year, Shenborn Palace has another immured window.',
    url: './assets/visit_place/shenborn.jpeg',
    href: 'https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B0%D1%86_%D0%B3%D1%80%D0%B0%D1%84%D1%96%D0%B2_%D0%A8%D0%B5%D0%BD%D0%B1%D0%BE%D1%80%D0%BD%D1%96%D0%B2'
  },
  {
    title: 'Abandoned observatory',
    description: 'An abandoned observatory on the top of the Pip Ivan Mountain is also known as White Elephant (Biały Słoń). It has its name because in winter the building gets covered in snow from bottom to top and from a far distance resembles an animal. The observatory itself was built in 1938 by the Polish and served as an astronomical and meteorological station. But when the Second World War started, it was left and currently remains abandoned. This is what attracts travellers.',
    url: './assets/visit_place/observatory.jpg',
    href: 'https://green-ukraine.com/the-observatory-pip-ivan'
  },
  {
    title: 'Hoverla',
    description: 'Hoverla is definitely the best destination for those who are in love with extreme activities and hiking. It is the highest mountain of the Ukrainian Carpathians, with a height of 2,061 meters (6761 feet). The first tourist route to Hoverla was laid in the 1880s. Now, thousands of tourists make their way to the very peak. If the sky is clear, from one side, one can see the city of Ivano-Frankivsk, which is 151 km (94 miles) away. From the other side, the view opens on the Romanian city of Sighetu Marmației.',
    url: './assets/visit_place/hoverla.jpeg',
    href: 'https://en.wikipedia.org/wiki/Hoverla'
  },
  {
    title: 'Shypit Waterfall',
    description: 'Shypit Waterfall is among the most visited attractions in the Ukrainian Carpathians. A favourite place of tent camps and tourist sites. It is located in the mountains on the outskirts of the village of Pylypets (a ski resort with the longest trails in the country). Its received the name “real miracle of nature” due to the loud noise heard from afar that sounds like a whisper (shypit in Ukrainian). The waterfall is especially beautiful in the spring, during the melting of snow in winter or in the autumn, during the rainy season.',
    url: './assets/visit_place/shypit.jpg',
    href: 'https://en.wikipedia.org/wiki/Shypit'
  },
  {
    title: 'Brebeneskul Lake',
    description: 'High in the valleys of the Carpathian Mountains, one can see the highest mountain lake in Ukraine that lies at an altitude of 1,801 meters (5,908 feet). Therefore, the water in the Brebeneskul Lake is always freezing cold even during the hot summer. Tourists never swim in it and rarely stay nearby; the area has a glacial origin. Brebeneskul is nothing but a picturesque spot to take great photos. Nevertheless, it is here one can truly appreciate the beauty of virgin nature.',
    url: './assets/visit_place/berbeneskul.jpg',
    href: 'https://en.wikipedia.org/wiki/Lake_Brebeneskul'
  }
]

const nextSlider = () => {
  if(currentIndex < 9){
    showActivePlace(currentIndex += 1);
  }
  else{
    showActivePlace(currentIndex = 1);
  }
}
const previousSlider = () => {
  if(currentIndex > 1){
    showActivePlace(currentIndex -= 1);
  }
  else{
    showActivePlace(currentIndex = 9);
  }
}

let currentIndex = 0;
const gallery = document.querySelector('.places .gallery');
const photo = document.querySelector('.places .photo');
const currentPhoto = document.createElement('img');
photo.append(currentPhoto);




const previousSlide = document.querySelector('.previous_slide');
previousSlide.addEventListener('click', previousSlider);
const nextSlide = document.querySelector('.next_slide');
nextSlide.addEventListener('click', nextSlider);

//swipe
let touchStartX = 0;
const touchThreshold = 50;

photo.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
}, {passive: true});

photo.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) >= touchThreshold) {
    if (deltaX > 0) {
      nextSlider();
    } else {
      previousSlider();
    }
    showActivePlace(currentIndex);
  }
}, {passive: true});





const showActivePlace = () => {
    currentPhoto.src = visitPlaces[currentIndex].url;
    currentPhoto.alt = visitPlaces[currentIndex].title;
    document.querySelector('.places .h5').textContent = visitPlaces[currentIndex].title;
    document.querySelector('.places .description').textContent = visitPlaces[currentIndex].description; 
}

const showVisitPlaces = (data) => {// if(Array.isArray(data) && data.length > 0){

  data.forEach((el, i) => {
      const img_container = document.createElement('div');
      const galleryImg = document.createElement('img');
      galleryImg.classList.add('gallery_img');
      galleryImg.src = `${el.url}`;
      galleryImg.alt = el.title;
      gallery.append(img_container);
      img_container.append(galleryImg);
      galleryImg.addEventListener('click', () => {
        currentIndex = i;
        document.querySelectorAll('.gallery_img').forEach((el) => {
          if(el.classList.contains('active')){
            el.classList.remove('active')
          }
        })
        galleryImg.classList.add('active');
        
        showActivePlace(currentIndex);
      })  
  })
  showActivePlace(currentIndex);
}





/*
function animateSlider() {
  const slideWidth = slider.children[0].clientWidth;
  const offset = -slideWidth * slideIndex;
  isAnimating = true;
  slider.style.transition = 'transform 0.3s ease';
  slider.style.transform = `translateX(${offset}px)`;
  setTimeout(() => {
    slider.style.transition = '';
    isAnimating = false;
  }, 300);
}
*/





showVisitPlaces(visitPlaces);

