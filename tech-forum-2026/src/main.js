import './style.scss';      // 載入 SCSS
import 'bootstrap';         // 載入 Bootstrap JS
import AOS from 'aos';      // 載入 AOS
import 'aos/dist/aos.css';  // 載入 AOS CSS

// 初始化 AOS 動態效果
AOS.init({
  duration: 1000,   // 動畫時間 1 秒
  offset: 100,      // 觸發偏移量
  once: false,      // 捲動時是否重複觸發
  easing: 'ease-out-back' // 動畫曲線
});

console.log("2026 未來科技論壇網站已完全載入。");