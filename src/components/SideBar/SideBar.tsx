import { useEffect, useState } from 'react';
import * as S from './styles';
import github from '../../libs/api/organization';

const SideBar = () => {
    const [ data, setData ] = useState<any>([]);

    useEffect(() => {
        github.getOraRepos()
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })

    },[])

    return (
        <>
            <S.SideBarWrapper>
                asdwasd
            </S.SideBarWrapper>
        </>
    )
}

export default SideBar;