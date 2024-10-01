// Multy image carousel
const imageCarousel = document.querySelector(".multi-image-carousel")
const carouselItems = Array.from(imageCarousel.querySelectorAll(".carousel__item"))

const imageCarouselWidth = imageCarousel.getBoundingClientRect().width

const imageWidth = imageCarouselWidth * 0.25


carouselItems.forEach(item => {
  item.style.width = `${imageWidth}px`
})
