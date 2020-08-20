import React from 'react'

interface IProps {}

interface IState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(err: any) {
    if (err) {
      console.log(err)
      this.setState({ hasError: true })
    }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (!hasError) {
      return <div>There has an error in this page</div>
    }
    return children
  }
}

const Show: React.FC = () => <div>There needs to show something</div>

const ErrorComponent = () => {
  throw new Error('404 not found')
}

export const Page: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
      <Show />
    </>
  )
}
