// configs for lazy loading images
const lazyImgConfigs = {
  rootMargin: "50px 0px 0px 0px",
  threshold: 0.5,
};

// function to replace image path from data-src to src in image tag
const loadImages = (image) => {
  image.src = image.dataset.src;
};

const lazyLoadImages = () => {
  // setting up observer
  const observer = new window.IntersectionObserver((entries, self) => {
    // iterate observer over each entry
    entries.forEach((entry) => {
      // processing each image that is intersecting
      if (entry.isIntersecting) {
        loadImages(entry.target);

        // stopping the observer when the image is loaded
        self.unobserve(entry.target);
      }
    });
  });

  // get the node object of all the images w/ attribute 'data-src'
  const allImages = document.querySelectorAll("[data-src]");

  // apply observer to each image
  allImages.forEach((image) => {
    observer.observe(image);
  }, lazyImgConfigs);
};

export default lazyLoadImages;
