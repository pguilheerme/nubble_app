import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    //TODO
  }

  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput
        placeholder="@"
        label="Seu username"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{marginBottom: 's20'}}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginBottom: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
