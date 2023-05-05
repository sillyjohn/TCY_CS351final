function addClass() {
    const form = document.getElementById('form');
    const classTemplate = document.querySelector('.class-template');
    const newClass = classTemplate.cloneNode(true);
    form.appendChild(newClass);
}

/*gpa = sum of (grade * credit)/total credit */
function calculateGPA() {
    let grades = getGrade();
    console.log("The grades are: " + grades);
    let credits = getCredits(); 
    console.log("The credits are: " + credits);
    let gpa = 0;
    let gradePoints = 0;
    let grade = 0;
    let credit = 0;
    for(let i = 0; i < credits.length;i++){
        grade = grades.pop();
        credit = credits.pop();
        totalCredit += credit;
        gradePoints += (grade * credit);
    }
   
    let output = document.getElementById("result");
    output.innerHTML = "Your GPA is: " + gpa;
}

function getCredits(){
    let creditInputs = document.querySelectorAll("input[name='credit[]']");
    let credits = [];

for (let i = 0; i < creditInputs.length; i++) {
    let credit = creditInputs[i].values;
    credits.push(credit); 
}
return credits;
}



function getGrade() {
		let gradePoint = 0;
    let totalCredit = 0;
    let totalCreditArr = [];
    let gradeInputs = document.querySelectorAll("input[name='grade[]']");
    let gradeValues = [];
    let grades = [];
   	let creditInputs = document.querySelectorAll("input[name='credit[]']");
    let credits = [];
		creditInputs.forEach(function(element,index){
    	const val = element.value; 
      credits.push(element.value);
      totalCreditArr.push(element.value);
    })
    gradeInputs.forEach(function(element, index) {
        grades.push(element.value);
    });
    for (let i = 0; i < gradeInputs.length; i++) {
        console.log("grades inside function"+gradeInputs[i].value);
        switch(gradeInputs[i].value){
            case "A+": 
            gradeValues.push(4.0);
                break;
            ;
            case "A": 
            gradeValues.push(4.0);
                break;
            ;
            case "A-": 
            gradeValues.push(3.7);
                break;
            ;
            case "B+": 
            gradeValues.push(3.3);
                break;
            ;
            case "B": 
            gradeValues.push(3.0);
                break;
            ;
            case "B-": 
            gradeValues.push(2.7);
                break;
            ;
            case "C+": 
            gradeValues.push(2.3);
                break;
            ;
            case "C": 
            gradeValues.push(2.0);
                break;
            ;
            case "C-": 
            gradeValues.push(1.7);
                break;
            ;
            case "D+": 
            gradeValues.push(1.3);
                break;
            ;
            case "D": 
            gradeValues.push(1.0);
                break;
            ;
            case "D-": 
            gradeValues.push(0.7);
                break;
            ;
            case "F": 
            gradeValues.push(0);
                break;
            ;
            default:
                console.log("no match");
                
        } 
    }
   	
    console.log("gradevalue:[" + gradeValues+"]")
    console.log("gradeLength:[" + gradeValues.length+"]")
    console.log("credit:[" + credits+"]")
		//grade point
    const len = gradeValues.length;
    for(let i = 0; i <len;i++){
    	gradePoint += (gradeValues.pop() * credits.pop()); 
			totalCredit+= parseInt(totalCreditArr.pop()); 
      console.log("Ran loop")
    }
     console.log("total credit:"+totalCredit);
     console.log("grad point :[" + gradePoint +"]");
   let gpa = gradePoint/totalCredit;
		
   let output = document.getElementById("result");
   output.innerHTML = "Your GPA is: " + gpa.toFixed(2);
}


