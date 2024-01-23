// backgroundWorker.js

// backgroundWorker.js

self.addEventListener('message', (event) => {
    const { type, backgroundPath } = event.data;
  
    const overlayDiv = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '-1',
      opacity: '0.1',
    };
  
    self.postMessage({ overlayDiv, type });
  });
  