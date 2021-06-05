import styled from "@emotion/styled";
import { globalColor } from "src/styles/globalColor";

export const CardWarpper = styled.div`
    min-height: 50px;
    padding: 15px;
    border: 1px solid black;//${globalColor.gray};
    border-top: none;
    display: flex;
`

export const CardLeft = styled.div`
    display: block;
    width: 45%;
`

export const CardTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        color: ${globalColor.purple}
    }
`

export const CardDay = styled.div`
    margin-top: 5px;
    display: flex;
    font-size: 15px;
    color: lightgray;
    align-items: center;
    svg{
        vertical-align: middle;
        margin-right: 3px;
    }
`

export const CardRigth = styled.div`
    width: 50%;
`

export const CardDescription = styled.div`
    font-size: 16px;
    white-space:normal;
    word-break:break-all;
`