
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ArtistDisplay = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
text-align: center;
justify-content: space-evenly;
margin 10px;
`

const ArtistList = (props) => {
        return (
            <div>
                <h2>All Artists</h2>
                {
                    props.artists.map((artist) => {
                        return <ArtistDisplay>
                            <Link to={`/artists/${artist.id}`}><div>
                            <img src={artist.photo_url} height="100" width="100"/>
                                <h1>{artist.name}</h1>
                                </div></Link>
                            </ArtistDisplay>
                    })
                }
               </div>
        )
}

export default ArtistList