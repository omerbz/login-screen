import React, {useState} from "react";
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const {height} = useWindowDimensions();

    const onSignUpPressed = () => {
        console.warn("Hesap oluşturuldu");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Şifre yenilendi");
    }

    const onSignInFacebook = () => {
        console.warn("Facebook ile kaydolundu");
    };

    const onSignInGoogle = () => {
        console.warn("Google ile kaydolundu");
    };

    const onSignInApple = () => {
        console.warn("Apple ile kaydolundu");
    };

    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Hesap oluştur</Text>

            <CustomInput 
            placeholder="Kullanıcı adı"
            value={username}
            setValue={setUsername}/>

            <CustomInput 
            placeholder="E-posta"
            value={email}
            setValue={setEmail}/>
            
            <CustomInput
            placeholder="Şifre"
            value={password}
            setValue={setPassword}
            secureTextEntry/>

            <CustomInput
            placeholder="Şifreyi tekrar girin"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry/>

            <CustomButton
            text="Hesap oluştur"
            onPress={onSignUpPressed}/>
            
            <CustomButton
            text="Facebook ile kaydol"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor={"#4765A9"}/>

            <CustomButton
            text="Google ile kaydol"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor={"#DD4D44"}/>

            <CustomButton
            text="Apple ile kaydol"
            onPress={onSignInApple}
            bgColor="#E3E3E3"
            fgColor="#363636"/>

            <CustomButton
            text="Hesabın var mı? Giriş yap"
            onPress={onSignInApple}
            bgColor="#F9FBFC"
            fgColor="#363636"/>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051C60",
        margin: 10,
    },
    signIn: {
        margin: 30
    }
});

export default SignUpScreen;