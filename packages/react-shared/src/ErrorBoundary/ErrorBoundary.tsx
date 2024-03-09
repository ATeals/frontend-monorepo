import { Component, ErrorInfo } from "react";

type Fallback =
  | React.ReactNode
  | (({
      error,
      errorInfo,
      resetError,
    }: {
      error?: Error;
      errorInfo?: ErrorInfo;
      resetError: () => unknown;
    }) => React.ReactNode);

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: Fallback;

  onError?: (error: Error, errorInfo: ErrorInfo) => unknown;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  async componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
    this.props.onError?.(error, errorInfo);
  }

  private resetError = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    });
  };

  private renderFallback = (fallback: Fallback) => {
    if (typeof fallback === "function") {
      return fallback({
        error: this.state.error,
        errorInfo: this.state.errorInfo,
        resetError: this.resetError,
      });
    }
    return fallback;
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.renderFallback(this.props.fallback);
      } else {
        throw this.state.error;
      }
    }

    return this.props.children;
  }
}
