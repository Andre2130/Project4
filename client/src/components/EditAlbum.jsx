import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

const FormContainerParentContainer = styled.div`
max-width: 1000px;
max-height: 650px;
border: 1px solid rgba(87, 87, 87, .2); 
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



class EditAlbum extends Component {
    state = {
        updatedAlbum: {
            name: '',
            cover_art_url: ''
        },
        redirectToAlbum: false
    }

    async componentWillMount(){
        try {
            const {album_id , artist_id} = this.props.match.params
          const response = await axios.get(`/api/artists/${artist_id}/albums/${album_id}`)
          console.log(response)
          this.setState({updatedAlbum: response.data})
        }catch(error) {
            console.log(error)
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const updatedAlbum = { ...this.state.updatedAlbum }
        updatedAlbum[attribute] = event.target.value
        this.setState({ updatedAlbum: updatedAlbum })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {album_id , artist_id} = this.props.match.params
        const clonedAlbum = { ...this.state.updatedAlbum }
        const response = await axios.patch(`/api/artists/${artist_id}/albums/${album_id}`, {
            album: clonedAlbum
        })
        await 
        this.setState({ updatedAlbum: response.data, redirectToAlbum: true })
    }

    render() {
        if (this.state.redirectToAlbum) {
            const {album_id , artist_id} = this.props.match.params
            return (
                <Redirect to={`/artists/${artist_id}`} />
            )
        }
    
        return (
            <FormContainerParentContainer>
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                <h2>Edit</h2>
                    <div>
                        album name
                        <Input onChange={this.handleChange} 
                        value={this.state.updatedAlbum.name}
                        name='name' 
                        type="text"  />
                    </div>
                    <div>
                        Cover Art url
                        <TextArea onChange={this.handleChange} 
                        value={this.state.updatedAlbum.cover_art_url}
                        name='cover_art_url' 
                        type="text" 
                        size="4em"/>
                    </div>
                    <div>
                        <Button>Update Album</Button>
                    </div>
                </form>
            </FormContainer>
            </FormContainerParentContainer>
        )
    }
}


export default EditAlbum;