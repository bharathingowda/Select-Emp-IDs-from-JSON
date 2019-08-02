import React from "react";
import select from 'react-select';


const employeeList = ({
    "": [
        { id: '', text: "Select EmployeeID" }

    ],
    "HR": [

        { id: '1', text: '1' },
        { id: '2', text: '2' },
        { id: '3', text: '3' },
        { id: '4', text: '4' },
        { id: '5', text: '5' }
    ],
    "Engineer": [
        { id: '6', text: '6' },
        { id: '7', text: '7' },
        { id: '8', text: '8' },
        { id: '9', text: '9' },
        { id: '10', text: '10' }
    ]
})


class Form1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataValue: 'HR'
        }

    }
    /*
    state = {
        selecteddepartment: null,
        selectedid: null,

    };
    */

    onChange = ({ target: { value } }) => {
        this.setState({ dataValue: value });
    }

    /*
        handleChange = selecteddepartment => {
            this.setState({ selecteddepartment: this.props.value })
            console.log(`Option selected:`, selecteddepartment);
        };
    
        handleChange1 = selectedid => {
            this.setState({ selectedid: this.props.value });
            console.log(`Option selected:`, selectedid);
        };
        */



    onClearForm = () => {
        window.location.reload();

    }



    render() {








        /* const DepartmentOptions = [
             { value: 'HR', label: 'HR' },
             { value: 'Engineer', label: 'Engineer' },
 
         ];
         const IdOptions = [
             { value: 1, label: '1' },
             { value: 2, label: '2' },
             { value: 3, label: '3' },
             { value: 4, label: '4' },
             { value: 5, label: '5' },
             { value: 6, label: '6' },
             { value: 7, label: '7' },
             { value: 8, label: '8' },
             { value: 9, label: '9' },
             { value: 10, label: '10' },
             { value: 11, label: '11' },
             { value: 12, label: '12' },
 
         ];
         */

        // const { selecteddepartment } = this.state;
        // const { selectedid } = this.state;




        const customStyles = {
            option: (styles, state) => ({
                ...styles,
                color: state.isSelected ? "#FFF" : styles.color,
                backgroundColor: state.isSelected ? "#c7bdf2" : styles.color,
                borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
                "&:hover": {
                    color: "#FFF",
                    backgroundColor: "#c7bdf2"
                }
            }),
            control: (styles, state) => ({
                ...styles,
                boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(120, 194, 173, 0.25)" : 0,
                borderColor: state.isFocused ? "#bcebeb" : "#CED4DA",
                "&:hover": {
                    borderColor: state.isFocused ? "#bcebeb" : "#CED4DA"
                }
            })
        };

        const { dataValue } = this.state;
        const options = employeeList[dataValue];



        return (


            <form onSubmit={this.props.getDetails} id="myform" name="myform" >
                <p className="Title" >Employee Details</p>

                <select styles={customStyles} onChange={this.onChange} name="department" className="selectbox1" >
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Engineer">Engineer</option>
                </select>
                &nbsp; &nbsp;
                <select styles={customStyles} className="selectbox1" name="id">
                    <option value="">Select EmployeeID</option>
                    {options.map((option) => {
                        return <option key={option.id} value={option.id}>{option.text}</option>;

                    })
                    }
                </select>

                <button type="submit" className="button1">Get Details</button>
                &nbsp;&nbsp;
                <input type="reset" value="Clear Values" className="buttonreset" />
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                <input type="button" name=" onClearForm" value="Clear Form" onClick={this.onClearForm} className="buttonclearform" />


            </form>
        );

    }
}



export default Form1;