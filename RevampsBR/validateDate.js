function isValidDate(day, month, year){
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
}

function calculateAge(day, month, year){
    const today = new Date();
    const dob = new Date(year, month - 1, day);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // adjust date if birthday hasn't occured this year yet 
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
        age--;
    }

    return age;
}

// var Dob = attributeApi.get('dob');
var Dob = "29/02/2001"
var year = parseInt(Dob.split(/[-/]/)[2]);
var month = parseInt(Dob.split(/[-/]/)[1]);
var day = parseInt(Dob.split(/[-/]/)[0]);

// check if date is valid
if (!isValidDate(day, month, year)){
    console.error('Invalid date: The entered date is not valid in a calendar year');
}
else {
    const newdob = (day < 10 ? "0" : "") + day + "_" + (month < 10 ? "0": "") + month + "_" + year;
    const age = calculateAge(day, month, year);
    const isBelow18 = age < 18;

    console.log(`valid date: ${newdob}`);
    console.log(`Age: ${age}`);
    console.log(`is Below 18: ${isBelow18}`);
}
