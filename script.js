function calculateCurrentGrade(){
    var homework =  document.getElementById("homework").value;
    console.log(homework);
    var classwork =  document.getElementById("classwork").value;
    var testsAndQuizzes = document.getElementById("tests/quizzes").value;
    var homeworkWeight =  parseInt(document.getElementById("homeworkWeight").value);
    var classworkWeight =  parseInt(document.getElementById("classworkWeight").value);
    var testsAndQuizzesWeight = parseInt(document.getElementById("testAndQuizWeight").value);
    var homeworkAverage = averageArray(convertArrayStringToNumber(homework));
    var classworkAverage = averageArray(convertArrayStringToNumber(classwork));
    var testsAndQuizzesAverage = averageArray(convertArrayStringToNumber(testsAndQuizzes));
    var finalHomework = (homeworkAverage * (homeworkWeight/100));
    var finalClasswork = (classworkAverage * (classworkWeight/100));
    var finalTestsAndQuizzes = (testsAndQuizzesAverage * (testsAndQuizzesWeight/100));
    var finalGrade = ((finalHomework + finalClasswork + finalTestsAndQuizzes)/ (testsAndQuizzesWeight + classworkWeight + homeworkWeight)) * 100;
    document.getElementById("finalGrade").innerHTML = finalGrade;
    return Math.round(finalGrade);
}

function convertArrayStringToNumber(string){
    var array = string.split(",");
    for(var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i])
    }
    return array;
}

function averageArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
        console.log(sum);
    }
    console.log(sum);

    return sum/(array.length);
}

function calculateGradeNeeded() {
    var currentGrade = parseInt(document.getElementById("currentGrade").value);
    var wantedGrade = parseInt(document.getElementById("gradeWanted").value);
    console.log(wantedGrade);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    console.log(finalWeight);
    var final = 100 * (wantedGrade + finalWeight - currentGrade) / finalWeight;
    console.log(final);
    document.getElementById("neededOnFinal").innerHTML = "You need a " + Math.round(final) + " on the final to get a " + wantedGrade + " in the class.";
}

