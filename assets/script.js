document.addEventListener("DOMContentLoaded", () => {
    const services = ["Logistics & Distribution", "Procurement", "Storage Solutions"];
    const serviceList = document.querySelector(".service-list");

    services.forEach(service => {
        const serviceItem = document.createElement("div");
        serviceItem.classList.add("service");
        serviceItem.innerHTML = `<i class="fas fa-check-circle"></i><h3>${service}</h3>`;
        serviceList.appendChild(serviceItem);
    });

    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    showSlide(currentIndex);

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
});
