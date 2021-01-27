import jobs from '../../data/jobs';

export const searchJobs = (keyword, filters) => {
  let matchedJobBatch = [];

  if (filters) {
    for (const jobBatch of jobs) {
      for (const filterKey of Object.keys(filters)) {
        for (const job of jobBatch.items) {
          const jobToAdd = {};
          if (job[filterKey] === filters[filterKey]) {
            if (Object.keys(jobToAdd).length !== 0) {
              jobToAdd = { ...jobBatch, items: [job] };
            } else {
              jobToAdd.items.push(job);
            }
          }
          matchedJobBatch.push(jobToAdd);
        }
      }
    }
  } else {
    const actualRegex = new RegExp(keyword);

    jobBatchsLoop: for (const jobBatch of jobs) {
      for (const baseKey of Object.keys(jobBatch)) {
        if (actualRegex.test(jobBatch[baseKey].toString())) {
          matchedJobBatch.push(jobBatch);
          break jobBatchsLoop;
        }
      }
      for (const itemKey of Object.keys(jobBatch.items)) {
        if (Array.isArray(jobBatch.items[itemKey])) {
          for (const entry of jobBatch.items[itemKey]) {
            if (actualRegex.test(entry.toString())) {
              matchedJobBatch.push(jobBatch);
              break jobBatchsLoop;
            }
          }
        } else if (actualRegex.test(jobBatch.items[itemKey].toString())) {
          matchedJobBatch.push(jobBatch);
          break jobBatchsLoop;
        }
      }
    }
  }

  return matchedJobBatch;
};

export const getJobs = (keyword, job_type, work_schedule, experience, department) => {
  let jobsToReturn = [...jobs];

  if (job_type || work_schedule || experience || department) {
    jobsToReturn = searchJobs(null, {
      job_type,
      work_schedule,
      experience,
      department,
    });
  } else if (keyword) {
    jobsToReturn = searchJobs(keyword);
  }

  return jobsToReturn;
};

export default async (req, res) => {
  const {
    query: { keyword, job_type, work_schedule, experience, department },
  } = req;
  res.statusCode = 200;

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({
    jobs: getJobs(keyword, job_type, work_schedule, experience, department),
  });
};
