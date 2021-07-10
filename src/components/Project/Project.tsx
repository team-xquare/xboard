import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import projects from 'src/libs/api/projects';
import { RouteComponentProps } from 'react-router-dom'
import Board from './Board/Board';
import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cardData } from 'src/libs/atom/CardDataState/CardDataState';
import { DndData } from 'src/libs/function/DndData/DndData';

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
        const infrontDnd = result.source.index;
        const afterDnd = result.destination.index;

        if(result.type === "Columns") {
            location = DndData(infrontDnd, afterDnd, columns)
            projects.postColumnMoves(columns[infrontDnd].id, location)
            .then((res) => {
                console.log(res)
            })
        } else if(result.type === "Cards") {
            console.log('cards', result)
        }
        
        console.log(location, result)
      };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="ColumnList" type="Columns" direction="horizontal">
            {(provided, snapshot) => (
            <S.Wrapper {...provided.droppableProps} ref={provided.innerRef}>
                <S.BoardTitle>{organizations?.name}</S.BoardTitle>
                <S.BoardWrapper>
                    {
                        columns.map((i,index)=> (
                            <Board key={index} title={i.name} columns_id={i.id} index={index}/>
                        )) 
                    }
                </S.BoardWrapper>
                {provided.placeholder}
            </S.Wrapper>
            )}
            </Droppable>
        </DragDropContext>
    )
}
export default Project;