import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'

class SignInForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',

      validity: { email: false },
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.getValidity = this.getValidity.bind(this)
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

  onChangePassword({ target: { value: password } }) {
    this.setState({ password })
  }

  getValidity() {
    return this.state.validity.email
  }

  render() {
    const { onSubmit } = this.props
    const { email, password } = this.state

    return (
      <FormControl>
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

        <Button
          disabled={!this.getValidity()}
          onClick={() => onSubmit({ email, password })}
        >
          Ingresar
        </Button>
      </FormControl>
    )
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SignInForm
