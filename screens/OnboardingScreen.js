import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#c7ceea',
                    image: <Image source={require('../assets/onboarding-img1.png')}   />,
                    title: 'Te permite identificar lo esencial',
                    subtitle: 'Con el modelo Canvas tienes una visión general de cuál es realmente tu modelo de negocio. También muestra qué actividades no son tan relevantes o incluso cuáles se interponen en el camino hacia tus objetivos. Así, lleva tu visión hacia lo esencial y de esta manera puedes optimizar tu modelo de negocio.',
                },
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/welcome.png')} style={styles.image}/>,
                    title: 'Te da la base para la lluvia de ideas',
                    subtitle: 'El modelo Canvas es el punto de partida perfecto para dejar que tus ideas y las de tu equipo fluyan libremente. También puedes probar modelos alternativos para complementar tu idea de negocio y encontrar nuevas posibilidades de comercialización.',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Te brinda una presentación estructurada',
                    subtitle: 'El modelo Canvas presenta en términos generales y visuales tu negocio, de una forma más clara y estructurada. Así, otros podrán entender y discutir rápidamente tu modelo de negocio.  De esta manera, todas las áreas de tu negocio reciben rápidamente la información que es importante para ellos y para la empresa. ',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Sienta la base de tus planes de negocios',
                    subtitle: 'El modelo Canvas no sustituye un plan de negocios detallado, pero con él obtienes una estructura que funcionará como el esqueleto de tu plan de negocios.',
                },
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image :{
        width: 250,
        height: 250,
    }
})
