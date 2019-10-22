import React, { Component } from 'react'
import FlatList from 'flatlist-react'
import { Grid, Card, Button, Icon } from '@material-ui/core'
import { normalizeText } from '../../utils/normalizeText'
import PropTypes from 'prop-types'

import styles from './CardInputSelector.sass'

export default class CardInputSelector extends Component {
  constructor(props) {
    super(props)
    this.textInputRef = React.createRef()
  }
  static defaultProps = {
    data: [],
    placeHolder: '',
    onSelect: () => {},
    onClear: () => {},
    fields: [],
    text: '',
    setValue: true,
    textInputRef: null,
  }

  propTypes = {
    data: PropTypes.array,
    placeHolder: PropTypes.string,
    onSelect: PropTypes.string,
    onClear: PropTypes.string,
    fields: PropTypes.string,
    text: PropTypes.func,
    setValue: PropTypes.func,
    textInputRef: PropTypes.func,
  }

  state = {
    displayList: false,
    input: '',
  }

  onItemPress = item => {
    const { setValue } = this.props
    if (setValue) {
      this.setState({ input: item.name })
    } else {
      this.setState({ input: '' })
    }
    this.setState({ displayList: false })
    this.props.onSelect(item)
  }

  cleanInput = () => {
    this.setState({ input: '' })
    this.props.onClear()
  }

  renderList = () => {
    const { displayList, input } = this.state
    if (displayList) {
      const normalizedInput = normalizeText(input)

      const filteredData = this.props.data.filter(item => {
        return (
          item.name.toLowerCase().includes(normalizedInput) ||
          item.address.toLowerCase().includes(normalizedInput)
        )
      })
      return (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <Button
              onPress={() => this.onItemPress(item)}
              style={styles.listItem}
            >
              <p>
                {item.name}, {item.address}
              </p>
            </Button>
          )}
          keyExtractor={item => item.id}
        />
      )
    }
  }

  render() {
    const { placeHolder } = this.props
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        onPress={() => this.textInputRef.current.focus()}
      >
        <Card style={styles.paper}>
          <p style={styles.text}>{this.props.text}</p>
          <input
            ref={this.textInputRef}
            id="selectorInput"
            placeholder={placeHolder}
            value={this.state.input}
            onFocus={() => this.setState({ displayList: true })}
            onChangeText={text => this.setState({ input: text })}
          />

          <Button icon transparent onPress={this.cleanInput}>
            <Icon name="close" color="#0000FF" />
          </Button>
        </Card>
        <Card style={(styles.paper, styles.textView)}>{this.renderList()}</Card>
      </Grid>
    )
  }
}
