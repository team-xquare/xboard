import { FC, useEffect, useState } from "react";
import projects from "src/libs/api/projects";
import repos from "src/libs/api/repos";
import BoardCard from "./BoardCard/BoardCard";
import * as S from './styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useRecoilState, useRecoilValue } from "recoil";
import { cardData } from "src/libs/atom/CardDataState/CardDataState";

interface BoardProps{
    title : string,
    columns_id : number,
    index: number
}
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
interface test{
    id: string
    title : string
    body? : string
    labels? : Array<label>
    state? : IssueState
    assignees? : Array<assignee>
    creator : string
}

const Board : FC<BoardProps> = ({title, columns_id, index}) => {
    const [cards, setCards] = useState<test[]>([]);
    const [state, setState] = useState<boolean>(false);
    const [note, setNote] = useState<string>("");

    const [totCards, setTotCards] = useRecoilState<any>(cardData);
    
    async function getCards(res){
        const temp_array = [];
        for(const i of res){
            if(!i.note){
                const { data } = await repos.getIssues(i.content_url);
                const temp : test = {
                    id: i.id,
                    title : data.title,
                    body : data.body,
                    state : data.state,
                    assignees : data.assignees,
                    labels : data.labels,
                    creator : data.user.login
                }
                temp_array.push(temp)
            }else{
                temp_array.push({ title : i.note, creator : i.creator.login, id: i.id})
            }
        }
        setCards(temp_array)
    }
    function openModal(){
        setState(!state);
    }
    useEffect(()=>{
        const data = {columns_id: columns_id}
        setTotCards([...totCards , [columns_id, ...cards]])
    },[cards])

    async function createNote(){
        try {
            await projects.createCard(columns_id, note)
            projects.getCards(columns_id).then(async (res)=>{
                getCards(res)
            })
        }catch(e){
            alert(e)
        }
    }

    useEffect(()=>{
        projects.getCards(columns_id).then(async (res)=>{
            getCards(res.data)
        })
    },[])

    return(
        <Draggable draggableId={title} index={index} key={title}>
            {(provided, snapshot) => (
                <S.Wrapper ref={provided.innerRef} {...provided.draggableProps}>
                    <S.HeaderWrapper {...provided.dragHandleProps}>
                        <S.HeaderTitleWrapper>
                            <S.ColumnCount>{cards.length}</S.ColumnCount>
                            <h3>{title}</h3>
                        </S.HeaderTitleWrapper>
                        <S.HeaderUtilWrapper>
                            <button onClick={openModal}>
                                <AiOutlinePlus ></AiOutlinePlus>
                            </button>
                        </S.HeaderUtilWrapper>
                    </S.HeaderWrapper>
                    
                    <S.BoardCardWrapper>
                        {state && 
                            <div>
                                <textarea onChange={(e)=>setNote(e.target.value)} value={note}></textarea>
                                <div>
                                    <div onClick={createNote}>Add</div>
                                    <div>Cancel</div>
                                </div>
                            </div>
                        }
                        <Droppable droppableId={String(columns_id)} key={columns_id} type="Cards">
                        {(dropProvided, dropSnapshot) => (
                            <div style={{height: "650px"}} {...dropProvided.droppableProps} ref={dropProvided.innerRef} >
                                
                                {
                                    cards.map((i, indexTwo) => {
                                        return (
                                            <Draggable key={i.id} draggableId={String(i.id)} index={indexTwo}>
                                                {(provided) => {
                                                    return (
                                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                            <BoardCard key={indexTwo} index={indexTwo} {...i} />
                                                        </div>
                                                    )
                                                }}
                                            </Draggable>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </S.BoardCardWrapper>
                </S.Wrapper>
            )}
        </Draggable>
    )
}
export default Board;