const animateCarousel = () => {
  const imgConList = Array.from(
    document.getElementsByClassName('image-container')
  );

  const left = document.querySelector('.arrow-left');
  const right = document.querySelector('.arrow-right');
  let pos = 0;

  // TODO: activate auto-slide (after 3 seconds)
  const slide = () => {
    imgConList.forEach((img) => {
      if (pos < -1200) {
        pos = 0;
      }
      if (pos > 0) {
        pos = 0;
      }
      img.style.transform = `translate(${pos}px)`;
    });
  };

  let dotPos = 0;
  const dotList = Array.from(document.getElementsByClassName('dot'));
  const dotControl = () => {
    if (dotPos < 0) {
      dotPos = 0;
    } else if (dotPos > 3) {
      dotPos = 0;
    }
    const clearDots = () => {
      dotList.forEach((dot) => {
        dot.classList.remove('dot-filled');
      });
    };
    // TODO: fix this, and also implement 'click dot to go to image'
    if (dotPos === 0) {
      clearDots();
      dotList[0].classList.add('dot-filled');
    } else if (dotPos === 1) {
      clearDots();
      dotList[1].classList.add('dot-filled');
    } else if (dotPos === 2) {
      clearDots();
      dotList[2].classList.add('dot-filled');
    } else if (dotPos === 3) {
      clearDots();
      dotList[3].classList.add('dot-filled');
    }
  };

  right.addEventListener('click', () => {
    pos -= 400;
    dotPos += 1;
    slide();
    dotControl();
  });
  left.addEventListener('click', () => {
    pos += 400;
    dotPos -= 1;
    slide();
    dotControl();
  });

  const autoAdvance = () => {
    pos -= 400;
    dotPos += 1;
    slide();
    dotControl();
  };

  const autoSlide = setInterval(() => autoAdvance(), 3000);
};

export default animateCarousel;
