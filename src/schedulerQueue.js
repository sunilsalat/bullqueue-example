const Queue = require("bull");

const scheduler = new Queue("schedulerQueue", {
  /* jon will run every minute */
  defaultJobOptions: { repeat: { every: 60 * 1000 } },
});

const main = async () => {
  await scheduler.add({ name: "John", age: 30 });
};

scheduler.process((job, done) => {
  console.log("Scheduled job", job.data);
  done();
});

main().catch(console.error);
