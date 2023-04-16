enum LorR {
  'left' = 'Left',
  'right' = 'right',
};

interface ICat {
  direction: LorR;
};

type Cats = [ICat];

const cats = [
  { direction: "left" },
  { direction: "right" },
  { direction: "left" },
  { direction: "left" },
  { direction: "right" },
];

/**
 * 
 * @param cats an array of cats with a direction property indicating the direction they're facing, "Left" or "Right"
 * @param direction a string (enum) either "Left" or "Right"
 * @returns total number of cats facing the same direction as the first cat
 */
const numCatsFacing = (cats: Cats, direction: LorR): number => {

  /*the inside work needed to be done:
    if done iteratively:
      traverse through each cat starting from the second cat until the end
      each time checking the direction and incrementing a counter
    if done recursively:
      what's the smallest amount of work to be done that can be multiplied to encapsulate all of the cats to be searched?
      check a single cat passed in (maybe in index form?) for it's direction and return a number,
        returned number will be 1 if the cat is facing the same direction as the first cat
        returned number will be 0 if the cat is facing the other direction as the first cat
      it base cases with an index pointer out of scope?
      calls itself on the next cat index? or returns itself called on next cat plus the current number either 0 or 1?
      each recursive end will bubble back up returning either 0 or 1
      
      the total number of cats should be.... return 1 + innerFunc(index, direction)
  */

  /**
   * 
   * @param index of cat to check
   * @returns 1 if cat at index is face same direction as first cat, 0 otherwise
   */
  const innerFunc = (index: number): number => {
    if (!cats[index]) return 0;
    return (cats[index].direction === direction) ? 1 + innerFunc(index + 1) : 0;
  };

  //initialize recursive inner function
  const totalNumOfCatsFacingSameDirectionAsTheVeryFirstCat = innerFunc(1) + 1;

  return totalNumOfCatsFacingSameDirectionAsTheVeryFirstCat;
};
