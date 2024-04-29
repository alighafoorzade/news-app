interface ISelectFilter {
    name: string;
    label: string;
    options: Array<{ label: string, value: any}>;
    disabled: boolean;
    onChange: (name: string, value:any) => void;
}
const SelectFilter = ({ name, disabled = false, label, options, onChange}: ISelectFilter) => {
    return <select disabled={disabled} className='flex  outline-none grow-[1] p-4 border' id={name} name={name} onChange={(e)=>onChange(name, e.target.value)}>
            <option selected disabled>{label}</option>
            {options.map(option=><option key={option.value} value={option.value} >{option.label}</option>)}
        </select>
}

export default SelectFilter;