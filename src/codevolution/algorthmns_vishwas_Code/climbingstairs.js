
//CLIMBING STAIRS  

//Question: Given a staircase of n steps,count the distinct ways to climb to top if you can only
//step 1 stair or 2 at a time. e,g if n=4 then ways = 5 

// ----This is implementation of fibonnacci sequence

//vishwas code
function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for (let i = 2; i <= n; i++) {
      noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
  }
  
  console.log(climbingStaircase(1))
  console.log(climbingStaircase(2))
  console.log(climbingStaircase(3))
  console.log(climbingStaircase(4))
  console.log(climbingStaircase(5))
  