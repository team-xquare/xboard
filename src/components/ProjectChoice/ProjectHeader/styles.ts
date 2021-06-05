import styled from '@emotion/styled';
import { globalColor } from 'src/styles/globalColor';

export const HeaderWrapper = styled.div`
    width: 100%;
    border: 1px solid ${globalColor.gray};
`

export const Contents = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
`

export const ConType = styled.div`
    margin-right: 20px;
    cursor: pointer;
    align-items: flex-start;
    span{
        margin-left: 10px;
    }
    svg{
        vertical-align: middle;
        margin-bottom: 3px;
    }
    &:hover{
        color: ${globalColor.purple}
    }
`