class MinHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.value = [];
  }

  add(val) {
    this.value.push(val);
    this.bubbleUp(this.value.length - 1);
    if (this.value.length > this.capacity) {
      this.remove();
    }
  }

  remove() {
    this.swap(0, this.value.length - 1);
    const min = this.value.pop();
    this.tricleDown(0);

    return min;
  }

  bubbleUp(idx) {
    let parent = Math.floor((idx - 1) / 2);
    if (parent < 0) return;

    if (this.value[parent] > this.value[idx]) {
      this.swap(parent, idx);
      this.bubbleUp(parent);
    }
  }

  tricleDown(idx) {
    let leftChild = 2 * idx + 1;
    let rightChild = 2 * idx + 2;
    let min = idx;
    if (
      leftChild < this.value.length &&
      this.value[min] > this.value[leftChild]
    ) {
      min = leftChild;
    }
    if (
      rightChild < this.value.length &&
      this.value[min] > this.value[rightChild]
    ) {
      min = rightChild;
    }
    if (min !== idx) {
      this.swap(min, idx);
      this.tricleDown(min);
    }
  }

  swap(i, j) {
    [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
  }
}

function findKthLargest(nums, k) {
  let heap = new MinHeap(k);
  for (let n of nums) {
    heap.add(n);
  }

  console.log(heap.value);
  return heap.remove();
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
