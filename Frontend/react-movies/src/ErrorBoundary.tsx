import React from 'react';
import { ReactElement } from 'react';

export default class ErrorBoundary extends React.Component<
  errorBoundaryProps,
  errorBoundaryState
> {
  /**
   *
   */
  constructor(props: errorBoundaryProps) {
    super(props);
    this.state = { isThereError: false, message: '' };
  }

  componentDidCatch(err: any, errInfo: any) {
    console.log(err);
    console.log(errInfo);
  }

  static getDerivedStateFromError(err: any) {
    console.log(err);
    return { isThereError: true, message: err };
  }

  render() {
    if (this.state.isThereError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      } else {
        return <h3>{this.state.message}</h3>;
      }
    }

    return this.props.children;
  }
}

interface errorBoundaryState {
  isThereError: boolean;
  message: string;
}

interface errorBoundaryProps {
  errorUI?: ReactElement;
}
