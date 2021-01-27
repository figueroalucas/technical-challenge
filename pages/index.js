import Header from '../components/Header';
import JobBatch from '../components/JobBatch';
import SearchForm from '../components/SearchForm';
import Axios from 'axios';
import Footer from '../components/Footer';
import { getJobs } from './api/jobs'

const Index = ({ jobs }) => (
  <div className="bg-gray-100">
    <div className="bg-white">
      <Header />
      <SearchForm />
      {jobs?.map((jobBatch) => (
        <JobBatch key={jobBatch.name} jobBatch={jobBatch} />
      ))}
    </div>
    <Footer />
  </div>
);

export async function getStaticProps(context) {
  const jobs = getJobs()
  return {
    props: {
      jobs,
    },
  };
}

export default Index;
