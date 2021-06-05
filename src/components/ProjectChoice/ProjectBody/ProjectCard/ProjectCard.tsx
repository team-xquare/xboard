import React from 'react';
import * as S from './styles'
import { AiOutlineClockCircle } from 'react-icons/ai'

const ProjectCard = () => {

    return (
        <>
            <S.CardWarpper>
                <S.CardLeft>
                    <S.CardTitle>Test</S.CardTitle>
                    <S.CardDay>
                        <a><AiOutlineClockCircle size="20"/></a>
                        Updated 7 hours ago
                    </S.CardDay>
                </S.CardLeft>

                <S.CardRigth>
                    <S.CardDescription>
                        울려댔어 사이렌 텅빈 길거리엔 도망치다 흘린 칼자루와 피가 흥건해 우리 그때 어릴땐 뭐 몰랐지만 그냥 힘쎈 형이 젤로 멋잇는 형이었지 그땐
                    </S.CardDescription>
                </S.CardRigth>
                
            </S.CardWarpper>
        </>
    )
}

export default ProjectCard;