
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ArtistDisplay = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
text-align: center;
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