import { useState } from "react";
import card from 'src/libs/api/projects'
import { FC } from "react";

interface Props{
    card_id: string
    move_id: string
}

interface Return {
    onDrop: () => void
    onDrag: () => void
}

export function useCardMove<T>(): Return{
    const [ cardId, setCardId ] = useState<string>("");
    const [ moveCardId, setMoveCardId ] = useState<string>("");

    const onDrop = () => {
        card.postCardMoves(cardId, moveCardId)
        .then((res) => {

        }) 
    }

    const onDrag = () => {

    }

    return { onDrag, onDrop }
    
}