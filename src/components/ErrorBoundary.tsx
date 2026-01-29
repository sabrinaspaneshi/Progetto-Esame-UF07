import React from 'react';


// tiene traccia se c'è stato un errore e l'oggetto errore
interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface ErrorBoundaryProps {
    children: React.ReactNode;
}


// componente di classe che serve x implementare il boundary degli errori
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }


    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        // in caso di errore, mostra un messaggio di errore
        if (this.state.hasError) {
            return (
                <div className="error">
                    <h2>Ooops!!!!! Something went wrong</h2>
                    <p>We apologize for the inconvenience. Please try reloading the page.</p>
                    <button
                        className="btn"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
