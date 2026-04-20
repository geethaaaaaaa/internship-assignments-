let students = [
    { name: "Rahul", marks: [80, 75, 90] },
    { name: "Anita", marks: [85, 88, 92] },
    { name: "Kiran", marks: [70, 65, 78] }
];

function calculateAverage(marks) {
    let sum = marks.reduce((a, b) => a + b, 0);
    return sum / marks.length;
}

function getGrade(avg) {
    if (avg >= 90)
        return "A";
    else if (avg >= 75)
        return "B";
    else if (avg >= 60)
        return "C";
    else
        return "D";
}

let topper = null;
let highestAvg = 0;

students.forEach(student => {
    student.average = calculateAverage(student.marks);
    student.grade = getGrade(student.average);

    if (student.average > highestAvg) {
        highestAvg = student.average;
        topper = student;
    }
});

console.log("===== Student Report =====");

students.forEach(student => {
    console.log("Name   :", student.name);
    console.log("Marks  :", student.marks.join(", "));
    console.log("Average:", student.average.toFixed(2));
    console.log("Grade  :", student.grade);
    console.log("--------------------------");
});

console.log("Topper:");
console.log(topper.name + " with average " + topper.average.toFixed(2));