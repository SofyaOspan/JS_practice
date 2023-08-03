window.addEventListener('scroll', (e) => {
  document.body.cssText = ` --scrollTop: ${this.scrollY}px`;
});
