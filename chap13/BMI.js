class BMI {
    constructor(height = 0, weight = 0) {
        this.height = height;
        this.weight = weight;
    }

    getBMI() {
        if (this.height > 0) {
            let bmi = this.weight / ((this.height /100) ** 2);
            bmi = bmi * 10;
            bmi = Math.round(bmi);
            bmi = bmi / 10;
            return bmi;
        }
    }

    getIdealWeight() {
       let idealWeight = 22 * ((this.height/100) ** 2);
       idealWeight = Math.round(idealWeight);
       return idealWeight;
    }

    getAdvice() {
       let adviceMessage = "理想体重です。現状を維持しましょう。";
       let idealWeight = this.getIdealWeight();
       let bmi = this.getBMI();
       if(bmi > 22) {
           adviceMessage = "太り気味です。体重" + idealWeight + "kgを目指しましょう。"
       } else if(bmi < 22) {
           adviceMessage = "痩せ気味です。体重" + idealWeight + "kgを目指しましょう。"
       }
       return adviceMessage;
    }
}