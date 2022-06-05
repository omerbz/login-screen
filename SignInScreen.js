import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/internifLogo.jpg"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Giriş yapıldı");
    }

    const onSignInFacebook = () => {
        console.warn("Facebook ile giriş yapıldı");
    };

    const onSignInGoogle = () => {
        console.warn("Google ile giriş yapıldı");
    };

    const onSignInApple = () => {
        console.warn("Apple ile giriş yapıldı");
    };

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image
            source={Logo}
            style={[styles.logo,{height: height * 0.3}]}
            resizeMode="contain"/>

            <CustomInput 
            placeholder="E-posta"
            value={email}
            setValue={setEmail}/>
            
            <CustomInput
            placeholder="Şifre"
            value={password}
            setValue={setPassword}
            secureTextEntry/>

            <CustomButton
            text="Giriş yap"
            onPress={onSignInPressed}/>
            
            <CustomButton
            text="Facebook ile giriş yap"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor={"#4765A9"}/>

            <CustomButton
            text="Google ile giriş yap"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor={"#DD4D44"}/>

            <CustomButton
            text="Apple ile giriş yap"
            onPress={onSignInApple}
            bgColor="#E3E3E3"
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
    logo: {
        width: "40%",
        maxWidth: 250,
        maxHeight: 150,
    },
});

export default SignInScreen;