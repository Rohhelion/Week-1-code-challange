function checkSpeed(speed){
    const speedlimit = 70
    const points = 5
    const pointsthreshhold = 12
    if (speed <= speeedlimit){
        return "Okay"

    }else {
        const exessspeed =speed - speedlimit
        const points =Math.floor(speed / points)
        if (points > pointsthreshhold){
    return "SUSPENDED LICENCE"

        }else {
            return "points" + points
        }

    } 
}
const speed =parseInt ("100")//ENTER SPEED
checkSpeed(speed)
console.log(checkSpeed(speed))