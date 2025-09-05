/**
 * the problem:
 * set {1/k, k is an integer from 1 to a}
 * select as much number as possible from the set
 * making each two numbers are at least 1/b apart.
 * solve for the case a = 100, b = 30.
 *
 * the solution using special property of the relationship of a and b:
 * (n-k)/30 <= a_k - a_n < a_k = 1/k
 * use am gm inequality to find the upper bound of n.
 * curate a set of max(n) numbers that fit the requirements
 *
 * the general solution:
 * from 1 to a, select numbers.
 * each time, select the min possible number.
 */

const each = (begin, end, step) => {
  if (typeof end != "number") {
    end = begin;
    begin = 0;
  }
  if (typeof step != "number") {
    step = 1;
  }

  const iterate = (begin, end, step) => {
    let index = begin;
    const iterator = {
      next() {
        if ((index - end) * step <= 0) {
          const value = index;
          index += step;
          return { value, done: false };
        } else {
          return { value: false, done: true };
        }
      },
      [Symbol.iterator]() {
        return iterator;
      },
    };
    return iterator;
  };
  return iterate(begin, end, step);
};

// b: [choices]
const numbers = [];
const issues = { upperbound: [], last: [] };

for (let b of each(1, 100)) {
  numbers[b] = [1];
  let current = 1;
  for (let repeat of each(1000)) {
    let changed = false;
    if (b <= current) {
      // 1/current <= 1/b
      break;
    } else if (b <= current * 2) {
      // 1/current <= 2/b

      // 1 / (1 / current - 1 / b);
      current = Math.ceil((current * b) / (b - current));
      numbers[b].push(current);
      break;
    } else {
      for (const x of each(current + 1, current + 100)) {
        // 1 / current - 1 / x >= 1 / b
        if (b * x - b * current >= x * current) {
          current = x;
          changed = true;
          break;
        }
      }
    }

    if (changed) {
      numbers[b].push(current);
    } else {
      break;
    }
  }

  const floor = Math.floor(Math.sqrt(b)) + b / Math.floor(Math.sqrt(b));
  const ceil = Math.ceil(Math.sqrt(b)) + b / Math.ceil(Math.sqrt(b));

  const min = Math.min(floor, ceil);
  const upperbound = Number.isInteger(min) ? min - 1 : Math.floor(min);
  const supremum = numbers[b].length;

  if (upperbound > supremum) {
    issues.upperbound.push(b);
  } else if (upperbound < supremum) {
    console.error({
      b,
      upperbound,
      supremum,
    });
  }

  const last = numbers[b][numbers[b].length - 1];
  if (last > 100) {
    issues.last.push(b);
  }
}
console.log(numbers);
console.log("in these cases upperbound != supremum", issues.upperbound);
console.log(
  "in these cases the last selected number is more than 100",
  issues.last
);

document.body.innerText = `in these cases upperbound != supremum: ${JSON.stringify(
  issues.upperbound
)} \n in these cases the last selected number is more than 100: ${JSON.stringify(
  issues.last
)}`;
