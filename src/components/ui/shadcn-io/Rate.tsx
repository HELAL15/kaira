'use client';

import React from 'react';

import { Rating, RatingButton } from './rating';

interface IProps {
    val?: number;
    size?: number;
    readonly?: boolean;
}

const Rate = ({ val = 0, size = 20, readonly = false, ...rest }: IProps) => {
    return (
        <>
            <Rating defaultValue={val} readOnly={readonly} {...rest}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton key={index} size={size} />
                ))}
            </Rating>
        </>
    );
};

export default Rate;
