import React, { useRef} from 'react';
import { Image } from 'react-native';
import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText, Text, Text2, Text3 } from './styles';
import logo from '~/assets/pc.png'
import Button from '~/components/Button';
import Background from '~/components/Background';

export default function SignIn({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(){

  }
  return (
    <Background>
      <Container>
        <Text2>Instituto de Criminalística</Text2>
        <Image source={logo} style={{ width: 150, height: 210 }} />
        <Form>
          <FormInput
            icon="persn-outline"
            autoCorrect={false}
            autoCapitalizer="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalizer="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={ passwordRef }
            returnKeyType="send"
            onSubmitEditing={ handleSubmit }
          />
          <SubmitButton onPress={() => { }}>Cadastrar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
        <Text>Desenvolvido por: Sttefani Ribeiro</Text>
        <Text3>Perito Criminal</Text3>
      </Container>
    </Background>
  );
}
