const name1 = 'Krish';
const name2 = 'Trish';
const name3 = 'Baltiboy';

function greeting() {
  return `Greetings from ${name1}, ${name2} and ${name3}`;
}

function character() {
  return `${name1} is a monkey, ${name2} is a cat and ${name3} is a donkey`;
}

const all = {
  name1,
  name2,
  name3,
  greeting,
  character,
};

export default all;
