import { FC, useEffect } from "react";
import * as S from './styles'
import { RiMoreFill } from 'react-icons/ri'
import StateBadge from "./StateBadge/StateBadge";
import LabaelBadge from "./LabelBadge/LabelBadge";
type IssueState = "open" | "close"
interface label{
    color: string
    default: boolean
    description: string
    id: number
    name: string
    node_id: string
    url: string
}
interface assignee{
    avatar_url: string
    events_url: string
    followers_url: string
    following_url: string
    gists_url: string
    gravatar_id: string
    html_url: string
    id: number
    login: string
    node_id: string
    organizations_url: string
    received_events_url: string
    repos_url: string
    site_admin: boolean
    starred_url: string
    subscriptions_url: string
    type: string
    url: string
}
interface BoardCardProps{
    index: number
    card_id : string
    title : string
    body? : string
    labels? : Array<label>
    state? : IssueState
    assignees? : Array<assignee>
    creator : string
    id?: string
    onHandlerDrap: (e: any) => void
    onHandlerDrop: (e: any) => void
}
const BoardCard : FC<BoardCardProps> = ({onHandlerDrap, onHandlerDrop, index, card_id, title, body, labels, state, assignees, creator, id}) => {
    function openProfile(){
        window.open(`https://github.com/${creator}`)
    }

    const onDrapOver = () => {
        console.log("adwdes")
    }

    const onDrop = (e) => {
        e.preventDefault();
        console.log(index)
        onHandlerDrop(index)
    }

    return(
        <S.Wrapper draggable="true" onDragOver={onDrapOver} onDragEnd={onDrop}>
            <S.HeaderWrapper>
                { state && <StateBadge state={state}></StateBadge>}
                <h3>{title}</h3>
            </S.HeaderWrapper>
            <p>Create by <span onClick={openProfile}>{creator}</span></p>
            <S.DetailButton><RiMoreFill /></S.DetailButton>
            <S.LabelsWrapper>
                {
                    labels && labels.map((i,index)=>(<LabaelBadge key={index} {...i}/>))
                }
            </S.LabelsWrapper>
        </S.Wrapper>
    )
}
export default BoardCard;