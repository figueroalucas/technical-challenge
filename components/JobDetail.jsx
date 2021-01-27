import React, { useState } from 'react';
import moment from 'moment';
import Button from './Button';
import jobs from '../pages/api/jobs';

const Detail = ({ job }) => {
  return (
    <div className="px-4 pt-6">
      <p className="font-bold text-lg">Deparment:</p>
      <p>{job.department.join(', ')}</p>
      <p className="font-bold text-lg pt-4">Hours/ shifts:</p>
      <p>
        {job.hours[0]} hours / {job.work_schedule}
      </p>
      <p className="font-bold text-lg pt-4">Summary</p>
      <p>{job.description}</p>
      <div className="pt-4 pb-4">
          <Button>Job details</Button>
          <Button className="ml-2" outlined={TextTrackCue}>Save job</Button>
      </div>
    </div>
  );
};

const JobDetail = ({ job }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <>
      <div onClick={handleClick} className="px-2 mx-2 py-4 border-t border-gray-200">
        <p className="font-bold text-lg">{job.job_title}</p>
        <p>
          {job.job_type} | {job.salary_range[0]} - {job.salary_range[1]} an hour
          | {job.city}
        </p>
        <p>{moment(job.created).fromNow()}</p>
      </div>
      {active && <Detail job={job} />}
    </>
  );
};

export default JobDetail;
