import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordRepeat: '',

      validity: {
        name: false,
        lastname: false,
        email: false,
        phoneNumber: false,
        password: false,
        passwordRepeat: false,
      },
    }

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLastname = this.onChangeLastname.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangePasswordRepeat = this.onChangePasswordRepeat.bind(this)

    this.getValidity = this.getValidity.bind(this)
  }

  onChangeName({ target: { value: name } }) {
    this.setState(oldState => ({
      name,
      validity: { ...oldState.validity, name: name.length > 2 },
    }))
  }

  onChangeLastname({ target: { value: lastname } }) {
    this.setState(oldState => ({
      lastname,
      validity: { ...oldState.validity, lastname: lastname.length > 2 },
    }))
  }

  onChangeEmail({ target: { value: email } }) {
    const validity = email.match(
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )

    this.setState(oldState => ({
      email,
      validity: { ...oldState.validity, email: !!validity },
    }))
  }

  onChangePhoneNumber({ target: { value: phoneNumber } }) {
    const validity = phoneNumber.match(/(\+56)?\d{9}/)

    this.setState(oldState => ({
      phoneNumber,
      validity: { ...oldState.validity, phoneNumber: !!validity },
    }))
  }

  onChangePassword({ target: { value: password } }) {
    this.setState(oldState => ({
      password,
      validity: { ...oldState.validity, password: password.length > 3 },
    }))
  }

  onChangePasswordRepeat({ target: { value: passwordRepeat } }) {
    this.setState(oldState => ({
      passwordRepeat,
      validity: {
        ...oldState.validity,
        passwordRepeat: passwordRepeat.length > 3,
      },
    }))
  }

  getValidity() {
    const validity =
      this.state.validity.name &&
      this.state.validity.lastname &&
      this.state.validity.email &&
      this.state.validity.phoneNumber &&
      this.state.validity.password &&
      this.state.validity.passwordRepeat
    return validity && this.state.password === this.state.passwordRepeat
  }

  render() {
    const { onSubmit } = this.props
    const {
      name,
      lastname,
      email,
      phoneNumber,
      password,
      passwordRepeat,
    } = this.state

    return (
      <FormControl>
        <FormControl>
          <InputLabel>Nombre</InputLabel>
          <Input value={name} onChange={this.onChangeName} />
        </FormControl>

        <FormControl>
          <InputLabel>Apellido</InputLabel>
          <Input value={lastname} onChange={this.onChangeLastname} />
        </FormControl>

        <FormControl>
          <InputLabel>Número de Teléfono</InputLabel>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={this.onChangePhoneNumber}
          />
        </FormControl>

        <FormControl>
          <InputLabel>E-mail</InputLabel>
          <Input type="email" value={email} onChange={this.onChangeEmail} />
        </FormControl>

        <FormControl>
          <InputLabel>Contraseña</InputLabel>
          <Input
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Confirma tu contraseña</InputLabel>
          <Input
            type="password"
            value={passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          />
        </FormControl>

        <Button
          disabled={!this.getValidity()}
          onClick={() =>
            onSubmit({
              name,
              lastname,
              email,
              phoneNumber,
              password,
              passwordRepeat,
            })
          }
        >
          Siguiente
        </Button>
      </FormControl>
    )
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SignUpForm
