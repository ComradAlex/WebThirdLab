const object1 = {
  name: "Boris",
  weight: 15
}


const object2 = {
  name: "Boris",
  weight: 15
}


const object3 = {
  name: "Rex",
  weight: 20
}

function isEquivalent(a, b) {


  var aProperties = Object.getOwnPropertyNames(a)
  var bProperties = Object.getOwnPropertyNames(b)
  

  if (aProperties.length != bProperties.length) {
    return false
  }
  
  

  for (var i = 0; i < aProperties.length; i++) {
    var propName = aProperties[i]

    if (a[propName] !== b[propName]) {
      return false
    }
  }



  return true
}


console.log(isEquivalent(object1, object2)) // true
console.log(isEquivalent(object1, object3)) // false
