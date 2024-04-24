
let currentJustice = 0;
const justices = [
    { name: 'Justice Thomas', leaning: 'conservative', question: "Could you clarify under what specific constitutional provision the Congress derives this authority?" },
    { name: 'Justice Kavanaugh', leaning: 'conservative', question: "How do you argue that the activities regulated by this federal climate bill are within the scope of interstate commerce?" },
    { name: 'Justice Sotomayor', leaning: 'liberal', question: "Can you discuss how this legislation aligns with our precedents on federal power during emergencies?" },
    { name: 'Justice Gorsuch', leaning: 'conservative', question: "How does this bill respect the principles of federalism and states' rights under the Constitution?" },
    { name: 'Justice Barrett', leaning: 'conservative', question: "What precedents support the extensive reach of this bill under the Necessary and Proper Clause?" }
];

function submitArgument() {
    const userInput = document.getElementById('userInput').value;
    const responseArea = document.getElementById('responseArea');
    if (userInput.trim() === '') {
        alert('Please enter your argument.');
        return;
    }
    const justice = justices[currentJustice];
    const response = justice.name + ' asks: "' + justice.question + '"';
    responseArea.innerHTML = '<p>' + response + '</p>';
    currentJustice = (currentJustice + 1) % justices.length;
}
