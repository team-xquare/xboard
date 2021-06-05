import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import * as S from './styles';

const ProjectBody = () => {

    return (
        <>
            <S.ProjectBodyWarpper>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </S.ProjectBodyWarpper>
        </>
    )
}

export default ProjectBody;