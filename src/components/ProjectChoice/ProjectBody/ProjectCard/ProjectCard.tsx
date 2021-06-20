import React from 'react';
import * as S from './styles'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { repoIdState } from 'src/libs/atom/RepoState/RepoState';

interface Props {
    project_id: string,
    title: string,
    body: string,
    update_at: string,
}

const ProjectCard: FC<Props> = ({project_id, title, body, update_at}) => {

    const repoid = useRecoilState(repoIdState);

    const history = useHistory();

    const onRepo = () => {
        history.push(`/${repoid[0]}/${project_id}`)
    }

    return (
        <>
            <S.CardWarpper>
                <S.CardLeft>
                    <S.CardTitle><div onClick={onRepo}>{title}</div></S.CardTitle>
                    <S.CardDay>
                        <AiOutlineClockCircle size="20"/>
                        {update_at}
                    </S.CardDay>
                </S.CardLeft>

                <S.CardRigth>
                    <S.CardDescription>
                        {
                            body ? body : "No description"
                        }
                    </S.CardDescription>
                </S.CardRigth>
                
            </S.CardWarpper>
        </>
    )
}

export default ProjectCard;