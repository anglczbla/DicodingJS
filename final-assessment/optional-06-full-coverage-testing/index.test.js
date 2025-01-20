import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';  // Mengimpor fungsi sum dari berkas index.js

test('Sum with two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);  // Pengujian dengan dua angka positif
});

test('Sum with zero and positive number', () => {
  assert.strictEqual(sum(0, 5), 5);  // Pengujian dengan nol dan angka positif
});

test('Sum with two zeros', () => {
  assert.strictEqual(sum(0, 0), 0);  // Pengujian dengan dua angka nol
});

test('Sum with negative number', () => {
  assert.strictEqual(sum(2, -3), 0);  // Pengujian dengan satu angka negatif
  assert.strictEqual(sum(-2, 3), 0);  // Pengujian dengan angka negatif yang lainnya
});

test('Sum with non-numeric inputs', () => {
  assert.strictEqual(sum('a', 5), 0);  // Pengujian dengan input yang bukan angka
  assert.strictEqual(sum(5, 'b'), 0);  // Pengujian dengan input yang bukan angka
  assert.strictEqual(sum('a', 'b'), 0);  // Pengujian dengan dua input yang bukan angka
});

test('Sum with large numbers', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);  // Pengujian dengan angka besar
});
