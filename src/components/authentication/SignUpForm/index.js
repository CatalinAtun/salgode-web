import React from 'react'
import PropTypes from 'prop-types'

// Components
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})
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

    const { classes } = this.props

    return (
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  value={name}
                  onChange={this.onChangeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lname"
                  value={lastname}
                  onChange={this.onChangeLastname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  type="email"
                  value={email}
                  onChange={this.onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Número de Teléfono"
                  type="tel"
                  value={phoneNumber}
                  onChange={this.onChangePhoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Contraseña"
                  id="password"
                  autoComplete="current-password"
                  type="password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirma tu contraseña"
                  id="passwordRepeat"
                  autoComplete="current-password"
                  type="password"
                  value={passwordRepeat}
                  onChange={this.onChangePasswordRepeat}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
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
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/sign-in" variant="body2">
                  ¿Ya tienes una cuenta? Ingresa
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignUpForm)
