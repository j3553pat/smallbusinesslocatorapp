import React, { Component }  from 'react'
import { TextField, Button } from '@mui/material'

 class AddListing extends Component {
    state = {
        name: '',
        description:'',
        Address: '',
        hours:'',
    }
    
     textManipulation = (e) => {
        const manipulateText = { ...this.state }
        manipulateText[e.target.name] = e.target.value
        this.setState(manipulateText)
    }
     handleSubmit = (e) => {
        e.preventDefault();
        const info = { ...this.state };
        info.id = this.props.listing.length + 1;
        this.props.addListing(info);
      };

    updateInformation = (prevProps, prevState) => {
        if (prevProps.listing.length !== this.props.listing.length) {
            this.setState({
                name: '',
                description:'',
                Address: '',
                hours:'',
            })
        }
        console.log(this.state)
    }

    render(){ 
        return (
        <form 
            onSubmit={this.handleSubmit}
            className='form-list'
            style={{ width: '35%'}}
            >
        
            <TextField required
                onChange={this.textManipulation}
                value={this.state.name}
                name="name"
                label="Name"
                type="text"
            />
             <TextField 
             required
                onChange={this.textManipulation}
                value={this.state.Address}
                name="Address"
                label="Address"
                type="text"
            />
             <TextField 
                onChange={this.textManipulation}
                value={this.state.description}
                name="description"
                label="description"
                type="text"
            />
             <TextField 
                onChange={this.textManipulation}
                value={this.state.hours}
                name="hours"
                label="hours"
                type="text"
            />
            <Button type='submit' variant="contained">Click to Save or Update</Button>
            </form>
         )
     }

}
export default AddListing;