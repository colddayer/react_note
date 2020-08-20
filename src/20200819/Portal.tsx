import React from 'react'
import ReactDOM from 'react-dom'
import { useModal } from './useModal'
import { styles } from './style'

interface IProps {
  styles: React.CSSProperties
}

class Modal extends React.Component<IProps> {
  private modal: Element | null

  constructor(props: IProps) {
    super(props)
    this.modal = document.getElementById('modal-wrap')
  }

  render() {
    const { children, styles } = this.props
    return ReactDOM.createPortal(<div style={styles}>{children}</div>, this.modal!)
  }
}

export const Page: React.FC = () => {
  const { visible, toggleVisble } = useModal()

  return (
    <>
      <button onClick={() => toggleVisble(true)}>点击展示</button>
      {visible && (
        <Modal styles={styles.modalWrap}>
          <div onClick={() => toggleVisble(false)} style={styles.content}>
            点击隐藏
          </div>
        </Modal>
      )}
    </>
  )
}
