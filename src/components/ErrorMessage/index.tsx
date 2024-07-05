import React from 'react';
import './styles.css';

function ErrorMessage({ message, errorCode = null}) {
    return (
        <>
          <div class="error-message">
            <div class="error-message__text">{message}</div>
            {errorCode ? <div class="error-message__text">{errorCode}</div> : <></>}
            <div class="error-message__text">*Be sure to use VPN due to Google Book Api politics</div>
          </div>
        </>
      );
}

export default ErrorMessage;