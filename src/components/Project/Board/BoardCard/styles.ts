import styled from '@emotion/styled'
import { globalColor } from 'src/styles/globalColor'
export const Wrapper = styled.div`
    width: 100%;
    padding: 7px 10px;
    margin: 10px 0;
    position: relative;
    border-radius: 7px;
    border: 1px solid #e1e4e8;
    cursor: move;
    background: white;
    &:hover{
        border-color: #d1d5da!important;
        box-shadow: 0 1px 3px rgba(106,115,125,.3)!important;
    }
    & p{
        font-size: 12px;
        color: #6a737d;
        margin-top: 5px;
        & span{
            &:hover{
                text-decoration: underline;
            }
            cursor: pointer;
            color: #24292e;
        }
    }
`
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    & h3{
        width: 270px;
        font-size: 14px;
    }
`
export const DetailButton = styled.div`
    position: absolute;
    top: 0px;
    right: 0;
    padding: 6px 10px;
    cursor: pointer;
    &:hover{
        color : ${globalColor.purple}
    }
`
export const LabelsWrapper = styled.div`
    width: 100%;
    margin-top: 5px;
`