const express = require("express");
const Queue = require("bull");

const app = express();
const queue = new Queue("myQueue");

const main = async () => {
  await queue.add({ name: "John", age: 30 });
};

queue.process((job, done) => {
  console.log(job.data);
  done();
});

main().catch(console.error);

app.listen(8000, () => {
  console.log(`Server running on ${8000}...`);
});
