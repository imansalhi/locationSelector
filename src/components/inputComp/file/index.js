
import React, { useRef } from 'react';
import uploadIcon from './uploadicon.png'
import './upload.css'

export function FileSelector(props) {

    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (
        <>
            <div className='uploadContainer'>
                <img className='uploadImg' src={uploadIcon} onClick={handleClick} />
            </div>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    )
}

export default FileSelector