import * as React from 'react'
import { withStyles, IconButton, WithStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { IModalType } from './ModalContext'
import { styles } from 'src/components/Modal/styles'

type Props = {
  modalProps?: IModalType
  children: React.ReactNode | React.ReactNodeArray
} & WithStyles<typeof styles>

class ModalComponent extends React.Component<Props, never> {

  modalRef: any = React.createRef()

  componentDidMount() {
    document.addEventListener("mousedown", this.closeModal, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.closeModal, false)
  }

  closeModal = (e: any) => {

    const { modalProps }: any = this.props
    const node = this.modalRef.current

    if (node && node.contains(e.target)) {
      return
    }

    modalProps.hideModal();
  }

  render() {
    const { modalProps, classes, children } = this.props

    const overlayClasses = [
      classes!.overlay,
      modalProps.show ? classes!.overlayActive : '',
    ]

    return (
      <div className={overlayClasses.join(' ')}>
        <div className={classes!.modal} ref={this.modalRef}>
          <header className={classes!.header}>
            <IconButton onClick={modalProps.hideModal}>
              <CloseIcon />
            </IconButton>
          </header>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ModalComponent)
