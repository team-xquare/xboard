import styled from '@emotion/styled'
export const LabaelBadgeWrapper = styled.span<{color : string}>`
    background-color: #${(props)=>props.color};
    color: white;
    padding: 1px 10px;
    font-size: 13px;
    margin-right : 5px;
    border-radius: 20px;
`