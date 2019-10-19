function f1() {
  this.count = 0
  this.getCount = function () {
    return this.count
  }
  this.add = function () {
    this.count++
  }
}

function f2() {
  this.count = 0
  this.getCount = function () {
    return this.count
  }
  this.add = function () {
    this.count++
  }
}

var _f1 = f1
var _f2 = f2
var _f3 = f1

var ff1 = new _f1()
var ff2 = new _f2()
var ff3 = new _f3()
var ff4 = ff1
ff1.add()
ff2.add()
ff3.add()
ff4.add()

console.log(ff1.getCount())
console.log(ff2.getCount())
console.log(ff3.getCount())
console.log(ff4.getCount())
