import React, {useState, useContext} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';


const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>Crea una cuenta</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confirma el Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign Up"
                onPress={() => register(email, password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                Al registrarte, confirmas que aceptas nuestros{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Términos de Servicio
                </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> y </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Política de Privacidad
                </Text>
            </View>


            {Platform.OS === 'android' ? (
                <View>
                <SocialButton
                    buttonTitle="Iniciar Sesión con Facebook"
                    btnType="facebook"
                    color="#4867aa"
                    backgroundColor="#e6eaf4"
                    onPress={() => alert('login')}
                />

                <SocialButton
                    buttonTitle="Iniciar Sesión con Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                    onPress={() => alert('login')}
                />
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>
                ¿Ya tinenes una cuenta? Inicia Sesión
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });