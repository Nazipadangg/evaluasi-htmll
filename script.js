// Fungsi greet untuk mengembalikan pesan dengan nama
function greet(name) {
    return `Hello, ${name}`;
}

// Fungsi calculateSquare untuk mengembalikan kuadrat dari angka
function calculateSquare(number) {
    return number * number;
}

// Arrow function untuk menjumlahkan dua angka
const addNumbers = (a, b) => a + b;

// Ambil elemen <div> dengan ID "output"
let outputDiv = document.getElementById('output');

// Panggil fungsi greet dengan argumen berbeda dan tampilkan hasilnya
let greeting1 = greet('Alice');
let greeting2 = greet('Bob');
outputDiv.innerHTML = `<h2>Greeting Messages:</h2><p>${greeting1}</p><p>${greeting2}</p>`;

// Panggil fungsi calculateSquare dengan beberapa angka dan tampilkan hasilnya
let square1 = calculateSquare(4);
let square2 = calculateSquare(7);
outputDiv.innerHTML += `<h2>Square Values:</h2><p>4 squared is ${square1}</p><p>7 squared is ${square2}</p>`;

// Panggil arrow function addNumbers dan tampilkan hasilnya
let sum1 = addNumbers(5, 3);
let sum2 = addNumbers(10, 20);
outputDiv.innerHTML += `<h2>Sum Values:</h2><p>5 + 3 = ${sum1}</p><p>10 + 20 = ${sum2}</p>`;

// Array students
let students = ["Alice", "Bob", "Charlie"];

// Menambahkan satu nama lagi ke array
students.push("David");

// Menampilkan semua nama siswa menggunakan forEach
let studentsList = '<h2>Students List:</h2><ul>';
students.forEach(student => {
    studentsList += `<li>${student}</li>`;
});
studentsList += '</ul>';
outputDiv.innerHTML += studentsList;

// Objek car
let car = {brand: "Toyota", model: "Corolla", year: 2020};

// Menampilkan semua properti dari objek car menggunakan for...in loop
let carDetails = '<h2>Car Details:</h2>';
for (let key in car) {
    carDetails += `<p>${key}: ${car[key]}</p>`;
}
outputDiv.innerHTML += carDetails;

// Array objek untuk menyimpan data beberapa mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2021},
    {brand: "Ford", model: "Focus", year: 2019}
];

// Menampilkan informasi setiap mobil menggunakan forEach
let carsList = '<h2>Cars List:</h2>';
cars.forEach(car => {
    carsList += `<p>Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}</p>`;
});
outputDiv.innerHTML += carsList;

// Fungsi untuk memeriksa nilai input dan menampilkan hasil
function checkValue() {
    // Ambil nilai dari input
    let userInput = document.getElementById('userInput').value;
    
    // Konversi nilai input ke integer
    let number = parseInt(userInput);

    // Ambil elemen <div> dengan ID "output"
    let outputDiv = document.getElementById('output');
    
    // Mulai dengan pesan kosong
    let message = '';
    
    // Periksa apakah nilai valid
    if (isNaN(number)) {
        message = 'Silakan masukkan angka yang valid.';
    } else {
        // Cek apakah nilai lebih besar dari, sama dengan, atau kurang dari 10
        if (number > 10) {
            message += 'Nilai lebih besar dari 10.<br>';
        } else if (number === 10) {
            message += 'Nilai sama dengan 10.<br>';
        } else {
            message += 'Nilai kurang dari 10.<br>';
        }
        
        // Tambahkan perulangan untuk menampilkan angka 1 hingga nilai yang dimasukkan
        message += '<h2>Angka dari 1 hingga ' + number + ':</h2><ul>';
        for (let i = 1; i <= number; i++) {
            message += '<li>' + i + '</li>';
        }
        message += '</ul>';
    }
    
    // Tampilkan pesan dan daftar angka di <div> dengan ID "output"
    outputDiv.innerHTML = message;
}