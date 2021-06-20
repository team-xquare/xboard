import React from 'react';
import { useRecoilState } from 'recoil';
import { projectIdState } from 'src/libs/atom/ProjectState/ProjectState';
import ProjectCard from './ProjectCard/ProjectCard';
import * as S from './styles';

const ProjectBody = () => {

    const repoData = useRecoilState(projectIdState);

    console.log(repoData[0])

    return (
        <>
            <S.ProjectBodyWarpper>
                {
                    repoData[0].map((data) => {
                        return(
                            <ProjectCard key={data.id} project_id={data.id} title={data.name} body={data.body} update_at={data.update_at}/>
                        )
                    })
                }
            </S.ProjectBodyWarpper>
        </>
    )
}

export default ProjectBody;