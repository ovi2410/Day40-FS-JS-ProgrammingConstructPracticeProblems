 // Function to check for prime number
 function checkPrime() 
 
              
    let n, i, flag = true;
      
    // Getting the value form the
    // text field using DOM
    n = document.myform.n.value;
    n = parseInt(n)
    for (i = 2; i <= n - 1; i++)
    {
        if (n % i == 0) 
        {
            flag = false;
            break;
        }
    }     
    // Check and display output
    if (flag == true)
    {
        console.log(n + " is prime");
    }
    else
    {
       console.log(n + " is not prime");
    }