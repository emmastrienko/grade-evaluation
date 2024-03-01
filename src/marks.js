// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
          try {
            const total = math + english + science + social + language;
            resolve(total)
          } catch(err) {
            reject(err);
          }
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
      try {
        resolve(totalMarks / 5);
      } catch(err) {
        reject(err);
      }
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       
      try {
        if(averageMarks >= 90){
          resolve("A+");
        } else if(averageMarks >= 80 && averageMarks <= 89) {
          resolve("A")
        } else if(averageMarks >= 70 && averageMarks <= 79) {
          resolve("B")
        } else if(averageMarks >= 60 && averageMarks <= 69) {
          resolve("C")
        } else if(averageMarks >= 50 && averageMarks <= 59) {
          resolve("E")
        } else {
          resolve("F");
        }
      } catch(err) {
        reject(err);
      }
    }) 
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
