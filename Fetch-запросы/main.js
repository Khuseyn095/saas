let elem = document.querySelector('.wrap');

let posts = document.querySelector('.posts');
let comments = document.querySelector('.comments');
let users = document.querySelector('.users');

let posts_create = document.querySelector('.posts_create');

let posts_body = 
{
    "title": "test_test",
    "body": "test_test-desc test"
  }

let comments_body = 
{
  "name": "test comment",
  "email": "Eliseo@gardner.biz",
  "body": "test comment body descrition"
}

let users_body = 
  {
    "name": "Test User",
    "username": "Tester",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Gerenernes",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

// Получить посты, комментарии и пользователей с API https://jsonplaceholder.typicode.com/

// Posts
async function getPosts(){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(post => {
        posts.insertAdjacentHTML('beforeend', `<h2>${post.title}</h2>`); 
      });
  }
}

// Comments
async function getComments(){
  let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(comment => {
        comments.insertAdjacentHTML('beforeend', `<h2>${comment.name}</h2>`); 
      });
  }
}

// Users
async function getUsers(){
  let data = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET' 
  });
  if (data.ok){
      let result = await data.json();
      result.forEach(user => {
        users.insertAdjacentHTML('beforeend', `<h2>${user.name}</h2>`); 
      });
  }
}



getPosts();
getComments();
getUsers();

// Добавить пользователя, пост и комментарий.

// Создание постов
async function postPosts(){
  let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(posts_body)
  });
  
  if (data.ok){
      let result = await data.json();
      alert("Пост успешно создан: " + JSON.stringify(result));
};
}

// Создание коментов
async function postComments(){
  let data = await fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(comments_body)
  });
  if (data.ok){
      let result = await data.json();
      alert("Коментарий успешно создан: " + JSON.stringify(result));
};
}

// Создание пользователей
async function postUsers(){
  let data = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(users_body)
  });
  if (data.ok){
      let result = await data.json();
      alert("Пользователь успешно создан: " + JSON.stringify(result));
};
}

postPosts();
postComments();
postUsers();