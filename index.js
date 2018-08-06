/**
 * datastructures-js/min-heap
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * heap node
 * @function
 */
const node = (k, v) => {
  const key = k;
  const value = v || null;

  /**
   * @returns {string|number}
   */
  const getKey = () => key;

  /**
   * @returns {object}
   */
  const getValue = () => value;

  return {
    getKey,
    getValue
  };
};

/**
 * min heap
 * @function
 */
const minHeap = () => {
  let nodes = [];
  let heapSize = 0;

  /**
   * @returns {number}
   */
  const size = () => heapSize;

  /**
   * @param {number} i
   * @param {number} j
   * swaps two elements in the nodes list
   */
  const swap = (i, j) => {
    const temp = nodes[i];
    nodes[i] = nodes[j];
    nodes[j] = temp;
  };

  /**
   * finds left child's index from parent index
   * @param {number} parent
   * @returns {number}
   */
  const leftIndex = parent => (parent * 2) + 1;

  /**
   * finds right child's index from parent index
   * @param {number} parent
   * @returns {number}
   */
  const rightIndex = parent => (parent * 2) + 2;

  /**
   * finds parent's index of a child index
   * @param {number} i
   * @returns {number}
   */
  const parentIndex = child => Math.floor((child - 1) / 2);

  /**
   * finds the min child's index of a parent
   * @param {number} parent
   */
  const minChildIndex = (parent) => {
    const left = leftIndex(parent);
    const right = rightIndex(parent);
    if (left < heapSize && right < heapSize) {
      return nodes[left].getKey() < nodes[right].getKey()
        ? left : right;
    } else if (right < heapSize) {
      return right;
    } else if (left < heapSize) {
      return left;
    }
    return null;
  };

  /**
   * gets the min element (root) in the heap
   * @returns {object} - min heap key/value node
   */
  const min = () => {
    if (heapSize > 0) {
      return nodes[0];
    }
    return null;
  };

  /**
   * bubbles last element in the nodes list
   */
  const bubbleLast = () => {
    let child = nodes.length - 1;
    let parent = parentIndex(child);
    while (child > 0 &&
      nodes[parent].getKey() > nodes[child].getKey()) {
      swap(child, parent);
      child = parent;
      parent = parentIndex(child);
    }
  };

  /**
   * fix the root element
   */
  const fixRoot = () => {
    let parent = 0;
    let minChild = minChildIndex(parent);
    while (minChild !== null &&
      nodes[parent].getKey() > nodes[minChild].getKey()) {
      swap(parent, minChild);
      parent = minChild;
      minChild = minChildIndex(parent);
    }
  };

  /**
   * inserts a value into the heap and fix the min position
   * @param {(string|number)} key
   * @param {object} value
   */
  const insert = (key, value) => {
    nodes.push(node(key, value));
    heapSize += 1;
    bubbleLast();
  };

  /**
   * retrieves and removes the min element from the heap
   * @returns {object} - min heap key/value node
   */
  const extractMin = () => {
    if (heapSize > 0) {
      const m = min();
      nodes[0] = nodes[heapSize - 1];
      nodes.pop();
      heapSize -= 1;
      fixRoot();
      return m;
    }
    return null;
  };

  /**
   * clears the heap
   */
  const clear = () => {
    nodes = [];
    heapSize = 0;
  };

  // min heap api
  return {
    insert,
    min,
    extractMin,
    size,
    clear
  };
};

module.exports = minHeap;
