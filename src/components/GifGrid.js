//import React,{useState, useEffect} from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrigItem } from './GifGrigItem'

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='card animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGrigItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
