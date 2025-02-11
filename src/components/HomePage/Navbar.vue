<template>
  <nav class="navbar">
<<<<<<< HEAD
    <!-- Logo -->
    <div class="logo">
      <img src="/navbar/logo.jpg" alt="Bookstore Logo" class="logo-img" />
    </div>

    <!-- Search Bar -->
=======
    <div class="logo">
      <img src="/navbar/logo.jpg" @click="goToBooksPage" alt="Bookstore Logo" class="logo-img" />
    </div>

>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
    <div class="search-container">
      <input type="text" placeholder="Search" class="search-input" />
    </div>

<<<<<<< HEAD
    <!-- Icons (PNG) -->
    <div class="icons">
      <button class="icon-btn">
        <img src="/navbar/user.png" alt="User" class="icon-img" />
      </button>
      <button class="icon-btn">
        <img src="/navbar/heart.jpg" alt="Favorites" class="icon-img" />
      </button>
      <button class="icon-btn" >
=======
    <div class="icons">
      <div class="profile-container">
        <button class="icon-btn" @click="toggleMenu">
          <img src="/navbar/user.png" alt="User" class="icon-img" />
        </button>
        <div v-if="menuOpen" class="dropdown-menu">

          <p class="username">
            <span class="greeting">Welcome</span><br>
            <span class="user-name">{{ username }}</span>
          </p>

          <button class="logout-btn" @click="logout">Выйти</button>
        </div>
      </div>

      <button class="icon-btn">
        <img src="/navbar/heart.jpg" alt="Favorites" class="icon-img" />
      </button>

      <button class="icon-btn">
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
        <img src="/navbar/cart.jpg" alt="Cart" class="icon-img" />
      </button>
    </div>
  </nav>
</template>

<<<<<<< HEAD
<style scoped>
/* Navbar */
.navbar {
position: sticky;
top: 0;
left: 0;
width: 100%; /* Задаємо ширину на 100% */
background: white;
padding: 10px 20px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
justify-content: space-between;
z-index: 1000;
box-sizing: border-box; /* Ураховуємо паддінги у ширині */
=======
<script>
import { useUserStore } from "@/store/users";

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  computed: {
    username() {
      return this.userStore.email ? this.userStore.email.split("@")[0] : "Guest";
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    logout() {
      this.userStore.email = "";
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-sizing: border-box;
}

/* Profile Container */
.profile-container {
  position: relative;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  width: 150px;
  text-align: center;
  z-index: 100;
}

.username {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  text-align: center;
  line-height: 1.2;
  margin: 10px 0;
}

.greeting {
  font-size: 18px;
  font-weight: 500;
  color: #666;
  letter-spacing: 1px;
}

.user-name {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  text-transform: capitalize;
}

.logout-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
}

.logout-btn:hover {
  background: #ff0000;
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
}

/* Logo */
.logo {
<<<<<<< HEAD
display: flex;
align-items: center;
flex-shrink: 0;
margin-right: 20px; /* Відступ між логотипом і полем пошуку */
=======
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
}

/* Logo image */
.logo-img {
<<<<<<< HEAD
height: 40px;
width: auto;
=======
  height: 40px;
  width: auto;
  transition: transform 0.3s ease-in-out;
}

.logo-img:hover {
  transform: translateY(-5px) scale(1.05);
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
}

/* Search bar */
.search-container {
<<<<<<< HEAD
flex-grow: 1;  /* Пошук займатиме залишковий простір */
margin: 0 20px; /* Відступи зліва та справа для пошукового поля */
}

/* Search input */
.search-input {
background-color: #F4F4FF;
width: 100%;
height: 40px;
padding: 10px 15px;
border: 1px solid #F4F4FF;
border-radius: 8px;
outline: none;
font-size: 16px;
}

.search-input:hover {
background: #e6e6ff; 
transform: scale(1);
=======
  flex-grow: 1;
  margin: 0 20px;
}

.search-input {
  background-color: #f4f4ff;
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border: 1px solid #f4f4ff;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: background 0.2s ease-in-out;
}

.search-input:hover {
  background: #e6e6ff;
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
}

/* Icons */
.icons {
<<<<<<< HEAD
display: flex;
gap: 10px;
flex-shrink: 0;
margin-left: 20px; /* Відступ між іконками і полем пошуку */
}


.icon-btn {
background: none;
border: 1px solid #ddd;
border-radius: 8px;
cursor: pointer;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
}


.icon-btn:hover {
background: #e6e6ff; /* Змінює фон при наведенні */
border-color: #b3b3ff; /* Робить рамку яскравішою */
transform: scale(1.3); /* Легке збільшення */
transition: all 0.3s ease-in-out;
}
.icon-img {
width: 40px;
height: 40px;
}

.icons-img:hover {
background: #e6e6ff; 
transform: scale(1.05);
}
</style>
=======
  display: flex;
  gap: 10px;
  flex-shrink: 0;
  margin-left: 20px;
}

.icon-btn {
  background: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
}

.icon-btn:hover {
  background: #e6e6ff;
  border-color: #b3b3ff;
  transform: scale(1.1);
}

.icon-img {
  width: 40px;
  height: 40px;
}
</style>
>>>>>>> 00998d4 (added Pinia usage store, added user funtcion for Navbar)
