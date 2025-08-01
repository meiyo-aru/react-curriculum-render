import { useEffect, useState } from "react";
import style from "./SeeMore.module.scss"
import type {RootState} from "../../store"
import { useSelector } from "react-redux";
import clsx from "clsx";

interface SeeMoreProps {
    isActive?: boolean
    onClick?: React.MouseEventHandler<HTMLElement>
    componentId?: string
    seeMoreId?: number
    classes?: string
}
const SeeMore: React.FC<SeeMoreProps> = ({
    isActive,
    onClick,
    componentId,
    seeMoreId,
    classes
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const SeeMoreState = useSelector((state: RootState) => state.SeeMore)

    useEffect(()=>{
        if(SeeMoreState.componentId === componentId && SeeMoreState.seeMoreId === seeMoreId){
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [SeeMoreState, componentId, seeMoreId])
    
    return (
        <div className={`${style.seeMore} `} onClick={(event) => {
                if(onClick){
                    onClick(event);
                }
            }}>
            <span className={`${isActive && style.active} ${clsx(classes && classes)} ${ clicked && style.clicked}`}>
                {clicked ? "Ver menos" : "Ver mais"}
            </span>
        </div>
    )
}
export default SeeMore;