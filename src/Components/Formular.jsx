import React, {useState} from 'react'
import Select from "react-select"
import NumberInput from "./Input1"
import Result from './Result'
import "./Form.css"

const Formular = (props) => {

    const [selectedOptionState, setSelectedOptionState] = useState({
        selectedOptionState: {
            value: '--Vyberte operaci--',
            label: '--Vyberte operaci--',
        },  })

    const [resultState, setResultState] = useState(null)

    const options = [
        { value: 'ADD', label: 'Sčítání' },
        { value: 'SUBTRACT', label: 'Odčítání' },
        { value: 'MULTIPLY', label: 'Násobení' },
        { value: 'DIVIDE', label: 'Dělení' }, ]

        let calculate = () => {
            const { x, y } = props;
            switch (selectedOptionState.selectedOptionState.value) {
                case 'ADD':
                    return parseFloat(x) + parseFloat(y);
                case 'SUBTRACT':
                    return parseFloat(x) - parseFloat(y);
                case 'MULTIPLY':
                    return parseFloat(x) * parseFloat(y);
                case 'DIVIDE':
                    return parseFloat(x) / parseFloat(y);
                default:
                    return null;
            }
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const result = calculate(); 
            console.log(result);
            setResultState(result)
        }
        

    const handleChange = (selectedOptionState) => {
            setSelectedOptionState({selectedOptionState})}
    

  return (
    <div > 
        <form className='celok' 
        onSubmit={handleSubmit}>
        <NumberInput
                    OnChange={props.xOnChange}
                    name="x"
                    label="Prvé číslo:"
                    value={props.x}
                />
                <NumberInput
                    OnChange={props.yOnChange}
                    name="y"
                    label="Druhé číslo:"
                    value={props.y}
                />
        <Select 
        onChange={handleChange}
        value={selectedOptionState.value}
        options={options}  />
        
        <button style={{width : "100px", height : "20px" }}
         type="submit"
         value={selectedOptionState.value}
        > Vypočítaj

         </button>
        </form>
        <Result value={resultState}/>
    </div>
  )
}

export default Formular