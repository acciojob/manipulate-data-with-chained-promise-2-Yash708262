//your JS code here. If required.
// Initial function that returns a promise
function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]); // after 3 seconds return array
    }, 3000);
  });
}

// Function to update output div
function updateOutput(arr) {
  document.getElementById("output").textContent = arr.join(",");
}

// Start the chaining
getArray()
  .then((arr) => {
    // First transformation: filter even numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter((num) => num % 2 === 0);
        updateOutput(evens); // show [2,4]
        resolve(evens);
      }, 1000);
    });
  })
  .then((evens) => {
    // Second transformation: multiply by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map((num) => num * 2);
        updateOutput(doubled); // show [4,8]
        resolve(doubled);
      }, 2000);
    });
  })
  .catch((err) => console.error("Error:", err));