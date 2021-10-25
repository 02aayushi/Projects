import React from 'react';
import {View, Keyboard} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';

import {fields, loginInitialValues} from './fields';

const Login = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
          navigation.navigate('Home');
        }}
        btnProps={{
          title: 'Login',
        }}
      />
    </View>
  );
};

export default Login;
