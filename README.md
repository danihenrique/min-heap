# @datastrucures-js/min-heap

[![build:?](https://travis-ci.org/datastructures-js/min-heap.svg?branch=master)](https://travis-ci.org/datastructures-js/min-heap) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/min-heap.svg)](https://www.npmjs.com/package/@datastructures-js/min-heap)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/min-heap.svg)](https://www.npmjs.com/package/@datastructures-js/min-heap) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/min-heap)

elements data type: **number**, **string**.

<img width="420" alt="Min Heap" src="https://user-images.githubusercontent.com/6517308/36940955-78f30c82-1f15-11e8-9ed1-6d9414c243c4.png">

## Usage
```js
const minHeapFn = require('@datastructures-js/min-heap');
const minHeap = minHeapFn();
```

## API

**.insert(key, value)** 

inserts a key/value node into the heap. default value is null.
```javascript
minHeap.insert(50, 'test');
minHeap.insert(80);
minHeap.insert(30);
minHeap.insert(90);
minHeap.insert(60);
minHeap.insert(40);
minHeap.insert(20, { name: 'john' });
```

**.size()** 

retrieves the size of the heap
```javascript
console.log(minHeap.size()); // 7
```

**.min()** 

peeks on the min key node in the heap
```javascript
console.log(minHeap.min().getKey()); // 20
console.log(minHeap.min().getValue()); // { name: 'john' }
```

**.extractMin()** 

retrieves and remove the min key node from the heap
```javascript
console.log(minHeap.extractMin().getKey()); // 20
console.log(minHeap.min().getKey()); // 30
```

**.clear()** 

clears the heap
```javascript
minHeap.clear();
console.log(minHeap.size()); // 0
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/min-heap/blob/master/LICENSE)
