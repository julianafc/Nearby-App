import { Text, Pressable, PressableProps } from "react-native"

import {s} from "./styles"

type Props = PressableProps & {
    iconId: string
    isSelected?: boolean
    name: string
}

export function Category({name, iconId, isSelected = false, ...rest}: Props){

    return(
        <Pressable style={[s.container]}>
           <Text style={[s.name]}>{name}</Text> 
        </Pressable>
    )

}