var cancellable = function (fn, args, t) {
  let timeoutId;

  // Start a timer that executes the function fn with the arguments args after t milliseconds
  const timeoutFn = () => {
    timeoutId = setTimeout(() => {
      console.log(`fn executed at ${t}ms`);
      console.log({ time: t, returned: fn(...args) });
    }, t);
  };

  // Call the timeoutFn immediately to schedule the function call
  timeoutFn();

  // Return a cancel function that will cancel the scheduled execution of fn if invoked
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      console.log("fn execution cancelled");
    }
  };
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();
console.log("start", start);

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  console.log("diff", diff);
  result.push({ time: diff, returned: fn(...argsArr) });
};
console.log("result check", result);
console.log("check log", log);

const cancel = cancellable(log, args, t);
console.log("cancel", cancel);
const maxT = Math.max(t, cancelTimeMs);
console.log("max t", maxT);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
