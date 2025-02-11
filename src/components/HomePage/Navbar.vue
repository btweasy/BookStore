<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <img src="/navbar/logo.jpg" alt="Bookstore Logo" class="logo-img" />
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <input type="text" placeholder="Search" class="search-input" />
    </div>

    <!-- Icons (PNG) -->
    <div class="icons">
      <button class="icon-btn">
        <img src="/navbar/user.png" alt="User" class="icon-img" />
      </button>
      <button class="icon-btn">
        <img src="/navbar/heart.jpg" alt="Favorites" class="icon-img" />
      </button>
      <button class="icon-btn" >
        <img src="/navbar/cart.jpg" alt="Cart" class="icon-img" />
      </button>
    </div>
  </nav>
</template>

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
}

/* Logo */
.logo {
display: flex;
align-items: center;
flex-shrink: 0;
margin-right: 20px; /* Відступ між логотипом і полем пошуку */
}

/* Logo image */
.logo-img {
height: 40px;
width: auto;
}

/* Search bar */
.search-container {
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
}

/* Icons */
.icons {
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