
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ArtistDisplay = styled.div`
border:solid;
width:50%;
padding:50px;
text-align:center;
margin:auto;
position: relative;
background-color: grey;
font-size:50px;
height:200px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ArtistList = (props) => {
        return (
            <div>
                <h2>All Artists</h2>
                {
                    props.artists.map((artist) => {
                        return <div>
                            <Link to={`/artists/${artist.id}`}><ArtistDisplay>{artist.name} <img src={artist.photo_url} height="100" width="100"/></ArtistDisplay></Link>
                            </div>
                    })
                }
               </div>
        )
}

export default ArtistList