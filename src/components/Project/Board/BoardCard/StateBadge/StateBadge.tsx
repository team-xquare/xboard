import { FC } from 'react';
import * as S from './styles'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

type IssueState = "open" | "close"
interface StateBadgeProps {
    state : IssueState
}
const StateBadge : FC<StateBadgeProps> = ({state}) => {
    return(
        <S.StateBadgeWrapper state={state}>{state==="open" ? <AiFillCheckCircle /> : <AiFillCloseCircle />}</S.StateBadgeWrapper>
    )
}
export default StateBadge;