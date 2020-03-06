/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.help = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (!this.help.length || x < this.help[this.help.length-1]) {
      this.help.push(x)
    } else {
      this.help.push(this.help[this.help.length-1])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop() 
    this.help.pop() 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (!this.stack.length) return -1 
    return this.stack[this.stack.length-1]    
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    if (!this.stack.length) return -1 
    return this.help[this.help.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */