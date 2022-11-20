// first recursion function

// write a function

function countDown(num) {

    // sub 1 from the total num till reach 0(base cond)
    if (num <= 0) {
      console.log("All Done!");
      return;
    }
    
    console.log(num);
    num--;
    countDown(num); //this is where recursion happens
    
  }
  
  // input 3
  
  countDown(3)
  
  
  /* 
  
  behind the scenes~
  
  1. print 3 // the code prints 3
  2. countDown(2) // then goes back to countDown function
  3. print 2 // the code then prints 2
  4. countDown(1) // then again recursion happens
  5. print 1 // code prints 1, finally
  6. countDown(0) // then hits the base condition of countDown(0)
  7. print("All Done") // it finally prints ALL DONE
  
  */