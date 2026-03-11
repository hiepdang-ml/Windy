// Pretend the page is always visible
Object.defineProperty(document, "hidden", {
  configurable: true,
  get: () => false,
});

Object.defineProperty(document, "visibilityState", {
  configurable: true,
  get: () => "visible",
});

Object.defineProperty(document, "webkitHidden", {
  configurable: true,
  get: () => false,
});

Object.defineProperty(document, "webkitVisibilityState", {
  configurable: true,
  get: () => "visible",
});

// Pretend the window is always focused
document.hasFocus = () => true;

// Block common lifecycle events that pages use to pause
const block = (event) => {
  event.stopImmediatePropagation();
};

window.addEventListener("blur", block, true);
window.addEventListener("focusout", block, true);
document.addEventListener("visibilitychange", block, true);
document.addEventListener("webkitvisibilitychange", block, true);
window.addEventListener("pagehide", block, true);
window.addEventListener("freeze", block, true);
