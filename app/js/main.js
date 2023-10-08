// 'Team' Slider & 'Battles' Slider
const teamMembersSlider = new Swiper('.team__cards > .swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.team__cards.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => '<span class="pagination-bullet ' + className + '">' + "</span>"
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 80,
            pagination: false
        }
    }
})

const battlesMembersSlider = new Swiper('.battles__cards > .swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.battles__cards.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => '<span class="pagination-bullet ' + className + '">' + "</span>"
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 80,
            pagination: false
        }
    }
})
