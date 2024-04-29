'use client'
import Image from 'next/image';
import getNews from '@/actions/NewsApi/getNews';
import { ImagePlaceholder } from '@/constants/placeholders';
import { useEffect, useState } from 'react';
import { Artifika } from 'next/font/google';
import { NEWS_API_OFFLINE } from '@/constants/data';
import getTopHeadLines from '@/actions/NewsApi/getTopHeadLines';

interface INews {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
}

const NewsContainer = ({ query, filters }: any) => {
    const [news, setNews] = useState<Array<INews>>([]);

    useEffect(() => {
        const fetchNews = async (input: any) => {
            let res = {};
            if (query && query !== '' && Object.keys(filters).length > 0) {
                res = await getNews(input);
            } else {
                console.log('headline')
                res = await getTopHeadLines({});
            }
            if (res.ok) {
                console.log('articles', res)
                setNews(res.articles)
            } else {
                console.log('res', res)
                setNews([]);
            }
        };
        fetchNews({ q: query, ...filters });

    }, [query, filters]);
    return <>
        {news.map((data, index) => <div className='mt-4 mb-32' key={data.title}>
            <Image className='w-full h-auto object-cover overflow-hidden aspect-video mb-6' unoptimized={true} width={800} height={600} alt={`${data.title} thumbnail`} src={data.urlToImage || ImagePlaceholder} placeholder={ImagePlaceholder} />
            <div className='font-black text-2xl mb-2'>{data.title}</div>
            <div className='font-bold mb-2'>{data.author || 'Unknow Author'}</div>
            <div className=''>{new Date(data.publishedAt).toLocaleString()}</div>
            <div className='text-black/60'>{data.description}</div>
        </div>
        )}
    </>
}

export default NewsContainer;