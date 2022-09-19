import {Component} from "react"
import styles from './app-filter.module.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: [
                {
                    filter: null,
                    title: 'Все сотрудники'
                },
                {
                    filter: 'rise',
                    title: 'На повышение'
                },
                {
                    filter: 'salary',
                    title: ' З/П больше 1000$',
                    colored: true
                }
            ],
            filter: null
        }
    }

    onUpdateFilter = (value) => {
        this.setState({filter: value})
        this.props.onUpdateFilter(value)
    }

    render (){
        const {filter,buttonsData} = this.state

        const buttons = buttonsData.map((item,i) => {
            const active = item.filter === filter
            const clazz = active ? 'btn-light' : 'btn-outline-light'
            const style = item.colored ? {color:'orange'} : null
            return (
                <button
                    className={`btn ${clazz}`}
                    style={style}
                    type="button"
                    key={i}
                    onClick={() => this.onUpdateFilter(item.filter)}
                >
                    {item.title}
                </button>)
        })

        return (
            <div className={styles['btn-group']}>
                {buttons}
            </div>
        )
    }
}


export default AppFilter
