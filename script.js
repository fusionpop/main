// Carousel dot
function scrollToCard(index) {
    const carousel = document.querySelector('.carousel');
    const cardWidth = carousel.querySelector('.card').offsetWidth + 20; // Adjust for gap
    carousel.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
    });

    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
