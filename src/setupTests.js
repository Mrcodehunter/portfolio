// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// jsdom (via Jest 27, pinned by react-scripts 5) does not expose TextEncoder /
// TextDecoder, which react-router 7 requires at import time.
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// jsdom implements neither IntersectionObserver (used by the navbar scrollspy
// and the useReveal hook) nor scrollIntoView (used by smooth anchor scrolling).
// Stub both so components can render under test.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;
window.IntersectionObserver = MockIntersectionObserver;

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = function scrollIntoView() {};
}

// jsdom does not implement window.scrollTo and logs an error for every call;
// Layout resets scroll on each navigation, so stub it to keep output clean.
window.scrollTo = function scrollTo() {};
