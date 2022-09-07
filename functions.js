/**
 * Get GPA from Marks
 */
function getGpa(marks){
    let gpa;
    if(marks >= 0 && marks < 33 ){
        gpa = 0;
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
    }else if(marks >= 50 && marks < 60){
        gpa = 3;
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
    }else if(marks >= 80 && marks <= 100){
        gpa = 5;
    }
    return gpa;
}
    

    /**
     * Get Grade from makrs
     */
     function getGrade(marks){
        let grade;
        if(marks >= 0 && marks < 33 ){
            grade = 'F';
        }else if(marks >= 33 && marks < 40){
            grade = 'D';
        }else if(marks >= 40 && marks < 50){
            grade = 'C';
        }else if(marks >= 50 && marks < 60){
            grade = 'B';
        }else if(marks >= 60 && marks < 70){
            grade = 'A-';
        }else if(marks >= 70 && marks < 80){
            grade = 'A';
        }else if(marks >= 80 && marks <= 100){
            grade = 'A+';
        }
        return grade;
    }
        

        //**Currency Covert Function */

       /* function currencyConvert(amount, type){
            let rate = 0;
            switch(type){
                case "USD" :
                    rate = 86;
                    break;
                case "Pound" :
                    rate = 114;
                    break;    
                case "CAD" :
                    rate = 67;
                    break;   
                case "Euro" :
                    rate = 96;
                    break;    
            }
            console.log(`
                ${amount} ${type} = ${amount * rate} BDT.
            `)
        }
         */