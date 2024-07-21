export const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

export const getKeyString = (x, y) => `${x}x${y}`;

export const createName = () => {
  const prefix = randomFromArray([
    "COOL", "SUPER", "HIP", "SMUG", "COOL", "SILKY", "GOOD",
    "SAFE", "DEAR", "DAMP", "WARM", "RICH", "LONG", "DARK",
    "SOFT", "BUFF", "DOPE",
  ]);
  const animal = randomFromArray([
    "BEAR", "DOG", "CAT", "FOX", "LAMB", "LION", "BOAR",
    "GOAT", "VOLE", "SEAL", "PUMA", "MULE", "BULL", "BIRD", "BUG",
  ]);
  return `${prefix} ${animal}`;
};

export const isSolid = (x, y, mapData) => {
  const blockedNextSpace = mapData.blockedSpaces[getKeyString(x, y)];
  return (
    blockedNextSpace ||
    x >= mapData.maxX ||
    x < mapData.minX ||
    y >= mapData.maxY ||
    y < mapData.minY
  );
};

export const getRandomSafeSpot = () => randomFromArray([
  { x: 1, y: 4 }, { x: 2, y: 4 }, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, { x: 1, y: 5 }, { x: 2, y: 6 },
  { x: 2, y: 8 }, { x: 2, y: 9 }, { x: 4, y: 8 }, { x: 5, y: 5 }, {x: 6, y: 4}, {x: 8, y: 4},
  { x: 5, y: 8 }, { x: 5, y: 10 }, { x: 5, y: 11 }, { x: 11, y: 7 },
  { x: 12, y: 7 }, { x: 13, y: 7 }, { x: 13, y: 6 }, { x: 13, y: 8 },
  { x: 7, y: 6 }, { x: 7, y: 7 }, { x: 7, y: 8 }, { x: 8, y: 8 },
  { x: 10, y: 8 }, { x: 8, y: 8 }, { x: 11, y: 4 },
]);
