// image-gallery.js


// <----------------Agrandar imagen---------------->

var imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(function(container) {
  
  var link = container.querySelector('a');

  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    var image = this.querySelector('img');
    
    var overlay = document.createElement('div');
    overlay.className = 'overlay';


    var enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.className = 'enlarged-image';

    overlay.appendChild(enlargedImage);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
    });
  });
});
