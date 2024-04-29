import { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import useDebounce from '@/hooks/useDebounce';

const Input = ({ setQuery }: any) => {
    const [q, setQ] = useState('');
    const { value, waiting} = useDebounce(q, 300)
    useEffect(()=>{
        setQuery(value)
    },[value, setQuery]);
    const onChange = (e:any)=>{
        setQ(e.target.value)
    }
    return <div className='flex justify-between items-center w-full p-4 border'>
        <input placeholder='Type to explore the news world!' className='w-full outline-none' value={q} onChange={onChange} />
        {waiting && <Spinner /> }
      </div>
}

export default Input;