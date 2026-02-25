// ======================= DATA =======================

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
];

const people = [
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul'
];

const devs = [
  { name: 'Alex', year: 1988 },
  { name: 'Dani', year: 1986 },
  { name: 'Matt', year: 1970 },
  { name: 'Wes', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Nice Nice Nice!', id: 123523 }
];

const travelMethods = [
  'car', 'car', 'truck', 'truck', 'truck',
  'bike', 'bike', 'walk', 'walk',
  'car', 'car', 'car', 'van', 'van'
];


// ======================= EXERCISES =======================

// 1. Filter inventors born in 1500s
const fifteen = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
console.log("Exercise 1:", fifteen);


// 2. Map full names
const inventorNames = inventors.map(inv => ({
  first: inv.first,
  last: inv.last
}));
console.log("Exercise 2:", inventorNames);


// 3. Sort by birth year
const sortedByBirthYear = inventors.sort((a, b) => a.year - b.year);
console.log("Exercise 3:", sortedByBirthYear);


// 4. Find Ada
const inventorNamedAda = inventors.find(inv => inv.first === 'Ada');
console.log("Exercise 4:", inventorNamedAda);


// 5. Convert "Last, First" → "First Last"
const firstLast = people.map(person => {
  const [last, first] = person.split(', ');
  return `${first} ${last}`;
});
console.log("Exercise 5:", firstLast);


// 6. Some (18+ check)
const isAdultPresent = devs.some(dev => (new Date().getFullYear() - dev.year) >= 18);
console.log("Exercise 6:", isAdultPresent);


// 7. Every (18+ check)
const allAdults = devs.every(dev => (new Date().getFullYear() - dev.year) >= 18);
console.log("Exercise 7:", allAdults);


// 8. Find comment by ID
const commentById = comments.find(comment => comment.id === 823423);
console.log("Exercise 8:", commentById);


// 9. Find index of comment
const idx = comments.findIndex(comment => comment.id === 123523);
console.log("Exercise 9:", idx);


// ======================= LEVEL UP =======================

// Level Up 1 – Total years lived
const totalYearsLived = inventors.reduce((total, inv) => {
  return total + (inv.passed - inv.year);
}, 0);

console.log("Level Up 1:", totalYearsLived); // 861


// Level Up 2 – Count travel methods
const travelMethodCounts = travelMethods.reduce((obj, method) => {
  if (!obj[method]) {
    obj[method] = 0;
  }
  obj[method]++;
  return obj;
}, {});

console.log("Level Up 2:", travelMethodCounts);