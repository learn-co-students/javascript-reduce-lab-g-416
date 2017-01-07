const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];

function addBatteries(totalAmount, amount) {
  return totalAmount + amount;
}

var totalBatteries = batteryBatches.reduce(addBatteries, 0);

function countWords(hash, str) {
  var wordCount = str.split(' ').length.toString();

  if (hash[wordCount] >= 1) {
    hash[wordCount] ++;
  } else {
    hash[wordCount] = 1;
  };
  return hash;
};

var wordCountMap = monologueLines.reduce(countWords, {});
