import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Search from './Search';
import { Profile, Position } from './types';

interface ResultProps {
  results: Profile | null;
}

const Result: React.FC<ResultProps> = ({ results }) => {
  const location = useLocation();
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const { search } = location;
    const queryParams = new URLSearchParams(search);
    const queryValue = queryParams.get('q') || '';
    setQuery(queryValue);
  }, [location]);

  console.log(query);
  const isMatchingQuery = query != null && (query.toLowerCase().includes('john') || query.toLowerCase().includes('doe'));

  if (!isMatchingQuery || !results) {
    return (
      <div>
        <Search />
        <span>No results found</span>
      </div>
    );
  }

  return (
    <div>
      <Search />
      <div>
        <h1>{results.name}</h1>
        <p>Email: {results.email}</p>
        <p>Phone: {results.phone}</p>
      </div>
      <ul>
        {results.positions.map((position: Position, index: number) => (
          <li key={index}>
            <h2>{position.title}</h2>
            <p>Company: {position.company}</p>
            <p>Start Date: {position.startDate}</p>
            {position.endDate && <p>End Date: {position.endDate}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;