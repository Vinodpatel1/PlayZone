// utils/randomData.js
export const randomNames = [
  "Amit", "Neha", "Rahul", "Simran", "John", "Emma", "Vinod", "Sophia", "Raj"
];

export const randomMessages = [
  "Hello everyone 👋",
  "What’s up?",
  "Nice video!",
  "I totally agree 👍",
  "This is awesome 🔥",
  "Who else is watching?",
  "Great explanation!",
  "😂😂😂",
  "Sub to my channel!"
];

// Random pick helper
export const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
