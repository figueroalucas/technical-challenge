import httpMocks from 'node-mocks-http';
import { searchJobs } from '../../jobs';
import fetchJobs from '../../jobs';

describe('/api/jobs', () => {
  describe('searchJobs()', () => {
    describe('When "Mammoth" keyword is sended', () => {
      test('should return only one job', () => {
        const expected = 1;
        const result = searchJobs('Mammoth');

        expect(result.length).toBe(expected);
      });

      test('should return job with the name "Mammoth Hospital"', () => {
        const expected = 'Mammoth Hospital';
        const [result] = searchJobs('Mammoth');

        expect(result.name).toEqual(expected);
      });
    });
  });
});
