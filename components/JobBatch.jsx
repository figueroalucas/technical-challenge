import React, { useState } from 'react';
import Avatar from './Avatar';
import JobDetail from './JobDetail';

const JobBatch = ({ jobBatch }) => {
  const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active)

  return (
    <>
      <div className="flex w-full py-3 px-4 items-center" onClick={handleClick}>
          <Avatar rounded={false} color="gray-300" content={jobBatch.name} />
          <p className="ml-4 w-full">{jobBatch.items.length} jobs for {jobBatch.name}</p>
      </div>
      {active && jobBatch.items.map((job) => (
          <JobDetail key={job.job_id} job={job} />
      ))}
    </>
  );
};

export default JobBatch;
