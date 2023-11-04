import React, { useState } from 'react';
import '../Generator/Generator.css';

function Generator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePasswordWithAnimation = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let allChars = '';
        if (includeUppercase) {
            allChars += uppercaseChars;
        }
        if (includeLowercase) {
            allChars += lowercaseChars;
        }
        if (includeNumbers) {
            allChars += numberChars;
        }
        if (includeSymbols) {
            allChars += symbolChars;
        }

        let newPassword = '';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            newPassword += allChars[Math.floor(Math.random() * allChars.length)];
            setPassword(newPassword);
            currentIndex++;

            if (currentIndex >= length) {
                clearInterval(intervalId);
            }
        }, 100);
    };

    const copyToClipboard = () => {
        const textarea = document.createElement('textarea');
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="container">
            <div className="password-display">
                 {password}
                {password && (
                    <button className="copy-button" onClick={copyToClipboard}>
                        <span className="material-symbols-outlined copy">content_copy</span>
                    </button>
                )}
            </div>
            <form>
                <div className="options">
                    <label>
                        <input
                            className="uppercase checkbox-input"
                            type="checkbox"
                            checked={includeUppercase}
                            onChange={() => setIncludeUppercase(!includeUppercase)}
                        />
                        <span className="checkbox-label">Uppercase</span>
                    </label>
                    <label>
                        <input
                            className="lowercase checkbox-input"
                            type="checkbox"
                            checked={includeLowercase}
                            onChange={() => setIncludeLowercase(!includeLowercase)}
                        />
                       <span className="checkbox-label">Lowercase</span> 
                    </label>
                    <label>
                        <input
                            className="numbers checkbox-input"
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}
                        />
                       <span className="checkbox-label">Numbers</span> 
                    </label>
                    <label>
                        <input
                            className="symbols checkbox-input"
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(!includeSymbols)}
                        />
                       <span className="checkbox-label">Symbols</span>
                    </label>
                </div>
                <label className="length-label">
                    Password Length: {length}
                    <input
                        className="length"
                        type="range"
                        min="10"
                        max="40"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </label>
            </form>
            <button className="generate-button" type="button" >
            <span class="material-symbols-outlined iconChange" onClick={generatePasswordWithAnimation}>change_circle</span>
            </button>
        </div>
    );
}

export default Generator;

