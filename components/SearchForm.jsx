import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
  const { register } = useForm({ mode: 'onSubmit' });

  return (
    <form>
      <div className="flex items-center px-4 py-4 border-t border-b border-gray-200">
        <AiOutlineSearch className="text-2xl" />
        <input
          className="focus:outline-none mx-2 w-full"
          placeholder="Search for any job, title, keyword or company"
          type="text"
          name="keyword"
        />
      </div>
    </form>
  );
};

export default SearchForm;
