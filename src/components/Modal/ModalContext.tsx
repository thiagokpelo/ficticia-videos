import * as React from 'react'

export type IModalType = {
  children?: React.ReactNode | React.ReactNodeArray
  show?: boolean
  hideModal?: () => any
  showModal?: () => any
}

const ModalContext = React.createContext<Partial<IModalType>>({
  hideModal: () => null,
  show: false,
  showModal: () => null,
})

class WrapperModal extends React.Component<IModalType, IModalType> {

  constructor(props: IModalType) {
    super(props)
    this.state = {
      hideModal: this.hideModal,
      show: false,
      showModal: this.showModal
    }
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContext
export { WrapperModal }
