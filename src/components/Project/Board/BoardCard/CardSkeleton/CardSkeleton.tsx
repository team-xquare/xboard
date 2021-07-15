import React from 'react';
import * as S from '../styles';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {

    return (
        <>
            <S.Wrapper>
                <S.HeaderWrapper>
                    <Skeleton width="20px" height="20px"/>
                </S.HeaderWrapper>
                <p>Create by <span onClick={openProfile}>{creator}</span></p>
                <S.DetailButton></S.DetailButton>
                <S.LabelsWrapper>
                    
                </S.LabelsWrapper>
            </S.Wrapper>
        </>
    )
}

export default CardSkeleton;