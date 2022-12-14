import './employees-list-item.css'


 const EmployeesListItem = (props) => {

    const {
        name,
        salary,
        increase,
        rise,
        onDelete,
        onToggleProp,
        onUpdateSalary
    } = props

    const classNames = () => {
        let classes = 'list-group-item d-flex justify-content-between'
        if (increase) {
            classes += ' increase'
        }

        if( rise) {
            classes += ' like'
        }
        return classes
    }


    return (
        <li  className={classNames()} >
            <span onClick={onToggleProp} data-toggle={'rise'} className="list-group-item-label">{name}</span>
            <input type="text" value={salary} className="list-group-item-input" onChange={onUpdateSalary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle={'increase'}
                >

                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default EmployeesListItem
