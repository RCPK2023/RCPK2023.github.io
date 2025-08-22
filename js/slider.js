const slides = [
    {
      src: "images/NetworkTopology.png",
      caption: "Overview of the network topology for blue team exercises."
    },
    {
      src: "images/ServiceTopology.png",
      caption: "Service topology after migrating from Windows Server to containers."
    }
  ];
  
  let currentIndex = 0;
  
  function updateSlider() {
    const img = document.getElementById('slider-image');
    const caption = document.getElementById('slider-caption');
    img.src = slides[currentIndex].src;
    caption.textContent = slides[currentIndex].caption;
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }
  