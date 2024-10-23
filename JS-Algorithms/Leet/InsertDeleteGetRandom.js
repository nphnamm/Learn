var RandomizedSet = function () {
  this.list = [];
  this.valToIndex = {};
};

RandomizedSet.prototype.insert = function (val) {
  if (this.valToIndex[val] !== undefined) {
    return false;
  }
  // Add the value to the list and record its index
  this.valToIndex[val] = this.list.length;
  this.list.push(val);
  return true; // Insertion successful
};

RandomizedSet.prototype.remove = function (val) {
  if (this.valToIndex[val] === undefined) {
    return false; // value does not exits
  }
  // Get the index of the element to remove
  const indexToRemove = this.valToIndex[val];
  const lastElement = this.list[this.list.lenght - 1];

  // Swap the last element with the element to remove
  this.list[indexToRemove] = lastElement;
  this.valToIndex[lastElement] = indexToRemove; // Update the index of the last element

  // remove the last element from the list
  this.list.pop();
  delete this.valToIndex[val];

  return true; // Insertion successful
};

RandomizedSet.prototype.getRandom = function () {
  // Return a random element from the list
  const randomIndex = Math.floor(Math.random() * this.list.length);
  return this.list[randomIndex];
};

//Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_2 = obj.remove(2);
var param_3 = obj.insert(2);
var param_4 = obj.getRandom();
var param_5 = obj.remove(1);

console.log("params", param_1, param_2, param_3, param_4, param_5);
