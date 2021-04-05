import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footerContent">
                    <h2>Keyboard Shortcut API</h2>
                    <p>Keyboard Shortcut API is a REST API that serves a list of shortcut keys.
                    You can also filter the shortcut keys by Operating System.
                    It can be used without any API token, membership, registration or payment.
                    The usage is very simple and only requires a basic knowledge of HTTP requests and JSON.
                </p>
                    <br /><br /><br />
                    <a href="https://api-keyboard-shortcuts.azurewebsites.net/" className="button" target="_blank">Visit API</a>

                    <cite>All the data for the API has been collected from 
                        <a href="https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec"> Microsoft </a> 
                        and <a href="https://support.apple.com/en-ca/HT201236"> Apple </a></cite>
                </div>
        </footer>
    )
}

