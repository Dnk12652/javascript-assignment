// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    mass1 = parseInt(mass)
    height1 = parseInt(height)
    if (height1>0 && mass1>0){
        x = parseInt(mass1/(height1 * height1))
        return x
    }else{
        return "INVALID INPUT"
    }
    // Write your code here
}

module.exports = BMICalculator;
