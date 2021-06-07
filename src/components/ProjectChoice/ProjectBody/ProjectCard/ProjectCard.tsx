import React from 'react';
import * as S from './styles'
import { AiOutlineClockCircle } from 'react-icons/ai'

const ProjectCard = ({title, body, updated_at}) => {

    return (
        <>
            <S.CardWarpper>
                <S.CardLeft>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.CardDay>
                        <a><AiOutlineClockCircle size="20"/></a>
                        {updated_at}
                    </S.CardDay>
                </S.CardLeft>

                <S.CardRigth>
                    <S.CardDescription>
                        {body}
                    </S.CardDescription>
                </S.CardRigth>
                
            </S.CardWarpper>
        </>
    )
}

export default ProjectCard;