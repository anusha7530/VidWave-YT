var nameList = [
  "John",
  "Emma",
  "Olivia",
  "Liam",
  "Ava",
  "William",
  "Sophia",
  "James",
  "Isabella",
  "Benjamin",
  "Mia",
  "Lucas",
  "Charlotte",
  "Henry",
  "Amelia",
  "Alexander",
  "Harper",
  "Michael",
  "Evelyn",
  "Daniel",
  "Abigail",
  "Matthew",
  "Emily",
  "Joseph",
  "Ella",
  "Samuel",
  "Elizabeth",
  "David",
  "Sofia",
  "Carter",
  "Madison",
  "Owen",
  "Scarlett",
  "Wyatt",
  "Victoria",
  "Jack",
  "Aria",
  "Luke",
  "Grace",
  "Gabriel",
  "Chloe",
  "Isaac",
  "Penelope",
  "Anthony",
  "Layla",
  "Dylan",
  "Lillian",
  "Lincoln",
  "Nora",
  "Sebastian",
  "Zoey",
];
export const generateRandomName = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};

export const generateRandomMessage = () => {
  const messages = [
    "Wow, this video is amazing!",
    "Loved this content!",
    "Great explanation!",
    "Keep up the good work!",
    "Hello everyone!",
    "Shoutout to the host!",
    "So informative, thank you!",
    "I didn't know that, thanks!",
    "Can you explain that again?",
    "First time here, loving it!",
    "This is so helpful!",
    "Amazing graphics!",
    "I'm learning so much!",
    "Where can I find more info?",
    "Love the energy in this video!",
    "Can you cover more on this topic?",
    "Thank you for sharing this!",
    "Such a cool video!",
    "I'm definitely subscribing!",
    "Can you recommend other videos?",
    "This is exactly what I needed!",
    "Can you do a Q&A session?",
    "I have a question!",
    "This video deserves more views!",
    "Great production quality!",
    "How long did this take to make?",
    "I'm sharing this with my friends!",
    "This made my day!",
    "You're so talented!",
    "This is my new favorite channel!",
    "Thanks for the tips!",
    "Can you explain it in more detail?",
    "Loving the background music!",
    "Where are you streaming from?",
    "This content is gold!",
    "Can you do more live sessions?",
    "I'm so glad I found this channel!",
    "What software are you using?",
    "This is super entertaining!",
    "Can you give more examples?",
    "Love the animations!",
    "When's the next video?",
    "This is so relatable!",
    "Can you talk about this topic next?",
    "Amazing presentation!",
    "I learned a lot today!",
    "Thanks for going live!",
    "This video is a lifesaver!",
    "Can you provide a link to resources?",
    "What inspired this video?",
  ];
  const randomIndex = Math.round(Math.random() * messages.length);

  return messages[randomIndex];
};

export const nFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.findLast((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
    : "0";
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getUTCFullYear();
  return `${day}-${month}-${year}`;
};
