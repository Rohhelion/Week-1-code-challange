function calculateGrade(marks) {
    if (marks > 79) {
    
      return "A"
    }
    
     else if (marks >= 60 &&   marks <= 79) {
      return "B"
     }
    
    
     else if (marks > 49 &&  marks <= 59) {
      return 'C'
     }
    
     else if (marks > 40 &&   marks <= 49) {
      return "D"
     }
     
     else {
    return "E"
     } 
    }
function grade() {
     let input = document.getElementById("inputField")
    let marks = parseInt(input.value)
    if (marks < 0 || marks > 100 || isNaN (marks)) {
        prompt ("invalid marks")

    }
    else {
        let grade = calculateGrade(marks)
        let gradeOutput = document.getElementById("result")
        gradeOutput.textContent = grade
    }
}