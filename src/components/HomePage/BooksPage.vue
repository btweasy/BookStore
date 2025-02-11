<template>
  <div class="books-page">
    <div class="blok">
      <button class="back-button" @click="$router.push('/home')">← Back</button>
      <h2 class="best-seller-title">Best Seller</h2>
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
      books: [
        { id: 1, title: "Dune", author: "Frank Herbert", price: "87,75", image: "/books/9781101658055.webp" },
        { id: 2, title: "1984", author: "George Orwell", price: "35,75", image: "/books/9780451524935.webp" },
        { id: 3, title: "Ikigai", author: "Hector Garcia", price: "36,00", image: "/books/9780143130727.webp" },
        { id: 4, title: "A Court of Thorns and Roses", author: "Sarah J. Maas", price: "38,00", image: "/books/9781635575569.webp" },
        { id: 5, title: "The Serviceberry", author: "Robin Wall Kimmerer", price: "30,00", image: "/books/9781668072240.jpg" },
        { id: 6, title: "Fahrenheit 451", author: "Ray Bradbury", price: "27,00", image: "/books/9781451673319.webp" },
        { id: 7, title: "James", author: "Percival Everett", price: "40,75", image: "/books/9780385550369.webp" },
        { id: 8, title: "Onyx Storm", author: "Rebecca Yarros", price: "39,95", image: "/books/onyx-storm-b-iext174978940.webp" },
        { id: 9, title: "Black in Blues", author: "Imani Perry", price: "33,75", image: "/books/9780062977397 (1).webp" },
        { id: 10, title: "Romeo and Juliet", author: "William Shakespeare", price: "30,00", image: "/books/518112_media-0.webp" },
        { id: 11, title: "Olağanüstü Bir Gece", author: "Stefan Zweig", price: "27,00", image: "/books/9789750754791_201.jpg" },
        { id: 12, title: "Genç Werther'in Acıları", author: "Goethe", price: "40,75", image: "/books/9786258401868_Genc-Wertherin-Acilari.jpg" }
      ],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    }
  }
};
</script>


<style scoped>
.books-page {
  padding: 20px;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
}


.blok {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}


.back-button {
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
  white-space: nowrap;
}


.back-button:hover {
    background: #9f1128;
    transform: scale(1.05);
}

.best-seller-title {
    color:  #EF2346;
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    width: 100%;
    display: block;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  justify-content: center;
}

.book-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
}

.book-card:hover {
  background: #e5e2e2;
  transform: translateY(-5px);
}

.book-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.book-info {
  margin-top: 10px;
}

.book-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.book-author {
  font-size: 14px;
  color: #777;
}

.book-price {
  font-size: 16px;
  font-weight: bold;
  color: #6251DD;
  margin-top: 5px;
}
</style>
