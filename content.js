const changeDiff = () => {
    setTimeout(() => {
      const node = document.querySelector('.css-t42afm');
      if (!node) {
          return
      } else {
          node.innerHTML = 'Easy';
          node.style.color = '#43A047';
      }
      
    }, 100);
  };

  window.addEventListener('load', changeDiff);
