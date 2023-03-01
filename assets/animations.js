function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      elementTarget.classList.add('animation__trigger--active');
      elementTarget.setAttribute('style', `--animation-order: ${index};`);

      observer.unobserve(elementTarget);
    }
  })
}

function initializeAnimationTrigger() {
  const animationTriggerElements = Array.from(
    document.getElementsByClassName('animation__trigger')
  );
  if (animationTriggerElements.length === 0) return;

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5,
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

initializeAnimationTrigger();
