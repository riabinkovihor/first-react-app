import {Component} from 'react'
import './employees-list-item.css'


class EmployeesListItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            increase: props.increase,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase})=>({
            increase: !increase
        }))
    }

    onLike = () =>  {
        this.setState(({like})=>({
            like: !like
        }))
    }

    render () {
        const {name, salary} = this.props
        const {increase,like} = this.state

        const classNames = () => {
            let classes = 'list-group-item d-flex justify-content-between'
            if (increase) {
                classes += ' increase'
            }

            if( like) {
                classes += ' like'
            }
            return classes
        }


        return (
            <li  className={classNames()} >
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.onIncrease}
                    >

                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }


}
export default EmployeesListItem