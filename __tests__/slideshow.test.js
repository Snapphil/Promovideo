global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('nextSlide updates active slide', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'promotional-video.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  const { window } = dom;
  const slides = window.document.querySelectorAll('.slide');

  const activeBefore = window.document.querySelector(".slide.active");
  window.nextSlide();
  const activeAfter = window.document.querySelector(".slide.active");
  expect(activeAfter).not.toBe(activeBefore);
  expect(activeAfter).toBe(slides[1]);
  expect(slides[1].classList.contains('active')).toBe(true);
});
