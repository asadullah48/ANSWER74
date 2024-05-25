// Q 74
// This function swaps the values of two variables
function swapValues() {
    let a = 35,
      b = 70; // Initially, a is 35 and b is 70
    console.log("Before swap: a =", a, "b =", b);
  
    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
  
    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
  }
  
  swapValues();
  // We use a temporary variable to hold 
  //one value while we swap them, like a magic trick!