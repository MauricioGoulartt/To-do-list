import { useState, MouseEvent } from 'react'
import * as C from './styles'
import { Item } from '../../types/item'

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setisChecked] = useState(item.done);

    const onToggleFunc = (e: MouseEvent) => {
        if(isChecked === false) {
            setisChecked(true)
        }
    }

    return (
    <C.Container done={isChecked}>

        <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={e => setisChecked(e.target.checked)}
        onClick={onToggleFunc}
        />

        <label>{item.name} - {item.done.toString()}</label>

    </C.Container>
    )
}