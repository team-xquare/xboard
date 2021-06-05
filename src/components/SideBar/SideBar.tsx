import { useEffect, useState } from 'react';
import * as S from './styles';
import organization from '../../libs/api/organization';
import { useRecoilState, useSetRecoilState } from 'recoil'
import { projectIdState } from 'src/libs/atom/ProjectState/ProjectState';
import { repoIdState} from '../../libs/atom/RepoState/RepoState'

const SideBar = () => {
    const [ data, setData ] = useState<any>([]);
    const setProjectId = useSetRecoilState<any>(projectIdState);
    const SetRepoIdState = useSetRecoilState<any>(repoIdState)
    

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
            setProjectId(res.data[0].id)
        })
    } 

    const repoProject = (owner, repo_name) => {
        organization.getReposProject(owner, repo_name)
        .then((res) => {
            if(res.data.length !== 0){
                console.log(res.data)
                SetRepoIdState(res.data)
            }
        })
        // 레포지토리 아이디만 recoil로 넘기도록 바꿔야함
    }

    return (
        <>
            <S.SideBarWrapper>
                <S.SideBarTitle> <div onClick={orgProject}>team-xquare</div></S.SideBarTitle>
                <S.RepositoryList>
                    {
                        data.map((data) => {
                            return (
                                <S.Repository>
                                    {
                                        <div onClick={()=>repoProject(data.owner.login, data.name)} key={data.id} >{data.name}</div>
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