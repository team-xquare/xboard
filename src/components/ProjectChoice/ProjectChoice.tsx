import React, { useEffect, useState } from 'react';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectBody from './ProjectBody/ProjectBody'
import * as S from './styles'
import { useRecoilState } from 'recoil';
import { repoIdState } from 'src/libs/atom/RepoState/RepoState';
import organization from 'src/libs/api/organization';

const ProjectChoice = () => {
    const [ data, setData ] = useState<any>([]);
    const repoId = useRecoilState<any>(repoIdState);

    useEffect(() => {
        
        organization.getReposProject(repoId[0])
        .then((res) => {
            if(res.data.length !== 0){
                console.log(res.data)
                setData(res.data)
            }
        })

    },[repoId[0]])

    return (
        <>
            <S.Wrapper>
                <ProjectHeader />
                <ProjectBody />
            </S.Wrapper>
            
        </>
    )
}

export default ProjectChoice;