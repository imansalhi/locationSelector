import react, { useState, Component } from "react";
import './inputTxt.css'

export default function InputText({ onChange,value }) {
    return <input className='inputText' type={'text'} value={value} onChange={onChange} />
}