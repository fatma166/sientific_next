import { Card as AntCard } from "antd"
import {CardProps as AntCardProps} from "antd/es/card"
import { FC } from "react"

interface CardProps extends AntCardProps{

}

const Card: FC<CardProps> = ({children, ...props}) => {
    return <AntCard {...props}>{children}</AntCard>
}

export default Card