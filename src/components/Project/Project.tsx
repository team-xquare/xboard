import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import organization from 'src/libs/api/organization';
import projects from 'src/libs/api/projects';
import {RouteComponentProps} from 'react-router-dom'
import Board from './Board/Board';
import * as S from './styles'

interface Props {
    project_id: any,
    repo_id: any
}

const Project: FC<RouteComponentProps<Props>> = ({match}) => {
    const [columns, setColumns] = useState([])
    const [organizations, setOrganizations] = useState(null)

    useEffect(()=>{
        projects.getColumns(Number(match.params.project_id)).then((res)=>{
            setColumns(res.data)
            console.log(res.data)
        })
    },[]);

    return(
        <S.Wrapper>
            <S.BoardTitle>{organizations?.name}</S.BoardTitle>
            <S.BoardWrapper>
                {
                    columns.map((i,index)=><Board key={index} title={i.name} columns_id={i.id}></Board>)
                }
            </S.BoardWrapper>
        </S.Wrapper>
    )
}
export default Project;