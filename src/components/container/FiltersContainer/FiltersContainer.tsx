import getSources from '@/actions/NewsApi/getSources';
import { DateFilter, SelectFilter } from '@/components/base/Filters';
import { SORT_OPTIONS } from '@/constants/options';
import React, { ReactNode, useEffect, useState } from 'react';

export type TonFilterChange = (key: string, value: any) => void;
interface IFilter {
    onFilterChange: TonFilterChange;
}

const SourcesFilter = ({ onFilterChange }: IFilter) => {
    const [loading, setLoading] = useState(false);
    const [sourcesOptions, setSourcesOptions] = useState([]);
    const getSourcesFn = async () => {
        setLoading(true);
        const res = await getSources();
        if (!res.ok) setSourcesOptions([]);
        const options = res.sources.map((source: { name: string, id: string }) => ({ label: source.name, value: source.id }));
        setSourcesOptions(options);
        setLoading(false)
    }
    useEffect(() => {
        getSourcesFn()
    }, []);
    return <SelectFilter disabled={!loading} label='source' name="sources" options={sourcesOptions} onChange={onFilterChange} />
}

const FiltersRow = ({ children }: { children: ReactNode }) => {
    return <div className='grid sm:grid-cols-2 gap-4 mt-4'>{children}</div>
}

const FiltersContainer = ({ onFilterChange }: IFilter) => {

    return <>
        <FiltersRow>
            <DateFilter name='from' onChange={onFilterChange} />
            <DateFilter name='to' onChange={onFilterChange} />
        </FiltersRow>
        <FiltersRow>
            <SelectFilter label='sort' name="sortBy" options={SORT_OPTIONS} onChange={onFilterChange} />
            <SourcesFilter onFilterChange={onFilterChange} />
        </FiltersRow>
    </>
}

export default FiltersContainer;