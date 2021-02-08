import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';


const ImageBackground = styled(BackgroundImage)`
height: 700px;
`

const TextoImagen = styled.div`
background-image: linear-gradient(to top, rgba(34,49,63,.75),rgba(34,49,63,.75));
color:#FFF;
height:100%;
display:flex;
flex-direction:column;
flex:1;
align-items:center;
justify-content:center;

h1 {
  font-size:4rem;
  margin:0%;
}

`

const ImagenHotel = () => {

const {image} = useStaticQuery(graphql`
query {
    image: file(relativePath:{eq:"gatsbyHotel.jpg"}){
      sharp:childImageSharp {
        fluid {
          srcSet
          
        }
      }
    }
  }
`);



    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid} >
         <TextoImagen>
             <h1>Bienvenido</h1> 

        </TextoImagen>
        </ImageBackground>
    );
}

export default ImagenHotel

/* <ImageBackground
      tag="section"
      fluid={gatsbyHotel}>
      </ImageBackground>
      */