document.addEventListener('DOMContentLoaded', () => {
    // --- Dropdown-Menü ---
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    
    dropdownButton.addEventListener("click", () => {
      dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
    });
    
    // Damit das Menü geschlossen wird, wenn außerhalb geklickt wird
    window.addEventListener("click", event => {
      if (!event.target.matches('.dropdown-button')) {
        dropdownMenu.style.display = "none";
      }
    });
    
    // Globale Funktion zum Auswählen einer Option (wird evtl. vom HTML aus aufgerufen)
    window.selectOption = option => {
      dropdownButton.innerHTML = `${option} &#11206;`;
      dropdownMenu.style.display = "none";
    };
    
    // --- Show All / Show Less ---
    const showAll = document.getElementById("show-all");
    const showLess = document.getElementById("show-less");
    const hiddenMenu = document.getElementById("hidden-menu");
    
    showAll.addEventListener("click", () => {
      showAll.style.display = "none";
      showLess.style.display = "flex";
      hiddenMenu.style.display = "block";
    });
    
    showLess.addEventListener("click", () => {
      showAll.style.display = "flex";
      showLess.style.display = "none";
      hiddenMenu.style.display = "none";
    });
    
    // --- Submenu und Navigation ---
    // const subMenuBtn = document.getElementById("submenu-btn");
    const movedContent = document.querySelector(".movedContent");
    const toMain = document.querySelector(".toMain");
    
    // subMenuBtn.addEventListener("click", () => {
    //   movedContent.style.transform = "translateX(-100%)";
    //   document.querySelector(".submenu").style.transform = "translateX(0)";
    // });
    
    toMain.addEventListener("click", () => {
      toMain.style.transform = "translateX(100%)";
      movedContent.style.transform = "translateX(0)";
    });
    
    // --- H-Menu (Hamburger Menü) ---
    const closeHmenu = document.querySelector(".h-close-icon");
    const hMenuCanvas = document.querySelector(".hmenu-canvas");
    const allBtnDiv = document.querySelector(".all-btn-div");
    const hmenuContainer = document.querySelector(".hmenu-container");
    const hmenuCanvasBackground = document.querySelector(".hmenu-canvas-background");
    
    closeHmenu.addEventListener("click", () => {
      hMenuCanvas.style.transform = "translateX(-100%)";
      closeHmenu.style.transform = "translateX(-100%)";
      hmenuCanvasBackground.style.backgroundColor = "rgba(0, 0, 0, 0)";
      setTimeout(() => {
        hmenuContainer.style.display = "none";
      }, 300);
    });
    
    allBtnDiv.addEventListener("click", () => {
      setTimeout(() => { hMenuCanvas.style.transform = "translateX(0)"; }, 200);
      closeHmenu.style.transform = "translateX(0)";
      hmenuCanvasBackground.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      setTimeout(() => { hmenuContainer.style.display = "block"; }, 100);
    });
    
    // --- Carousel 1: Bilder-Wechsel per Button ---
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.carousel button.prev');
    const nextBtn = document.querySelector('.carousel button.next');
    let currentIndex = 0;
    
    const showImage = index => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
    };
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
    
    // --- Carousel 2: Horizontal-Scrollen per Button ---
    const scrollContainer = document.querySelector('.carousel-container');
    const prevBtn2 = document.querySelector('.carousel-btn.prev');
    const nextBtn2 = document.querySelector('.carousel-btn.next');
    
    prevBtn2.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn2.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // --- Carousel 3: Zweiter Scrollbereich ---
    const scrollContainer2 = document.querySelector('.carousel-container2');
    const prevBtn3 = document.querySelector('.carousel-btn2.prev');
    const nextBtn3 = document.querySelector('.carousel-btn2.next');
    
    prevBtn3.addEventListener('click', () => {
      scrollContainer2.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    nextBtn3.addEventListener('click', () => {
      scrollContainer2.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });  