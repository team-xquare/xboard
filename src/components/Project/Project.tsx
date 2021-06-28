import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import projects from 'src/libs/api/projects';
import {RouteComponentProps} from 'react-router-dom'
import Board from './Board/Board';
import * as S from './styles'

interface Props {
    project_id: any,
    repo_id: any
}

const Project: FC<RouteComponentProps<Props>> = ({match}) => {
    const [columns, setColumns] = useState([])
    const [organizations, setOrganizations] = useState(null)

    useEffect(()=>{
        projects.getColumns(Number(match.params.project_id)).then((res)=>{
            setColumns(res.data)
            console.log(res.data)
        })
    },[]);

    const handleChange = (result) => {
        console.log("adws")
        if (!result.destination) return;
        console.log(result);
        const items = [...columns];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setColumns(items);

        console.log(columns[result.destination.index-1])
    };

    return(
        <S.Wrapper>
            <S.BoardTitle>{organizations?.name}</S.BoardTitle>
            
                <DragDropContext >
                    <Droppable droppableId="columns" onDragEnd={handleChange}>
                        {(provided) => (
                            <li className="columns" {...provided.droppableProps} ref={provided.innerRef}>
                                <S.BoardWrapper>
                                {
                                    columns.map((i,index)=>(
                                        <Draggable draggableId={String(i.id)} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >                                                
                                                    <Board key={index} title={i.name} columns_id={i.id}></Board>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                </S.BoardWrapper>
                                {provided.placeholder}
                            </li>
                        )}
                    </Droppable>
                </DragDropContext>
        </S.Wrapper>
    )
}
export default Project;