
const myWeek = [
    { day: "Monday", activity: "biking", category: "health", hoursSpent: 1.0, enjoyment: 5, timeOfDay: "morning"},
    { day: "Tuesday", activity: "reading", category: "relax", hoursSpent: 1.5, enjoyment: 6, timeOfDay: "evening"},
    { day: "Wednesday", activity: "soccer", category: "health", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening"},
    { day: "Thursday", activity: "study", category: "school", hoursSpent: 2.5, enjoyment: 4, timeOfDay: "evening"},
    { day: "Friday", activity: "dinner with friends", category: "social", hoursSpent: 2.0, enjoyment: 8, timeOfDay: "evening"},
    { day: "Saturday", activity: "weight lifting", category: "health", hoursSpent: 1.2, enjoyment: 6, timeOfDay: "morning"},
    { day: "Sunday", activity: "hike", category: "health", hoursSpent: 2.0, enjoyment: 7, timeOfDay: "afternoon"},
]

/*
Activity with highest enjoyment will be "dinner with friends"
Category that will dominate week will be "health"
More activities at evening becuase daytime is taken up with work
*/

// Total hours spent on health activities
function totalHealthHours(log) {
    return log
        .filter(entry => entry.category === "health")
        .reduce((sum,e) => sum + e.hoursSpent, 0);
}

// Average enjoyment for evening activities
function avgEveningEnjoyment(log) { 
    const evening = log.filter(e => e.timeOfDay === "evening");
    if (evening.length === 0) return 0;
    return evening.reduce((sum,e) => sum + e.enjoyment, 0) / evening.length;
}

// Higher order function
function filterCategory(arr, category) {
    return arr.filter(entry => entry.category === category);
}
const healthyDays = filterCategory(myWeek, "health");

//Test Output 
console.log("Total health hours:", totalHealthHours(myWeek)); 
console.log("Average evening enjoyment:", avgEveningEnjoyment(myWeek));  
console.log("Days with health related activities:", healthyDays.map(e => e.day).join(", "));