import { useEffect, useRef, useState } from 'react'

const useDebounce = (input:any, durationMS: number) =>{
    const timeoutRef = useRef<any>(null);
    const [value,setValue] = useState<any>(input);
    useEffect(()=>{
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>{
            setValue(input)
        },durationMS);
        ()=> timeoutRef.current && clearTimeout(timeoutRef.current);
    },[input]);
    return {value, waiting: value !== input}
}

export default useDebounce;