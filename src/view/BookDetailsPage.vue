<template>
    <div class="book-details">
      <button class="back-button" @click="$router.push('/books')">← Back</button>
      <div class="book-content">
        <img :src="book.image" :alt="book.title" class="book-image" />
        <div class="book-info">
          <h2>{{ book.title }}</h2>
          <p class="author">by {{ book.author }}</p>
          <h3 class="summary-title">Summary</h3>
          <p class="summary">{{ book.summary }}</p>
          <div class="purchase-section">
            <span class="price">{{ book.price }} $</span>
            <button class="buy-button"> Buy Now</button>
            <button class="like-button"> Like</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
    data() {
      return {
        books: [
    {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    price: "87,75",
    image: "/books/9781101658055.webp",
    summary:
        "Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or 'spice', a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.",
    
      },
    {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: "35,75",
    image: "/books/9780451524935.webp",
    summary:
        "A dystopian novel that explores the dangers of totalitarianism, surveillance, and censorship. The story follows Winston Smith, a man who works for the oppressive Party, rewriting history to fit its propaganda. However, as he begins to question the Party’s rule and falls in love with Julia, he becomes a target of the Thought Police. Orwell’s masterpiece remains a chilling warning about government control, misinformation, and the loss of individual freedom."
    },
    {
    id: 3,
    title: "Ikigai",
    author: "Hector Garcia",
    price: "36,00",
    image: "/books/9780143130727.webp",
    summary:
        "Ikigai is the Japanese secret to a long and happy life. This book explores the philosophy behind finding purpose and joy in everyday living, drawing inspiration from Okinawa, a region known for its many centenarians. Through research and interviews, Hector Garcia provides insights on mindfulness, resilience, and how to cultivate a meaningful life by balancing passion, mission, vocation, and profession."
    },
    {
    id: 4,
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    price: "38,00",
    image: "/books/9781635575569.webp",
    summary:
        "A thrilling fantasy novel that follows Feyre Archeron, a young huntress who unknowingly kills a faerie wolf and is forced to live in the mystical realm of Prythian as punishment. There, she encounters Tamlin, a powerful faerie lord, and becomes entangled in a dark and dangerous world filled with magic, political intrigue, and forbidden romance. As she learns more about the fae and their curse, Feyre must decide whether to fight for their survival or escape back to her old life."
    },
    {
    id: 5,
    title: "The Serviceberry",
    author: "Robin Wall Kimmerer",
    price: "30,00",
    image: "/books/9781668072240.jpg",
    summary:
    "This book explores the concept of reciprocity between humans and nature through the story of the serviceberry—a wild fruit that grows in North America. Robin Wall Kimmerer, a renowned ecologist and botanist, shares profound reflections on the relationship between nature, culture, and human generosity. It is a poetic and philosophical examination of how we can live in harmony with the natural world."
    },
    {
    id: 6,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    price: "27,00",
    image: "/books/9781451673319.webp",
    summary:
    "A dystopian novel set in a world where books are banned and 'firemen' burn them. The protagonist, Guy Montag, is one of these firemen until he meets a girl who makes him question his beliefs. As he begins to secretly read books, he realizes the importance of knowledge, freedom, and critical thinking in a society that suppresses independent thought."
    },
    {
    id: 7,
    title: "James",
    author: "Percival Everett",
    price: "40,75",
    image: "/books/9780385550369.webp",
    summary:
    "A reimagining of 'The Adventures of Huckleberry Finn' from the perspective of Jim, the enslaved man. This novel gives voice to one of literature’s most overlooked characters, exploring themes of race, freedom, and resilience. Everett’s storytelling provides a powerful and fresh perspective on Mark Twain’s classic tale."
    },
    {
    id: 8,
    title: "Onyx Storm",
    author: "Rebecca Yarros",
    price: "39,95",
    image: "/books/onyx-storm-b-iext174978940.webp",
    summary:
    "A gripping fantasy novel filled with romance, war, and political intrigue. In a world divided by power and magic, the heroine must navigate dangerous alliances while fighting for survival. Rebecca Yarros delivers an action-packed story with intense emotions and breathtaking twists."
    },
    {
    id: 9,
    title: "Black in Blues",
    author: "Imani Perry",
    price: "33,75",
    image: "/books/9780062977397 (1).webp",
    summary:
    "A cultural and historical analysis of the blues as a deeply rooted African American art form. Imani Perry explores how the blues have shaped and been shaped by Black identity, struggle, and resilience in the U.S. Through music, history, and personal reflection, this book sheds light on the emotional and political significance of the blues."
    },
    {
    id: 10,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    price: "30,00",
    image: "/books/518112_media-0.webp",
    summary:
    "One of the most famous tragedies of all time, 'Romeo and Juliet' tells the story of two young lovers whose families are locked in an age-old feud. Their love defies the odds, but fate and miscommunication lead to a heartbreaking ending. Shakespeare’s timeless exploration of love, fate, and conflict continues to resonate with readers worldwide."
    },
    {
    id: 11,
    title: "Olağanüstü Bir Gece",
    author: "Stefan Zweig",
    price: "27,00",
    image: "/books/9789750754791_201.jpg",
    summary:
    "A psychological novella by Stefan Zweig about a wealthy man who feels emotionally empty and disconnected from life. One fateful night, an unexpected encounter leads him to experience an intense and transformative journey of self-discovery. Zweig masterfully explores human emotions, morality, and the meaning of existence."
    },
    {
    id: 12,
    title: "Genç Werther'in Acıları",
    author: "Goethe",
    price: "40,75",
    image: "/books/9786258401868_Genc-Wertherin-Acilari.jpg",
    summary:
    "A classic of Romantic literature, 'The Sorrows of Young Werther' follows the tragic story of Werther, a young man tormented by unrequited love. Through his letters, he expresses deep emotions and philosophical reflections on love, society, and despair. Goethe’s novel had a profound influence on European literature and remains a timeless exploration of passion and melancholy."
    }
    ],
        book: null,
      };
    },
    created() {
      this.book = this.books.find((b) => b.id == this.id);
    }
  };
  </script>
  
  <style scoped>
  .book-details {
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .back-button {
    background: #e2a645;
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
  }
  
  .back-button:hover {
    background:  #ca871a;
    transform: scale(1.05);
  }
  
  .book-content {
    display: flex;
    gap: 40px;
    align-items: center;
    padding-top: 20px;
  }
  
  .book-image {
    width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .book-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  h2 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }
  
  .author {
    font-size: 20px;
    color: #666;
  }
  
  .summary-title {
    font-size: 22px;
    font-weight: bold;
  }
  
  .summary {
    font-size: 18px;
    color: #444;
    line-height: 1.6;
  }
  
  .purchase-section {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .price {
    font-size: 24px;
    font-weight: bold;
    color: #EF2346;
  }
  
  .buy-button {
    background:  #EF2346;
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
  }
  
  .buy-button:hover {
    background: #9f1128;
    transform: scale(1.05);
  }
  .like-button {
    background: #ffffff;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #EF2346;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 12px;
    transition: background 0.3s, transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .like-button:hover {
    background: #9f1128;
    color: #ffffff;
    transform: scale(1.05);
  }
  </style>
  