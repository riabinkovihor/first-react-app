import {Component} from "react"

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {name: 'John', salary: 800, id:1, increase: false,rise:false},
                {name: 'Mike', salary: 3000,id: 2,increase: false,rise:false},
                {name: 'Bob', salary: 5000,id:3,increase: false,rise:false},
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data})=>{
            return {
                data: data.filter(item=>item.id !==id)
            }
        })
    }

    addItem = (employee) => {
        this.setState(({data})=>{
            return {
                data: [
                    ...data,
                    {
                        ...employee,
                        id:this.maxId++,
                        increase: false,
                        rise: false
                    }
                ],
            }
        })
    }

    onToggleProp = (id,prop) => {
        this.setState(({data})=>({
            data: data.map(item=>{
                return item.id === id
                    ? {...item,[prop]: !item[prop]}
                    : item
            })
        }))
    }
    // onToggleRise = (id) => {
    //     this.onToggleProp(id,'rise')
    // }
    //
    // onToggleIncrease = (id) => {
    //     this.onToggleProp(id,'increase')
    // }


    render() {
        const {data} = this.state

        const employees = data.length
        const increased = data.filter(item => item.increase).length

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter></AppFilter>
                </div>

                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}


export default App
