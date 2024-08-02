//q1.Multiplication Generator 
for (let i = 1; i <= 10; i++) { // for loop for numbers 1-10
    let row = '';//empty string to initialize row
    for (let j = 1; j <= 10; j++) {
      row += j * i + '\t';// multiply outer loop with inner loop
    }
    console.log(row);// print the rows
  }
//q2. sum of numbers in array in number
let a=0;//initializing a as 0
let b=[77,140,166,172,100];// creating an array
for(let i=0;i<b.length;i++){// using for loop
    a+= b[i];     //adding the current element in b to a
}console.log("the sum is:"+a);// printing the sum of numbers

//q3.palindrome checker
function palindromeCheck(str) { // making a funct namred palindromeCheck
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Compare the original and reversed strings
    return cleanedStr === reversedStr;
  }
  
  // Checking if string is palindrome
  console.log(palindromeCheck("level"));



//q4.Fibonacci Series Checker
function generateFibonacciSeries(N) {// creatng a function named generateFibonacciSeries
    let fn1 = 0, fn2 = 1, nextFibonacci;// initializing the first two numbers
  
    console.log('Fibonacci Series up to', N, 'terms:');// printing the header for series
  
    for (let i = 1; i <= N; i++) {//loop to generate fibonacci series upto n numbers
      console.log(fn1);// print the current fibonacci series
      nextFibonacci = fn1 + fn2;// calculating the next number
      fn1 = fn2;// updating the previous two numbers
      fn2 = nextFibonacci;
    }
  }
  
  // Example usage
  if (process.argv.length < 3) { //check if the required number of command-line arguments are provided
    console.log('Please provide the number of Fibonacci terms as a command-line argument.');//print this message if the number is not provided return

    return;
  }
  
  const numTerms = parseInt(process.argv[2]);//parse the number of terms from the command-line arguents
  generateFibonacciSeries(numTerms) //call the function to generate the fibonacci series with the provided number of terms


//q5. Block scope with Let and const
function Scopes() {
    // Here we are using function scope
    if (true) {
        var Var1 = "I am a var variable"; // Function-scoped
        let Variable2 = "I am a let variable"; // Block-scoped
        const Var3 = "I am a const variable"; // Block-scoped

        // Logging inside the block where Variable2 and Var3 are accessible
        console.log(Variable2); // This will work
        console.log(Var3); // This will work
    }
    console.log(Var1); // This will work because Var1 is function-scoped
    // The following two lines will throw an error because Variable2 and Var3 are block-scoped
    // console.log(Variable2); // This will cause a ReferenceError
    // console.log(Var3); // This will cause a ReferenceError
}
Scopes(); // Calling the function