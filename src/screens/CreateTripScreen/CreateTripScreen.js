import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/user'
import { Grid, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'
import PropTypes from 'prop-types'
import CardInputSelector from '../../components/CardInputSelector/CardInputSelector'
import {
  setStartStop,
  setEndStop,
  setStartTime,
  clearStartStop,
  clearEndStop,
} from '../../redux/actions/createtrip'
import { getAllSpots } from '../../redux/actions/spots'
import { spotsFilter } from '../../utils/spotsFilter'

import styles from './CreateTripScreen.sass'

class CreateTripScreen extends Component {
  state = {
    isDateTimePickerVisible: false,
    pickedDate: null,
  }

  propTypes = {
    setStartTime: PropTypes.string.isRequired,
    spots: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endStop: PropTypes.string.isRequired,
    startStop: PropTypes.string.isRequired,
    clearEndStop: PropTypes.func.isRequired,
    clearStartStop: PropTypes.func.isRequired,
    getAllSpots: PropTypes.func.isRequired,
    setStartStop: PropTypes.func.isRequired,
    setEndStop: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.props.getAllSpots()
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true })
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false })
  }

  handleDatePicked = date => {
    this.props.setStartTime(date)
    this.setState({ pickedDate: date })
    this.hideDateTimePicker()
  }

  render() {
    const { startStop, endStop, startTime, spots } = this.props
    const disabled = startStop && endStop && startTime ? false : true
    const { pickedDate } = this.state
    let day
    let hours
    let minutes
    if (pickedDate) {
      day = pickedDate.toLocaleDateString()
      hours = pickedDate.getHours()
      minutes = pickedDate.getMinutes()
    }
    const filteredSlots = spotsFilter(spots, [startStop, endStop])
    // const filteredSlots = spots

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <CardInputSelector
          text="#Desde"
          placeHolder="Filtra por Comuna o Parada"
          onSelect={item => this.props.setStartStop(item)}
          onClear={this.props.clearStartStop}
          data={filteredSlots}
        />

        <CardInputSelector
          text="#A"
          placeHolder="Filtra por Comuna o Parada"
          onSelect={item => this.props.setEndStop(item)}
          onClear={this.props.clearEndStop}
          data={filteredSlots}
        />

        <Button style={styles.dateButton} onPress={this.showDateTimePicker}>
          <p style={styles.whiteText}>
            {pickedDate
              ? `${day} - ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
              : 'Hora/Fecha de Salida'}
          </p>
        </Button>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            value={this.pickedDate}
            onChange={this.handleDatePicked}
          />
        </MuiPickersUtilsProvider>

        <Button
          block
          style={disabled ? styles.addButtonDisabled : styles.addButton}
          disabled={disabled}
          // TODO: onPress={() => navigation.navigate('AddStopsScreen')}
        >
          <p style={styles.whiteText}>Siguiente</p>
        </Button>
      </Grid>
    )
  }
}

CreateTripScreen.navigationOptions = {
  header: null,
}

const mapStateToProps = ({ user, createTrip, spots }) => {
  return {
    user: user,
    startStop: createTrip.startStop,
    endStop: createTrip.endStop,
    startTime: createTrip.startTime,
    spots: spots.spots,
  }
}

const mapDispatchToProps = {
  loginUser,
  setStartStop,
  setEndStop,
  setStartTime,
  clearStartStop,
  clearEndStop,
  getAllSpots,
}

// TODO: CreateTripScreen.navigationOptions = {
//   title: 'Crear un viaje',
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTripScreen)
