import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import cookies from 'js-cookie'

// Store
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/user'

// Components
import { SignInForm } from '../../components/index'
import { CircularProgress } from '@material-ui/core'

const MESSAGE =
  'Hubo un problema iniciando sesión. Por favor intentalo de nuevo.'

class SignInScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(payload) {
    const { signIn } = this.props

    this.setState({ loading: true })

    const user = await signIn(payload)

    this.setState({ loading: false })

    if (user.error || !user.payload.data.email) return alert(MESSAGE)

    cookies.set('@userToken', user.token)
    cookies.set('@userId', user.user_id)
  }

  render() {
    const { loading } = this.state

    return (
      <div className="sign-in">
        <SignInForm onSubmit={this.onSubmit} />

        {loading && <CircularProgress />}
      </div>
    )
  }
}

SignInScreen.propTypes = {
  signIn: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  signIn: payload => dispatch(loginUser(payload.name, payload.password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen)
