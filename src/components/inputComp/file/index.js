
import React, { useRef } from 'react';
import uploadIcon from './uploadicon.png'
import './upload.css'

export function FileSelector({ handleFile }) {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        // convert logo file to base 64
        toBase64(fileUploaded).then((result) => {
            handleFile(result);
        })
    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    return (
        <>
            <div className='uploadContainer'>
                <img className='uploadImg' src={uploadIcon} onClick={handleClick} />
            </div>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                accept="image/*"
                multiple={false}
                style={{ display: 'none' }}
            />
        </>
    )
}

export default FileSelector