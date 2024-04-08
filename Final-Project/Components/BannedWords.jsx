const bannedWords = ['fuck', 'fucker', 'motherfucker', "shit", "shithead", "slut", "bitch", "nigga", "nigger", "ass", "dick", "pussy"]; // Add your banned words here

function containsBannedWords(content) {
  const lowerCaseContent = content.toLowerCase(); // Convert content to lowercase for case-insensitive comparison
  return bannedWords.some(word => lowerCaseContent.includes(word));
}

export default containsBannedWords;

