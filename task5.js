function createCounter() {
  
    var createCounter = 1;
    return function() {
        return createCounter++;
    };
}

const count = createCounter()

count() // 1
count() // 2
count() // 3
count() // 4

console.log(count()) // 5
