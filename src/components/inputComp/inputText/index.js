import react, { useState, Component } from "react";
import './inputTxt.css'

export default function InputText({ change }) {
    return <input className='inputText' type={'text'} onChange={change} />
}