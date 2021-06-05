import styled from '@emotion/styled'
export const StateBadgeWrapper = styled.div<{state : string}>`
    margin-right: 5px;
    line-height: 5px;
    color: ${(props) => props.state==="open" ?  "green" : "tomato"};
`