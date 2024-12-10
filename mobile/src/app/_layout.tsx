import {Stack} from "expo-router"
import { colors } from "@/styles/colors"

import{
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading"

export default function Layout(){
    const [fontsLoadead] = useFonts({  //constante criada para fazer a verificação se as fontes foram carregadas//
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if(!fontsLoadead){   //esse if garante que a tela só apareça depois de carregar as fontes//
        return <Loading />
    }

    return (
        <Stack 
        screenOptions={{
        headerShown:false,
        contentStyle: {backgroundColor: colors.gray[100]},
        }}>

        </Stack>
    )
}