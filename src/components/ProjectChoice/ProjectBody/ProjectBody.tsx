import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import organization from 'src/libs/api/organization';
import { repoIdState } from 'src/libs/atom/RepoState/RepoState';
import ProjectCard from './ProjectCard/ProjectCard';
import * as S from './styles';

const ProjectBody = () => {
    const [ data, setData ] = useState<any>([])
    const repoId = useRecoilState<any>(repoIdState);

    useEffect(() => {
        organization.getReposProject(repoId[0])
        .then((res) => {
            if(res.data.length !== 0){
                console.log(res.data, "repo")
                setData(res.data)
            }
        })
    }, [repoId[0]])
    

    return (
        <>
            <S.ProjectBodyWarpper>
                {
                    data.map((data) => {
                        return(
                            <ProjectCard key={data.id} title={data.name} body={data.body} updated_at={data.updated_at}/>
                        )
                    })
                }
            </S.ProjectBodyWarpper>
        </>
    )
}

export default ProjectBody;