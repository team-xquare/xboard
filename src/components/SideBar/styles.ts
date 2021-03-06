import styled from '@emotion/styled';
import {globalColor} from '../../styles/globalColor'

export const SideBarWrapper = styled.div`
    width: 230px;
    min-width: 230px;
    height: 100vh;
    overflow: auto;
    background-color: ${globalColor.gray};
`

export const Login = styled.div`
    width: 200px;
    height: 50px;
    padding: 12px;
    text-align: center;
    border-radius: 6px;
    background-color: black;
    color: white;
    margin: auto;
    margin-top: 10px;
`

export const SideBarTitle = styled.div`
    font-size: 23px;
    padding: 17px;
`

export const RepositoryList = styled.ul`
    
`

export const Repository = styled.li`
    font-size: 13px;
    margin: 15px;
    margin-bottom: 0;
    padding: 5px;
    padding-bottom: 0;
    word-spacing: 0px;
    cursor: pointer;
    &:hover{
        color: ${globalColor.purple}
    }
    div{

    width: 250;
    }
`