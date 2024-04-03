function showPage(pageId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        if (section.id === pageId) {
            section.style.display = 'block';
            section.classList.add('active');
        } else {
            section.style.display = 'none';
            section.classList.remove('active');
        }
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Mencegah formulir dikirim secara default

   // Menampilkan pemberitahuan
   var notification = document.getElementById("registrationNotification");
   notification.style.display = "block";
   notification.textContent = "Anda telah terdaftar";

   // Anda dapat menambahkan logika lainnya di sini, seperti pengiriman data melalui AJAX
});

// Menambahkan event listener untuk tombol reset
document.getElementById("registrationForm").addEventListener("reset", function() {
var notification = document.getElementById("registrationNotification");
notification.style.display = "none"; // Menyembunyikan pemberitahuan saat tombol reset ditekan
});