const HQ = 42;
const feet =264;
function distanceFromHqInBlocks(pickuplocation) {
    console.log(Math.abs(HQ - pickuplocation))
   return Math.abs (HQ - pickuplocation);
}
function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * feet;
}
function distanceTravelledInFeet(HQ, num){
        return Math.abs((num-HQ)*feet);
    
}
function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } 
    else if ((distanceTravelledInFeet(start, destination)-400)<=2000) {
        return 200

    }

    
}