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

const batteryReducer = (accumulator, currentValue) => accumulator + currentValue;

const totalBatteries = batteryBatches.reduce(batteryReducer, 0);

const monologueReducer = (array) => {
  let newObj = {};
  for(let i = 0; i < array.length; i++){
    if(newObj[array[i].length]){
      newObj[array[i].length] += 1
    } else {
      newObj[array[i].length] = 1
    }
    return newObj
  }
}

const wordCountMap = monologueLines.reduce((map, sentence) => {
  const wordCount = sentence.split(' ').length;

  if (!map[wordCount]) {
    map[wordCount] = 0;
  }

  map[wordCount]++;

  return map;
}, {});