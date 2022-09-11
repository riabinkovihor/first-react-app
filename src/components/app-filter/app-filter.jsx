import {Component} from "react"
import './app-filter.css'

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
                    title: ' З/П больше 1000$'
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
            return (<button className={`btn ${clazz}`}
                            type="button"
                            key={i}
                            onClick={() => this.onUpdateFilter(item.filter)}
            >
                {item.title}
            </button>)
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}


export default AppFilter
