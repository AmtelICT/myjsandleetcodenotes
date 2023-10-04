
//TOWER OF HANOI 

 // (consists of three rods where rod one has disk of varying size, the largest(botom),smallest(Top))
                  

// --- it is an application of recursion 

//Algorithm logic

//N/B. -- Aim is to move all disk from tower 1 to 3 using tower 2

//1. Only one disk one step at a time
//2. larger disk goes below 







//vishwas code
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
      return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
  }
  
  towerOfHanoi(3, 'A', 'C', 'B')
  