import './btnStyle.css'
export default function Btn({ onClick, value }) {
    return <input className="inputBtn" onClick={onClick} type={'button'} value={value} />
}