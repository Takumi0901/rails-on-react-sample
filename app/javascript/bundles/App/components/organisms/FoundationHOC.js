import React from 'react'
import NavBar from '../atoms/NavBar'
import Container from '../atoms/Container'
import SideBar from '../molecules/SideBar'

const FoundationHOC = (WrappedComponent) => {
  class Foundation extends React.Component {
    constructor() {
      super()
      this.state = {
        open: false
      }
    }
    handleToggle() {
      this.setState({
        open: !this.state.open
      })
    }
    render() {
      const {books} = this.props
      return (
        <div>
          <NavBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
          />
          <SideBar
            onToggle={() => this.handleToggle()}
            open={this.state.open}
            list={books.list}
          />
          <Container>
            <WrappedComponent {...this.props}/>
          </Container>
        </div>
      )
    }
  }
  return Foundation
}

export default FoundationHOC