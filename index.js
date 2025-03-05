function distanceFromHqInBlocks(location){
    const hq = 42;
    if (location >= hq){
        return location - hq;
    } else {
        return hq - location;
    }
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end){
    if (end > start){
        return (end - start) * 264;
    } else {
    return (start - end) * 264;
    }
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02; 
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    } else {
        return `cannot travel that far`;
    }
}
