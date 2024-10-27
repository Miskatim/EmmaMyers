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



let loginForm = document.getElementById("loginForm");


function loginConfirmed() {
    loginForm.style.display = "none";
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
  