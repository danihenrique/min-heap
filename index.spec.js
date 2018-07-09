const { expect } = require('chai');
const minHeapFn = require('./index');

describe('minHeap tests', () => {
  const minHeap = minHeapFn();

  describe('.insert(value)', () =>
    it('should insert values into the min heap', () => {
      minHeap.insert(50);
      minHeap.insert(80);
      minHeap.insert(30);
      minHeap.insert(90);
      minHeap.insert(60);
      minHeap.insert(40);
      minHeap.insert(20);
    }));

  describe('.min()', () =>
    it('should get the min value in the heap', () =>
      expect(minHeap.min()).to.equal(20)));

  describe('.size()', () =>
    it('should get the size of the heap', () =>
      expect(minHeap.size()).to.equal(7)));

  describe('.extractMin()', () =>
    it('should extract the min value in the heap', () => {
      expect(minHeap.extractMin()).to.equal(20);
      expect(minHeap.min()).to.equal(30);
      expect(minHeap.size()).to.equal(6);

      expect(minHeap.extractMin()).to.equal(30);
      expect(minHeap.min()).to.equal(40);
      expect(minHeap.size()).to.equal(5);

      expect(minHeap.extractMin()).to.equal(40);
      expect(minHeap.min()).to.equal(50);
      expect(minHeap.size()).to.equal(4);

      expect(minHeap.extractMin()).to.equal(50);
      expect(minHeap.min()).to.equal(60);
      expect(minHeap.size()).to.equal(3);

      expect(minHeap.extractMin()).to.equal(60);
      expect(minHeap.min()).to.equal(80);
      expect(minHeap.size()).to.equal(2);

      expect(minHeap.extractMin()).to.equal(80);
      expect(minHeap.min()).to.equal(90);
      expect(minHeap.size()).to.equal(1);

      expect(minHeap.extractMin()).to.equal(90);
      expect(minHeap.min()).to.equal(null);
      expect(minHeap.size()).to.equal(0);
    }));

  describe('.clear()', () =>
    it('should clear the heap', () => {
      minHeap.clear();
      expect(minHeap.min()).to.equal(null);
      expect(minHeap.extractMin()).to.equal(null);
      expect(minHeap.size()).to.equal(0);
    }));
});
