import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../src/lib/motion.mjs', import.meta.url), 'utf8').replace('export function', 'function');

function setup({ reduced = false, supported = true, top = 100, focused = false } = {}) {
  let change, observer;
  const calls = [];
  const preference = { matches: reduced, addEventListener: (_event, callback) => { change = callback; } };
  class Element {
    getBoundingClientRect() { return { top }; }
    matches() { return focused; }
    getAttribute() { return '60'; }
    animate(frames, options) {
      const animation = { finished: new Promise(() => {}), cancelled: false, cancel() { this.cancelled = true; } };
      calls.push({ frames, options, animation });
      return animation;
    }
  }
  const element = new Element();
  class IntersectionObserver {
    constructor(callback) { this.callback = callback; this.observed = new Set(); observer = this; }
    observe(target) { this.observed.add(target); }
    unobserve(target) { this.observed.delete(target); }
    disconnect() { this.disconnected = true; this.observed.clear(); }
    enter() { if (this.observed.has(element)) this.callback([{ target: element, isIntersecting: true }]); }
  }
  const window = { matchMedia: () => preference, ...(supported ? { IntersectionObserver } : {}) };
  const document = { querySelectorAll: () => [element] };
  runInNewContext(source + '\ninitReveals();', { window, document, Element, IntersectionObserver });
  return { calls, observer, preference, reduce: () => { preference.matches = true; change(); } };
}

test('Las entradas de secciones se ejecutan sólo una vez al entrar en la vista', () => {
  const state = setup();
  state.observer.enter();
  state.observer.enter();
  assert.equal(state.calls.length, 1);
  assert.equal(state.calls[0].options.duration, 400);
  assert.equal(state.calls[0].options.delay, 60);
  assert.equal(state.calls[0].frames.at(-1).opacity, 1);
});

test('Movimiento reducido y APIs ausentes mantienen el contenido sin animar', () => {
  for (const options of [{ reduced: true }, { supported: false }]) {
    const state = setup(options);
    assert.equal(state.observer, undefined);
    assert.equal(state.calls.length, 0);
  }
});

test('Cambiar a movimiento reducido cancela las animaciones activas', () => {
  const state = setup();
  state.observer.enter();
  state.reduce();
  assert.equal(state.observer.disconnected, true);
  assert.equal(state.calls[0].animation.cancelled, true);
});

test('Los bloques ya recorridos o con foco de teclado permanecen visibles', () => {
  for (const options of [{ top: -20 }, { focused: true }]) {
    const state = setup(options);
    state.observer.enter();
    assert.equal(state.calls.length, 0);
  }
});
