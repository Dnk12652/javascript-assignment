function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if (hasDrivingLiscence === false){
        return  "You cannot drive"

    }else if ((isTired ===true)&& (isSober===false)){
        return "You shouldn't drive"
    }else if ((isTired===false)&& (isSober===true)){
        return "You can drive"
    }else{
        return "You shouldn't drive"

    }



    // Write you code here
}

module.exports = CanDrive;
