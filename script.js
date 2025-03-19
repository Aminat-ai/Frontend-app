// chatbot.js

const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Function to add a message to the chatbox
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user input
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userMessage = userInput.value;
        addMessage('You', userMessage);
        userInput.value = ''; // Clear input field

        // Send the message to the AI and get a response
        getAIResponse(userMessage).then(response => {
            addMessage('AI', response);
        });
    }
});

// Function to simulate AI response (replace with actual API call)
async function getAIResponse(message) {
    // Simulate a delay for AI processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Basic AI logic (replace with a real AI model or API)
    if (message.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('how are you')) {
        return 'I am just a program, but I am functioning well!';
    } else {
        return 'I am not sure how to respond to that. Can you rephrase?';
    }
}