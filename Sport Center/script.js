// "Our Classes" butonlarını kontrol etmek için
const buttons = document.querySelectorAll('.class-buttons .btn');
const classContent = document.querySelector('.class-content');
const yogaImage = document.querySelector('.class-content img');

const classData = {
  Yoga: {
    text: `
      <h3>Why are your Yoga?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatum impedit adit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
      <h4>When comes Yoga Your Time.</h4>
      <p>Saturday-Sunday: 8:00am - 10:00am</p>
      <p>Monday-Tuesday: 10:00am - 12:00pm</p>
      <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
    `,
    image: 'images/yoga.jpg'
  },
  Group: {
    text: `
      <h3>Why are your Group Classes?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus exercitationem autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
      <h4>When comes Group Class Your Time.</h4>
      <p>Monday-Wednesday: 7:00pm - 9:00pm</p>
      <p>Saturday-Sunday: 10:00am - 12:00pm</p>
    `,
    image: 'images/group.webp'
  },
  Solo: {
    text: `
      <h3>Why are your Solo Classes?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus dolorum placeat, exercitationem autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
      <h4>When comes Solo Class Your Time.</h4>
      <p>Monday-Friday: 5:00pm - 7:00pm</p>
    `,
    image: 'images/solo.jpg'
  },
  Stretching: {
    text: `
      <h3>Why are your Stretching Classes?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus laboriosam sapiente nulla totam neque eum veniam.</p>
      <h4>When comes Stretching Class Your Time.</h4>
      <p>Saturday-Sunday: 6:00am - 7:00am</p>
      <p>Wednesday: 8:00pm - 9:00pm</p>
    `,
    image: 'images/stret.webp'
  }
};

// Butonlara tıklama olayını yönetmek için
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Aktif sınıfı butonlara ekle/çıkar
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // İçeriği güncelle
    const classType = button.textContent.trim();
    classContent.innerHTML = classData[classType].text;
    yogaImage.src = classData[classType].image;
  });
});

// BMI Hesaplama
function calculateBMI() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const bmiValue = document.getElementById('bmi-value');

  const height = parseFloat(heightInput.value) / 100; // cm'den metreye çevir
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    bmiValue.textContent = 'Invalid input!';
    bmiValue.style.color = 'red';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  // BMI değerini göster
  bmiValue.textContent = bmi;

  // BMI'yi renklendir
  if (bmi < 18.5) {
    bmiValue.style.color = 'blue';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiValue.style.color = 'green';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiValue.style.color = 'orange';
  } else {
    bmiValue.style.color = 'red';
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
    e.preventDefault();
    alert('Form submitted successfully!');
  });
  