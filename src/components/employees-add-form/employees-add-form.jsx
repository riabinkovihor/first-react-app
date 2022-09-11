import {Component} from 'react'
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddEmployee = (e) => {
        if (this.state.name.length < 3 || !this.state.salary) return
        this.props.onAdd({
            ...this.state
        })
        this.setState({
            name:'',
            salary: ''
        })
    }

    render() {
        const {name,salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name={'name'}
                           onChange={(e)=>{this.setState({name:e.target.value})}}
                           value={name}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name={'salary'}
                           onChange={this.onChangeValue}
                           value={salary}
                    />

                    <button type="button"
                            onClick={this.onAddEmployee}
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}


export default EmployeesAddForm;
