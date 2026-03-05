import BoardCard from "@/app/Boards/board-card"
import { getBoards } from "@/services/boardService"
import { useState,useEffect } from "react"

export default function BoardsPage(){
    const [boards,setBoards] = useState([])
    
    useEffect(()=>{
        const fetchBoards = async()=>{
            const data = await getBoards()
            setBoards(data)
        }

        fetchBoards()

    },[])
    
    return(
        <div className="grid grid-cols-4 gap-4 ">
            {boards.map((board:any)=>(
                <BoardCard key={board._id} board={board}/>
            ))}
        </div>
    )
}