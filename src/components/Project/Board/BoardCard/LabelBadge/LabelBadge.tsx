import { FC } from 'react';
import * as S from './styles'

interface label{
    color: string
    default?: boolean
    description?: string
    id?: number
    name: string
    node_id?: string
    url?: string
}
interface LabaelBadgeProps extends label {}
const LabaelBadge : FC<LabaelBadgeProps> = ({name, color}) => {
    return(
        <S.LabaelBadgeWrapper color={color}>{name}</S.LabaelBadgeWrapper>
    )
}
export default LabaelBadge;