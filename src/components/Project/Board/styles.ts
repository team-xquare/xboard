import styled from '@emotion/styled'
import { globalColor } from 'src/styles/globalColor'
export const Wrapper = styled.div`
    min-width: 330px;
    height: 100%;
    border-radius: 10px;
    //background : #f5f8fa;
    margin-right: 16px;
    //border: 1px solid #e1e4e8;
`
export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5px;
    align-items: center;
    justify-content: space-between;
`
export const HeaderTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    & h3{
        color: #24292e;
        font-size: 14px;
        margin-left: 7px;
    }
`
export const HeaderUtilWrapper = styled.div`
    display: flex;
    align-items: center;
    & button{
        background: none;
        outline: none;
        border: none;
        &:hover{
            color : ${globalColor.purple}
        }
    }
    
    & svg{
        cursor: pointer;
        
    }
    
`
export const ColumnCount = styled.div`
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: white;
    text-align: center;
    background-color: ${globalColor.purple};
    border: 1px solid transparent;
    border-radius: 2em;
`

export const BoardCardWrapper = styled.div`
    width: 100%;
    padding: 0 5px;
`