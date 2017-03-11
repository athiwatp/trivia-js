module.exports = [
  {
    question: 'What will <code>typeof null</code> return?',
    answers: ['\'object\'', '\'null\'', '\'undefined\'', '\'number\''],
    solution: 0,
    explanation: 'In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the bogus typeof return value.',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null',
  },
  {
    question: 'Which Array method changes the Array itself?',
    answers: [
      'Array.prototype.splice()',
      'Array.prototype.slice()',
    ],
    solution: 0,
    explanation: 'The splice() method changes the contents of an array by removing existing elements and/or adding new elements.',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
  },
  {
    question: 'Which operator is the only JavaScript operator that takes three operands?',
    answers: [
      'The conditional (ternary) operator',
      'The assignment operator',
      'Logical OR (||)',
    ],
    solution: 0,
    explanation: 'The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'
  },
  {
    question: 'What does ECMA in ECMAScript stand for?',
    answers: [
      'European Computer Manufacturers Association',
      'Electronic Computer Manufacturers Association',
      'Elitist Cheese Manufacturers Association',
    ],
    solution: 0,
    explanation: 'Ecma International is an international private (membership-based) non-profit standards organization for information and communication systems. It acquired its current name in 1994, when the European Computer Manufacturers Association (ECMA) changed its name to reflect the organization\'s global reach and activities.',
    source: 'https://en.wikipedia.org/wiki/Ecma_International',
  },
  {
    question: 'Who is the creator of the JavaScript programming language?',
    answers: [
      'Brendan Eich',
      'Tim Berners-Lee',
      'Dennis Ritchie',
      'Steve Wozniak',
    ],
    solution: 0,
    explanation: 'Brendan Eich is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation\'s chief technical officer and briefly its chief executive officer.',
    source: 'https://en.wikipedia.org/wiki/Brendan_Eich',
  },
  {
    question: 'When was JavaScript released for the first time?',
    answers: [
      '1995',
      '1994',
      '1996',
      '1999',
    ],
    solution: 0,
    explanation: 'Although it was developed under the name Mocha, the language was officially called LiveScript when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995, but it was renamed JavaScript when it was deployed in the Netscape Navigator 2.0 beta 3 in December.',
    source: 'https://en.wikipedia.org/wiki/JavaScript',
  },
];
