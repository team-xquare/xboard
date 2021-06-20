import { useEffect, useState } from 'react';
import * as S from './styles';
import organization from '../../libs/api/organization';
import { useRecoilState, useSetRecoilState } from 'recoil'
import { projectIdState } from 'src/libs/atom/ProjectState/ProjectState';
import { repoIdState} from '../../libs/atom/RepoState/RepoState'
import { useHistory } from 'react-router-dom';

const SideBar = () => {
    const [ data, setData ] = useState<any>([]);
    const setProjectId = useSetRecoilState<any>(projectIdState);
    const setRepoId = useSetRecoilState<any>(repoIdState);
    
    const history = useHistory()

    useEffect(() => {
        organization.getOrgRepos()
        .then((res) => {
            setData(res.data);
            console.log(res.data)
        })
    },[])

    const orgProject = () => {
        organization.getOrgProject()
        .then((res) => {
            setProjectId(res.data)
        })
        history.push(`/xquare-team`);
    } 

    const repoProject = (repo_name: string, repo_id: string) => {
        organization.getReposProject(repo_name)
        .then((res) => {
            if(res.data.length !== 0){
                setProjectId(res.data)
            }
        })
        history.push(`/${repo_id}`);
        setRepoId(repo_id)
        //window.location.hash="/project1";
        // 레포지토리 아이디만 recoil로 넘기도록 바꿔야함
    }

    return (
        <>
            <S.SideBarWrapper>
                <S.SideBarTitle> <div onClick={orgProject}>team-xquare</div></S.SideBarTitle>
                <S.RepositoryList>
                    {
                        data.map((data,i) => {
                            return (
                                <S.Repository>
                                    {
                                        <div onClick={()=>repoProject(data.name, data.id)} key={i} >{data.name}</div>
                                    }
                                    
                                </S.Repository>
                            )
                        })
                    }
                </S.RepositoryList>
            </S.SideBarWrapper>
        </>
    )
}

export default SideBar;