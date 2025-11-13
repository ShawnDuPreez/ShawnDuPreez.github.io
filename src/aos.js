import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  AOS.init({
    duration: 600,
    offset: 80,
    easing: 'ease-out-cubic',
    once: true,
    delay: 0,
  });
}

export function refreshAOS() {
  if (AOS && AOS.refresh) {
    AOS.refresh();
  }
}

