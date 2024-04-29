'use client'
import { useEffect, useState } from 'react';
import Input from '@/components/base/Input';
import NewsContainer from '@/components/container/NewsContainer';
import FiltersContainer from '@/components/container/FiltersContainer/FiltersContainer';
import { objectToCommaSeparatedArrays } from '@/utils/convertors';
import getSources from '@/actions/NewsApi/getSources';

const Test = () => {
  
  useEffect(()=>{
    getSources().then(res=>console.log('res', res));
  },[]);
  return <div></div>
}
export default function Home() {
  const [query, setQuery] = useState(null);
  const [filters, setFilters] = useState<Record<string, Array<any> | string | number>>({});
  useEffect(()=>{
    const flattedFilters = objectToCommaSeparatedArrays(filters)
    console.log('flatted', flattedFilters)
  },[filters]);
  return (
    <main className="w-full max-w-[1024px] mx-auto p-2">
      <Input setQuery={setQuery} />
      <FiltersContainer onFilterChange={(key, value)=>setFilters({...filters, [key]:value})} />
      <NewsContainer query={query} filters={filters} />
      <Test />
    </main>
  );
}
