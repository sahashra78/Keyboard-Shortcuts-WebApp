import React, { useState, useEffect } from 'react'

export const WindowsShortcut = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://api-keyboard-shortcuts.azurewebsites.net/Shortcut/Os/1`)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(console.error)
    }, []);
    if (loading) { return (
        <div class="loading">
            <div class="loadingContent">
                <h2>Loading..</h2>
                <div class="spinner">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="7" stroke-width="1" />
                    </svg>
                </div>
            </div>
        </div>
    ) }
    if (data) {
        return (
            <div className="container">
                {data.map((shortcut, index) => (
                <div key={index.toString()} className="card">
                    <div class="card-head"><h3>{shortcut.Keys}</h3></div>
                    <div class="card-body"><p>{shortcut.Function}</p></div>
                </div>
            )
            )}
            </div>
            
        )

    }
    else{
        return null;
    }
}
