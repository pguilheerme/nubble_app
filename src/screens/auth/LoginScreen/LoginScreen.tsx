import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text mb="s8" preset="headingLarge">
          Olá
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>
        <TextInput
          errorMessage="Mensagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's10'}}
        />
        <TextInput
          RightComponent={<Icon name="eyeOn" color="gray2" />}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's20'}}
        />
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>

        <Button mt="s48" title="Entrar" />
        <Button mt="s12" title="Criar uma conta" preset="outline" />
      </View>
    </SafeAreaView>
  );
}
