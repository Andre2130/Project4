
import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'


const FormContainerParentContainer = styled.div`
max-width: 1000px;
max-height: 650px;
border: 1px solid rgba(87, 87, 87, .6); 
border-radius: 2px;
text-align: center;
margin: 40px auto;
box-shadow: .5px .5px .5px .5px;
`


const FormContainer = styled.div`
font-family: "Oxygen", sans-serif;
padding-top: 50px;
padding-bottom: 80px;
/* border: solid black 2px; */
max-width: 700px;
max-height: 500px;
margin: 0 auto;
/* pading: 0 1rem;  */
text-align: center;
background-color: white;
border-radius: 5px;
max-width: 500px;
max-height: 400px;
margin: 65px auto;
border: 1px solid rgba(87, 87, 87, .2); 
box-shadow: .5px .5px .5px .5px;
`

const Input = styled.input.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '2em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid #62C1FF;
	border-radius: 3px;
    margin: ${props => props.margin};
	padding: ${props => props.padding};
`

const TextArea = styled.textarea.attrs({
    
	margin: props => props.size || '.5em',
	padding: props => props.size || '.5em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: 0.75em;
	border: 2px solid #62C1FF;
	border-radius: 3px;
    margin: ${props => props.margin};
	padding: ${props => props.padding};
`


const Button = styled.button`
cursor: pointer;
 background: #62C1FF;
	color: white;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid white;
	border-radius: 3px;
    &:hover{
        box-shadow: 1px 1px 2px;
    }
`

class AlbumForm extends Component {

    state = {
        newAlbum: {
            name: '',
            cover_art_url: ''
        },
        redirectToAlbumList: false,
        newAlbumId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedAlbum = { ...this.state.newAlbum }
        updatedAlbum[attribute] = event.target.value
        this.setState({ newAlbum: updatedAlbum })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { artist_id } = this.props.match.params
        const emptyForm = {
            name: '',
            cover_art_url: ''
        }
        const response = await axios.Album(`/api/artists/${artist_id}/Albums`, {
            Album: this.state.newAlbum
        })
        this.setState({ redirectToAlbumList: true, newAlbumId: response.data._id, newAlbum: emptyForm })
    }


    render() {

        if (this.state.redirectToAlbumList === true) {
            const { artist_id } = this.props.match.params
            return (
            <Redirect to = {`/artists/${artist_id}`} />
            )
        }
        
        return (
            <FormContainerParentContainer>

            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                <h2>New Album</h2>
                    <div>
                        <Input onChange={this.handleChange} 
                        placeholder='name' 
                        name='name' 
                        type="text" 
                        value={this.state.newAlbum.name} 
                        size="2em"/>
                    </div>
                    <div>
                     <TextArea onChange={this.handleChange} 
                     placeholder='cover_art_url' 
                     name='cover_art_url' 
                     type="text" 
                     value={this.state.newAlbum.cover_art_url} 
                     size="4em"/> 

                    </div>
                    <div>
                        <Button>Submit New Album</Button>
                    </div>
                </form>
            </FormContainer>
            </FormContainerParentContainer>
        )
    }
}

export default AlbumForm
