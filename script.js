document.addEventListener("DOMContentLoaded", function() {
  // وقتی انیمیشن ورود به پایان رسید، عنصر intro را پنهان کن
  var intro = document.getElementById('intro');
  if (intro) {
    intro.addEventListener('animationend', function() {
      intro.style.display = 'none';
      
      // تلاش برای پخش موسیقی پس‌زمینه (ممکنه نیاز به تعامل کاربر داشته باشد)
      var music = document.getElementById('bg-music');
      if (music) {
        music.play().catch(function(error) {
          console.log("پخش موسیقی نیازمند تعامل کاربر است: ", error);
        });
      }
    });
  }
});