import React, {Component} from 'react'

export default class Footer extends Component {
    render (){
        return (
            <footer>
                <p>Prokleti footer na {this.props.ime}</p>
            </footer>
        )
    }
}
