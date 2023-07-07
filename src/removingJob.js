const Queue = require("bull");

/* interface IJobData {
  name: string;
  age: number;
  const queue = new Queue() < IJobData > "myQueue";
} */

const queue = new Queue("myQueue");

const controller = async () => {
  const queuedJobs = await queue.getJobs(["waiting", "delayed"]);

  const jobsToRemove = queuedJobs.filter(
    (queuedJob) => queuedJob.data.age >= 31
  );

  await Promise.all(jobsToRemove.map((job) => job.remove()));
};

void controller();
