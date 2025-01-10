// Navbar renk değiştirme işlemi
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Scroll 50px'den fazla olduğunda
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// BMI Hesaplama
function calculateBMI() {
  const height = document.getElementById("height").value; // Kullanıcının girdiği boy
  const weight = document.getElementById("weight").value; // Kullanıcının girdiği kilo
  const resultBox = document.getElementById("bmi-result"); // Sonucu gösterecek kutu

  if (height && weight) {
    const heightInMeters = height / 100; // Boyu metreye çevir
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1); // BMI hesapla
    resultBox.textContent = bmi; // Sonucu kutuda göster
  } else {
    resultBox.textContent = "Please enter valid values!"; // Hata mesajı
  }
}

// Trainer Cards Hover Effect
const trainerCards = document.querySelectorAll('.trainer-card');

trainerCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Formun varsayılan gönderimini engelle
  alert('Form submitted successfully!'); // Başarı mesajı
});
