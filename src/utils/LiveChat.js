export function generateHumanUsername() {
  const firstNames = [
    "John",
    "Emma",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Ava",
    "Robert",
    "Isabella",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  const randomNumber = Math.floor(Math.random() * 100); // You can adjust the range as needed

  const username = `${randomFirstName}${randomLastName}${randomNumber}`;
  return username;
}

export function generateRandomComment() {
  const comments = [
    "This is amazing!",
    "I can't stop laughing!",
    "Incredible content!",
    "So informative!",
    "This made my day!",
    "Mind-blowing!",
    "I've never seen anything like this!",
    "Pure genius!",
    "Keep up the good work!",
    "Absolutely fantastic!",
  ];

  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  return randomComment;
}
