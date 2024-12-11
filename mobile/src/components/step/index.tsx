import { View, Text} from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import {s} from "./styles"
import { colors } from "@/styles/colors"

type Props= {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>,
}

export function Step ({title, description, icon : Icon}: Props) { // usar o props(propriedades) permite reutilizar a estrutura //
    return (
        <View style={s.container}>

            {Icon && <Icon size={32} color={colors.red.base} />}
            <View style={s.details}> 

                <Text style={s.title}>{title}</Text>
                <Text style={s.description}>{description}</Text>

            </View>

        </View>

    )
}