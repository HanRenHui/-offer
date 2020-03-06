var MaxQueue = function() {
  this.queue = [];
  this.max = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (!this.max.length) return -1;
  return this.max[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
  let top = this.max[this.max.length-1]
  while(value > top && this.max.length) {
    top = this.max.pop() 
  }
  this.max.push(value)

};



/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.queue.length) return -1;
  if (this.max[0] === this.queue[0]) {
    this.max.shift() 
  }
  return this.queue.shift();
};

