const Queue = require("bull");
const users = [
  { name: "John", age: 31 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 19 },
  { name: "Jill", age: 17 },
  { name: "Jack", age: 32 },
];
const queue = new Queue("myQueue");
let delay;

// Process At: 2021-01-22T10:04:00.000Z
const currentTime = new Date().getTime();
const processAt = new Date("2021-01-22T10:04:00.000Z").getTime();
delay = processAt - currentTime;

// Process 30 minutes after timestamp
const timestamp = new Date("2021-01-22T10:04:00.000Z").getTime();
const currentTimeMs = new Date().getTime();
let = timestamp - currentTimeMs + 30 * 60 * 1000;

const controller = async () => {
  const promises = users.map((user) => queue.add(user, { delay }));
  await Promise.all(promises);
};

void controller();
