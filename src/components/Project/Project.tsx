import { FC, useEffect, useState } from 'react';
import organization from 'src/libs/api/organization';
import projects from 'src/libs/api/projects';
import Board from './Board/Board';
import * as S from './styles'


const Project : FC = () => {
    const [columns, setColumns] = useState([])
    const [organizations, setOrganizations] = useState(null)
    useEffect(()=>{
        organization.getReposProject().then((res)=>{
            setOrganizations(res.data[0])
            projects.getColumns(res.data[0].id).then((res)=>{
                setColumns(res.data)
            })
        })
        
    },[])
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