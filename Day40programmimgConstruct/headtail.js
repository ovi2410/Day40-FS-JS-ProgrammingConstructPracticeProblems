var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    console.log("0 <br> Random Coin Value: Head")
} else if(floor === 1)
{
    console.log("1 <br> Random Coin Value: Tails")
}