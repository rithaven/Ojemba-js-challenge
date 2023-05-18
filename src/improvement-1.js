/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countRbt(lapses) {
  var count = 0;
  for (var i = 0; i < lapses.length; i++) {
    lapses[i] == "R"?
      count++:count;
    
  }
  return count;
}
