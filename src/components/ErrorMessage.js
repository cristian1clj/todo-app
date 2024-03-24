const ErrorMessage = ({ error, setError }) => {
    return (
        <div className="message-error">
            <p>{error}</p>
            <button type="button" onClick={e => setError('')}>
                <img className="icon" src="/xicon.png" alt="x icon" />
            </button>
        </div> 
    );
}

export default ErrorMessage;