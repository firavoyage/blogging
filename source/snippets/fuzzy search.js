/* 
model: mistral large 2

prompt:

write a javascript function "search(query,list,ordered=true)"

query is a string

list is an array of string

return a list of array including all matches

when the query is "a z b" and the list has "axyzb"

it's a match whether order is true or not

when the query is "a z b" and the list has "bxyaz"

it's match if ordered is false

dont match case

"x y z" matches "XabcY Z"

and write unit tests as console.log for it
*/

function search(query, list, ordered = true) {
  const normalizedQuery = query.toLowerCase().split(' ').filter(Boolean);
  const matches = [];

  list.forEach(item => {
      const normalizedItem = item.toLowerCase();
      if (ordered) {
          let match = true;
          let itemIndex = 0;
          for (let i = 0; i < normalizedQuery.length; i++) {
              const queryChar = normalizedQuery[i];
              const indexInItem = normalizedItem.indexOf(queryChar, itemIndex);
              if (indexInItem === -1) {
                  match = false;
                  break;
              }
              itemIndex = indexInItem + queryChar.length;
          }
          if (match) {
              matches.push(item);
          }
      } else {
          let match = true;
          for (let i = 0; i < normalizedQuery.length; i++) {
              const queryChar = normalizedQuery[i];
              if (!normalizedItem.includes(queryChar)) {
                  match = false;
                  break;
              }
          }
          if (match) {
              matches.push(item);
          }
      }
  });

  return matches;
}

// Unit tests
console.log(search("a z b", ["axyzb"], true)); // ["axyzb"]
console.log(search("a z b", ["bxyaz"], true)); // []
console.log(search("a z b", ["bxyaz"], false)); // ["bxyaz"]
console.log(search("x y z", ["XabcY Z"], true)); // ["XabcY Z"]
console.log(search("x y z", ["ZabcY X"], true)); // []
console.log(search("x y z", ["ZabcY X"], false)); // ["ZabcY X"]
console.log(search("a b c", ["abc", "bca", "cab"], true)); // ["abc"]
console.log(search("a b c", ["abc", "bca", "cab"], false)); // ["abc", "bca", "cab"]
console.log(search("a b", ["a b", "b a", "ab"], true)); // ["a b", "ab"]
console.log(search("a b", ["a b", "b a", "ab"], false)); // ["a b", "b a", "ab"]
