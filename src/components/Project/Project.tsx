import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import projects from 'src/libs/api/projects';
import {RouteComponentProps} from 'react-router-dom'
import Board from './Board/Board';
import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cardData } from 'src/libs/atom/CardDataState/CardDataState';

interface Props {
    project_id: any,
    repo_id: any
}

const Project: FC<RouteComponentProps<Props>> = ({match}) => {
    const [columns, setColumns] = useState([])
    const [organizations, setOrganizations] = useState(null)
    const [cards, setCards] = useRecoilState<any[]>(cardData);
    const asd = useRecoilValue(cardData)

    useEffect(()=>{
        projects.getColumns(Number(match.params.project_id)).then((res)=>{
            setColumns(res.data)
            console.log(res.data)
        })
    },[]);

    const onDragEnd = (result) => {

        if (!result.destination) return;
        let location;
        const moveCard = result.source.index;
        const inFrontCard = result.destination.index;
        
        if(inFrontCard === 0){
            location = `first`
        } else {
            location = `after:`
        }
        //console.log(location, cardData)
        console.log(asd)
      };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <S.Wrapper>
                <S.BoardTitle>{organizations?.name}</S.BoardTitle>
                    <S.BoardWrapper>
                        {
                            columns.map((i,index)=> (
                                <Droppable droppableId={i.name} key={i.id}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                <Board key={index} title={i.name} columns_id={i.id} />
                                            </div>
                                        )
                                        
                                    }}
                                </Droppable>
                                    
                            ))
                        }
                    </S.BoardWrapper>
            </S.Wrapper>
        </DragDropContext>
    )
}
export default Project;