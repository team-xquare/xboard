import styled from '@emotion/styled'
import { globalColor } from '../../styles/globalColor'
export const Wrapper = styled.div`
    width: 100%;
    padding: 0 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const BoardTitle = styled.h3`
    color : ${globalColor.purple};
    font-size: 14px;
`
export const BoardWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    height: 100%;
    overflow: scroll;
    align-items: center;
`