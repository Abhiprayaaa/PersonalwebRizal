var nav = document.querySelector("nav");

window.onload = function() {
  nav.classList.add("active");
};

document.addEventListener("DOMContentLoaded", function() {
  var img = document.querySelector(".img-fluid");
  img.style.left = "0";
});

document.addEventListener("DOMContentLoaded", function() {
  var h5 = document.querySelector(".card-title2");
  h5.style.bottom = "0";
});

document.addEventListener("DOMContentLoaded", function() {
  // mendapatkan elemen teks
  var h5 = document.querySelector(".card-title2");
  // mengubah properti transform menjadi scale(1)
  h5.style.transform = "scale(1)";
});

// mendapatkan elemen HTML
let div = document.querySelector("div");
let h5 = document.querySelector("h5");

// membuat array karakter acak
let glyphs = "ABCDĐEFGHIJKLMNOPQRSTUVWXYZabcdđefghijklmnopqrstuvwxyzĄąĆćŻżŹźŃńóŁłАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư";

// membuat fungsi untuk mengacak karakter
function scramble(text) {
  // mengubah teks menjadi array
  let chars = text.split("");
  // membuat array kosong untuk menyimpan hasil
  let result = [];
  // melakukan loop untuk setiap karakter
  for (let i = 0; i < chars.length; i++) {
    // memilih karakter acak dari array glyphs
    let random = Math.floor(Math.random() * glyphs.length);
    let glyph = glyphs[random];
    // menambahkan karakter acak ke array hasil
    result.push(glyph);
  }
  // mengembalikan array hasil sebagai string
  return result.join("");
}

// membuat fungsi untuk mengembalikan karakter asli
function unscramble(text, original) {
  // mengubah teks menjadi array
  let chars = text.split("");
  // membuat array kosong untuk menyimpan hasil
  let result = [];
  // melakukan loop untuk setiap karakter
  for (let i = 0; i < chars.length; i++) {
    // memeriksa apakah karakter sudah sama dengan aslinya
    if (chars[i] === original[i]) {
      // jika ya, menambahkan karakter asli ke array hasil
      result.push(original[i]);
    } else {
      // jika tidak, memilih karakter acak dari array glyphs
      let random = Math.floor(Math.random() * glyphs.length);
      let glyph = glyphs[random];
      // menambahkan karakter acak ke array hasil
      result.push(glyph);
    }
  }
  // mengembalikan array hasil sebagai string
  return result.join("");
}

// membuat variabel untuk menyimpan teks asli
let originalText = h5.textContent;

// membuat variabel untuk menyimpan waktu berhenti animasi
let stopTime = 1500; // dalam milisekon

// membuat variabel untuk menyimpan interval animasi
let interval;

// membuat fungsi untuk memulai animasi
function startAnimation() {
  // mengacak teks dengan fungsi scramble
  let scrambledText = scramble(originalText);
  // menampilkan teks acak di elemen h5
  h5.textContent = scrambledText;
  // membuat variabel untuk menyimpan waktu mulai animasi
  let startTime = Date.now(); // mendapatkan waktu saat ini
  // membuat interval animasi dengan waktu 100 ms
  interval = setInterval(function () {
    // menambahkan kondisi untuk menghentikan animasi jika waktu sekarang sudah melebihi waktu berhenti
    if (Date.now() > startTime + stopTime) { // jika waktu sekarang sudah melebihi waktu berhenti
      // menghentikan interval animasi
      clearInterval(interval);
      // mengubah teks menjadi Rizal Saputra
      h5.textContent = "Rizal Saputra"; // mengubah teks menjadi Rizal Saputra
    } else {
      // mengembalikan teks asli dengan fungsi unscramble
      let unscrambledText = unscramble(scrambledText, originalText);
      // menampilkan teks di elemen h5
      h5.textContent = unscrambledText;
      // memeriksa apakah teks sudah sama dengan aslinya
      if (unscrambledText === originalText) {
        // jika ya, menghentikan interval animasi
        clearInterval(interval);
        // mengubah teks menjadi Rizal Saputra
        h5.textContent = "Rizal Saputra"; // mengubah teks menjadi Rizal Saputra
      } else {
        // jika tidak, mengubah teks acak dengan teks yang baru dihasilkan
        scrambledText = unscrambledText;
      }
    }
  }, 200);
}

// memanggil fungsi startAnimation untuk memulai animasi
startAnimation();

