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
    const [totcards, setTotCards] = useRecoilState<any[]>(cardData);

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
            if(infrontDnd !== afterDnd){
                location = DndData(result.type,infrontDnd, afterDnd, columns)
                console.log(location)
                // projects.postColumnMoves(columns[infrontDnd].id, location)
                // .then((res) => {
                //     console.log(res)
                // })
            }
        } else if(result.type === "Cards") {
            const cardsData = totcards.slice(1);
            const afterCardMoveData = cardsData.filter((i) => (i[0] === parseInt(result.destination.droppableId)))
            const sliceData = afterCardMoveData[0].slice(1)
            console.log(sliceData)
            console.log(DndData(result.type, infrontDnd, afterDnd, sliceData))
        }


        console.log(result.type, result)
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