import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './comboStyle.css'

export function ComboBox(props) {
    const { options,
        onChange,
        defaultOption,
        placeholder } = props
    return <div className='comboContainer'>
        <Dropdown options={options}
            onChange={(ev) => onChange(ev)}
            value={defaultOption}
            placeholder={placeholder} />
    </div>
}