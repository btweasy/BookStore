<template>
  <!-- slider -->
  <div class="slider">
   <div class="slides" ref="slides">
     <div v-for="(image, index) in images" :key="index" class="slide" @click="openBookInfo(index)">
       <img :src="image" :alt="`Slide ${index + 1}`" />
     </div>
   </div>
   <div class="controls">
     <button @click="prevSlide">❮</button>
     <button @click="nextSlide">❯</button>
   </div>
   <div class="dots">
     <span
       v-for="(image, index) in images"
       :key="index"
       :class="{ active: index === currentIndex }"
       @click="goToSlide(index)"
     ></span>
   </div>
 </div>

  <!-- Best Seller -->
  <div class="best-seller-container">
   <div class="blok">
     <h2>Best Seller</h2>
     <router-link to="/books" class="view-all">View All</router-link>
   </div>
   <div class="book-list">
    <router-link v-for="book in books" :key="book.id" :to="`/book/${book.id}`" class="book-card">
    <img :src="book.image" :alt="book.title" class="book-image" />
    <div class="book-info">
      <h3 class="book-title">{{ book.title }}</h3>
      <p class="book-author">{{ book.author }}</p>
      <p class="book-price">{{ book.price }} $</p>
    </div>
  </router-link>
   </div>
 </div>
      


                                                                                                            
</template>

<script>
export default {
data() {
  return {
    images: [
      "/images/BlackInBlues-2048x600_v2-alt.webp",
      "/images/Ebook-HERO-desk-P_(2).webp",
      "/images/photo-1736551944411-15f24f92b19f.avif",
    ],
    books: [
      { id: 1, title: "Dune", author: "Frank Herbert", price: "87,75", image: "/books/9781101658055.webp" },
      { id: 2, title: "1984", author: "George Orwell", price: "35,75", image: "/books/9780451524935.webp" },
      { id: 3, title: "Ikigai", author: "Hector Garcia", price: "36,00", image: "/books/9780143130727.webp" },
      { id: 4, title: "A Court of Thorns and Roses", author: "Sarah J. Maas", price: "38,00", image: "/books/9781635575569.webp" },
      ],
    currentIndex: 0, 
    visibleBooks: [],
    interval: null,
    showAllBooks: false
  };
},
methods: {
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlidePosition();
  },
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlidePosition();
  },
  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlidePosition();
  },
  updateSlidePosition() {
    const slides = this.$refs.slides;
    if (slides) { // Перевіряємо, чи існує елемент
      const offset = -(this.currentIndex * 100);
      slides.style.transform = `translateX(${offset}%)`;
    }
  },
  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  },
  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },
  goToBooksPage() {
    this.$router.push("/books");
  }
},
mounted() {
  this.startAutoSlide();
},
beforeUnmount() {
  this.stopAutoSlide();
}
};
</script>

<style scoped>


/* Slider styles */
.slider {
position: relative;
width: 100%;
height: 60vh;
overflow: hidden;
background-color: #f0f0f0;
}

.slides {
display: flex;
transition: transform 0.5s ease-in-out;
width: 100%;
height: 100%;
}

.slide {
flex: 0 0 100%;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
      
}

.slide img {		   
width: 100%;
height: 100%;
object-fit: cover;
}

.controls {
position: absolute;
top: 50%;
width: 100%;
display: flex;
justify-content: space-between;
transform: translateY(-50%);
}

.controls button {
background: none;
color: white;
border: none;
padding: 10px;
cursor: pointer;
font-size: 24px;
transition: transform 0.3s ease;
}

.controls button:hover {
transform: scale(1.5);
color: #f0f0f0;
}

.dots {
position: absolute;
bottom: 10px;
width: 100%;
text-align: center;
}

.dots span {
height: 10px;
width: 10px;
margin: 0 5px;
display: inline-block;
background-color: #c7c5d1;
border-radius: 50%;
cursor: pointer;
}

.dots .active {
background-color: #4339fa;
}

/* Best Seller */
.best-seller-container {
padding: 20px;
border-radius: 10px;
}

.blok {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}



h2 {
  font-size: 26px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
  letter-spacing: 1px;
}

.view-all {
  background: #EF2346;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 12px;
  transition: background 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}
.view-all:hover {
  background: #9f1128;
  transform: scale(1.05);
}


.book-list {
display: flex;
flex-wrap: wrap;
gap: 50px;
}

.book-card {
display: flex;
align-items: center;
background: #f8f8ff;
padding: 10px;
border-radius: 8px;
width: 300px;
height: 120px;
cursor: pointer; 
transition: background 0.3s, transform 0.2s;
text-decoration: none;
}

.book-card:hover {
background: #e6e6ff; 
transform: translateY(-5px);
}


.book-image {
width: 80px;
height: 115px;
object-fit: cover;
border-radius: 5px;
}

.book-info {
display: flex;
flex-direction: column;
margin-left: 15px;
}


.book-title {
font-weight: bold;
font-size: 16px;
margin: 5px 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 150px; 
color:#392c98;
}

.book-author {
font-size: 14px;
color: #666;
}

.book-price {
font-size: 16px;
font-weight: bold;
color:#6251DD;
}

</style>

