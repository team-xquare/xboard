import React from 'react';
import * as S from './styles';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';

const ProjectHeader = () => {

    return (
        <>
            <S.HeaderWrapper>
                <S.Contents>
                    <S.ConType>
                        <AiOutlineSchedule size="20"/>
                        <span>Open</span>
                    </S.ConType>
                    <S.ConType>
                        <BsCheck size="20"/>
                        <span>Close</span>
                    </S.ConType>
                </S.Contents>
            </S.HeaderWrapper>
        </>
    )
}

export default ProjectHeader;