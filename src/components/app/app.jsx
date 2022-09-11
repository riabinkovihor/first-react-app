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
            ],
            term:'',
            filter: null

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

    searchEmp = (items,term) => {
        if (term.length === 0) return items
        // return items.filter(item=> item.name.toLowerCase().includes(term.toLowerCase()))
        return items.filter(item=> item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    onUpdateFilter = (value) => {
        this.setState({filter:value})
    }

    filterData = (items,filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'salary':
                return items.filter(item => item.salary >= 1000)
            default:
                return items
        }
    }

    onUpdateSalary = (id,value) => {
        this.setState(({data})=>({
            data: data.map(item => {
                if (item.id === id) return {...item, salary:value}
                return item
            })
        }))
    }

    render() {
        const {data,term,filter} = this.state

        const employees = data.length
        const increased = data.filter(item => item.increase).length
        const visibleData = this.filterData(this.searchEmp(data,term),filter)

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter={this.onUpdateFilter}></AppFilter>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}


export default App
