import react, { useState, Component } from "react";
import './inputTxt.css'

export default function InputText({ onChange }) {
    return <input className='inputText' type={'text'} onChange={onChange} />
}