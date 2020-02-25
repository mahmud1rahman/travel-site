import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
  constructor(els, thresholdpPercent) {
    this.thresholdpPercent = thresholdpPercent;
    this.itemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }
  events() {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }
  calcCaller() {
    console.log("scroll function  run !");
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el);
      }
    });
  }
  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log("element run ");
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (scrollPercent < this.thresholdpPercent) {
        el.classList.add("reveal-item--is-visible");
        el.isRevealed = true;
        if (el.isLastitem) {
          window.removeEventListener("scroll", this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item");
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastitem = true;
  }
}

export default RevealOnScroll;
