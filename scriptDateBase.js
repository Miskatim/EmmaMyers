

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZFAr_u-Wk6uO52cJRaf52N6N-PZrAqZc",
    authDomain: "emmamyers-69b53.firebaseapp.com",
    databaseURL: "https://emmamyers-69b53-default-rtdb.europe-west1.firebasedatabase.app", // Update here
    projectId: "emmamyers-69b53",
    storageBucket: "emmamyers-69b53.appspot.com",
    messagingSenderId: "272948948758",
    appId: "1:272948948758:web:b6d9d2262366ac12b06a37",
    measurementId: "G-QK54FF2X6M"
};








// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Function to check user credentials
document.getElementById("btn1").addEventListener("click", checkUserCredentials);

function checkUserCredentials() {
  // Отримання значень з полів вводу
const userLogin = document.getElementById('inputInformationUserNameID').value; // або ваш ID
const userPass = document.getElementById('inputInformationPasswordID').value; // або ваш ID


document.getElementById("confirmingSignUp").addEventListener("click", function(e) {
    e.preventDefault();  // Запобігаємо перезавантаженню сторінки
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('inputInformationUserNameID').value;

    if (password === confirmPassword) {
        // Якщо паролі збігаються, шукаємо місце для нового користувача
        findNextUserSlot(username, password);
    } else {
        alert("Passwords do not match!");
    }
});

function findNextUserSlot(username, password) {
    const db = getDatabase();  // Ініціалізація бази даних
    const usersRef = ref(db, 'users');  // Посилання на гілку "users"
    
    get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
            let users = snapshot.val();
            let nextUser = 1;

            // Знаходимо найближчий вільний userN
            while (users[`user${nextUser}`]) {
                nextUser++;
            }

            // Додаємо нового користувача
            createUser(nextUser, username, password);
        } else {
            // Якщо users відсутні, створюємо user1
            createUser(1, username, password);
        }
    }).catch((error) => {
        console.error("Error fetching users:", error);
    });
}

function createUser(userId, username, password) {
    const db = getDatabase();  // Ініціалізація бази даних
    const userRef = ref(db, `users/user${userId}`);

    set(userRef, {
        username: username,
        password: password
    }).then(() => {
        alert(`User user${userId} successfully created!`);
    }).catch((error) => {
        console.error("Error creating user:", error);
    });
}
















let loginForm = document.getElementById("loginForm");


function loginConfirmed() {
    loginForm.style.display = "none";
    document.title = "MVWords";
    
    

    const body = document.body;

    // Create left sidebar
    const leftSidebar = document.createElement("div");
    leftSidebar.id = "leftSidebar";
    leftSidebar.style.width = "10vw";
    leftSidebar.style.display = "flex";
    leftSidebar.style.flexDirection = "column";
    leftSidebar.style.justifyContent = "space-between";
    leftSidebar.style.backgroundColor = "#222";
    leftSidebar.style.color = "white";
    leftSidebar.style.padding = "2rem 1rem";
    body.appendChild(leftSidebar);

    // Create top menu
    const topMenu = document.createElement("div");
    topMenu.className = "topMenu";
    topMenu.innerHTML = '<a href="#">Home</a>';
    leftSidebar.appendChild(topMenu);

    // Create middle menu
    const middleMenu = document.createElement("div");
    middleMenu.className = "middleMenu";
    middleMenu.innerHTML = `
        <a href="#">Folders</a>
        <a href="#">Categories</a>
        <a href="#">Analytics</a>
        <a href="#">Studying</a>
        <a href="#">Instruction</a>
    `;
    leftSidebar.appendChild(middleMenu);

    // Create bottom menu
    const bottomMenu = document.createElement("div");
    bottomMenu.className = "bottomMenu";
    bottomMenu.innerHTML = `
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Log Out</a>
    `;
    leftSidebar.appendChild(bottomMenu);

    // Create content area
    const content = document.createElement("div");
    content.id = "content";
    content.style.flex = "1";
    content.style.padding = "2rem";
    content.innerHTML = `
        <h2>Word List</h2>
        <div id="wordList">
            <div class="wordItem">
                <span>Word 1 - Translation</span>
                <button>Edit</button>
            </div>
            <div class="wordItem">
                <span>Word 2 - Translation</span>
                <button>Edit</button>
            </div>
        </div>
    `;
    body.appendChild(content);

    // Create fixed panel
    const fixedPanel = document.createElement("div");
    fixedPanel.id = "fixedPanel";
    fixedPanel.style.position = "fixed";
    fixedPanel.style.right = "0";
    fixedPanel.style.top = "0";
    fixedPanel.style.width = "20%";
    fixedPanel.style.height = "100vh";
    fixedPanel.style.backgroundColor = "#eaeaea";
    fixedPanel.style.padding = "2rem";
    fixedPanel.style.boxShadow = "-3px 0 5px rgba(0, 0, 0, 0.1)";
    fixedPanel.style.overflowY = "auto";
    fixedPanel.innerHTML = `
        <h3>Words of the Day</h3>
        <ul>
            <li>Word 1</li>
            <li>Word 2</li>
            <li>Word 3</li>
            <li>Word 4</li>
            <li>Word 5</li>
        </ul>
        <h3>Idioms of the Day</h3>
        <ul>
            <li>Idiom 1</li>
            <li>Idiom 2</li>
            <li>Idiom 3</li>
        </ul>
    `;
    body.appendChild(fixedPanel);

    // Add styles for sidebar and content
    const style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            min-height: 100vh;
            background-color: #f4f4f9;
        }

        #leftSidebar {
            width: 10vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #222;
            color: white;
            padding: 2rem 1rem;
        }

        .topMenu, .bottomMenu, .middleMenu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        #leftSidebar a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 0;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        #leftSidebar a:hover {
            background-color: #444;
            padding-left: 1rem;
        }

        #content {
            flex: 1;
            padding: 2rem;
        }

        h2 {
            margin-bottom: 1rem;
            color: #333;
        }

        #wordList {
            margin-bottom: 2rem;
        }

        .wordItem {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding: 0.5rem 1rem;
            background-color: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        .wordItem span {
            font-size: 1.1rem;
            color: #333;
        }

        .wordItem button {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        .wordItem button:hover {
            background-color: #27ae60;
        }

        #fixedPanel {
            position: fixed;
            right: 0;
            top: 0;
            width: 20%;
            height: 100vh;
            background-color: #eaeaea;
            padding: 2rem;
            box-shadow: -3px 0 5px rgba(0, 0, 0, 0.1);
            overflow-y: auto;
        }

        #fixedPanel h3 {
            margin-bottom: 1rem;
            color: #333;
        }

        #fixedPanel ul {
            list-style-type: none;
            padding: 0;
        }

        #fixedPanel li {
            margin-bottom: 0.5rem;
            color: #333;
        }
    `;
    document.head.appendChild(style);






}






// Функція для перевірки логіну
function checkUserCredentials(userLogin, userPass) {
    const usersRef = ref(database, 'users');

    // Отримати дані про користувачів
    get(usersRef).then((snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();
            let userFound = false;

            // Перевірка кожного користувача
            for (let key in users) {
                if (users[key].username === userLogin && users[key].password === userPass) {
                    userFound = true;
                    
                    loginConfirmed();

                    break; // вихід з циклу, якщо користувача знайдено
                }
            }

            if (!userFound) {
                alert("Неправильний логін або пароль");
            }
        } else {
            alert("Користувачі не знайдені");
        }
    }).catch((error) => {
        console.error("Помилка при отриманні даних: ", error);
    });
}

// Виклик функції перевірки
checkUserCredentials(userLogin, userPass);
}
  