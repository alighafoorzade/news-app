import { TonFilterChange } from '@/components/container/FiltersContainer/FiltersContainer';

const DateFilter = ({ name, onChange }: { name: string, onChange: TonFilterChange}) => {
    return <div className='flex justify-between gap-6 grow items-center p-4 border'>
        <label htmlFor={name}>{name}</label>
        <input onChange={(e)=>onChange(name,e.target.value)} className='outline-none grow max-w-fit' id={name} type='date' />
    </div>
}
export default DateFilter;