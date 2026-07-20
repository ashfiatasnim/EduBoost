async function generatePlan() {

const cgpa = document.getElementById("cgpa").value;
const target = document.getElementById("target").value;
const days = document.getElementById("days").value;
const hours = document.getElementById("hours").value;
const notes = document.getElementById("notes").value;

document.getElementById("result").innerHTML = "Generating your study plan...";

const response = await fetch("https://api.openai.com/v1/responses", {

method: "POST",

headers: {
"Content-Type": "application/json",
"Authorization": "Bearer YOUR_OPENAI_API_KEY"
},

body: JSON.stringify({

model: "gpt-4.1-mini",

input: `You are an expert academic coach.

Current CGPA: ${cgpa}
Target CGPA: ${target}
Days Until Exam: ${days}
Study Hours Per Day: ${hours}

Lecture Notes:
${notes}

Create:

1. Daily Study Plan

2. 5-minute Revision Notes

3. Five Probable Exam Questions

4. CGPA Improvement Strategy

5. Three Study Tips

6. One Motivational Message`

})

});

const data = await response.json();
console.log(data);
if (!response.ok) {
    document.getElementById("result").innerHTML =
        "API Error: " + JSON.stringify(data, null, 2);
    return;
}

document.getElementById("result").innerHTML =
data.output[0].content[0].text;

}