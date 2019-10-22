import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

import cookies from 'js-cookie'

// Store
import { connect } from 'react-redux'
import { signupUser } from '../../redux/actions/user'

// Components
import { SignUpForm } from '../../components/index'
import { CircularProgress } from '@material-ui/core'

const MESSAGE = 'Hubo un problema registrandote. Por favor intentalo de nuevo.'

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(payload) {
    const { signUp } = this.props

    this.setState({ loading: true })

    const user = await signUp(payload)

    this.setState({ loading: false })

    if (user.error || !user.payload.data.user || !user.payload.data.user.email)
      return alert(MESSAGE)

    cookies.set('@userToken', user.token)
    cookies.set('@userId', user.user_id)
  }

  render() {
    const { loading } = this.state

    return (
      <div className="sign-up">
        <SignUpForm onSubmit={this.onSubmit} />

        {loading && <CircularProgress />}
      </div>
    )
  }
}

SignUpScreen.propTypes = {
  signUp: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  signUp: payload =>
    dispatch(
      signupUser(
        payload.name,
        payload.lastName,
        payload.email,
        payload.phone,
        payload.password,
        payload.passwordRepeat
      )
    ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)
