import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: {}, loading: false };
  }
  
  onButtonPressed = () => {
    this.props.initFirebase();
    const { email, password } = this.state;

    // fetch('https://www.youtube.com/watch?v=lJAYI8IiL2g');

    this.setState({ error: {}, loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(err => {
        console.log('SEWCONF')
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail)
      })
      .then(res => console.log('FINALLY'))
  }

  onLoginSuccess = () => {
    console.log('LOGIN SUCCESS!')
    this.setState({ email: '', password: '', error: {}, loading: false });
  }

  onLoginFail = error => {
    console.log('LOGIN FAILED!')
    this.setState({ error, loading: false });
  }

  renderButton = () => this.state.loading
    ? <Spinner />
    : <Button onPress={this.onButtonPressed}>Log in</Button>

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={email => { this.setState({ email }) }}
            placeholder="user@gmail.com"
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            onChangeText={password => { this.setState({ password }) }}
            placeholder="password"
            secureTextEntry
            value={this.state.password}
          />
        </CardSection>

        <CardSection>
          <Text>{this.state.error.message}</Text>
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
