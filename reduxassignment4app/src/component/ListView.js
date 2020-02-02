import React from 'react'
import {Link} from 'react-router-dom'

const ListView = (props) => {

    const renderView = ({list}) => {
        if(list){
            return list.map((item) => {
                return(
                    <div key ={item.id}>
                    <div className="container">
                    
                    <div className="card">
                    <div className="jumbotron">
                    <h5>{item.title}</h5>
                    <h5>{item.Details}</h5>
                    <Link type="button" className="btn btn-primary" to="/form">Enquiry</Link>
                    </div>
                    </div>
                    </div>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            {renderView(props)}
        </div>
    )
}

export default ListView