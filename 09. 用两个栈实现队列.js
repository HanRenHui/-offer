var CQueue = function() {
  this.a1 = []
  this.a2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.a1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (!this.a1.length && !this.a2.length) return -1 
  
  if (this.a2.length) {
    return this.a2.pop()
  } else {
    while(this.a1.length) {
      this.a2.push(this.a1.pop())
    }
    return this.a2.pop()
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */