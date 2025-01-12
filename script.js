// Ambil semua elemen dengan kelas 'section'
const sections = document.querySelectorAll('.section');

// Array untuk menyimpan status animasi
const animatedSections = Array.from(sections).map(() => false);

document.addEventListener('scroll', function() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        
        // Jika elemen berada dalam viewport dan belum dianimasikan
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !animatedSections[index]) {
            section.classList.add('visible');
            section.classList.add('animate__animated', 'animate__fadeInUp'); // Tambahkan kelas animasi masuk
            animatedSections[index] = true; // Tandai bahwa elemen ini sudah dianimasikan
        } else if (rect.bottom < 0 || rect.top > window.innerHeight) {
            // Jika elemen keluar dari viewport, Anda bisa mengatur ulang status animasi jika diinginkan
            // animatedSections[index] = false; // Uncomment jika ingin animasi ulang saat scroll kembali
        }
    });
});