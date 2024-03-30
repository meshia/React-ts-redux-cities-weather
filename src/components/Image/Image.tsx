import React from 'react';
import styled from 'styled-components';

interface Props {
    label: string | undefined,
    imageUrl: string | undefined,
}

const ImageWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    overflow: hidden;
    border-radius: 2em;
    img {
        width: 100%;
        height: auto;
    }
`;

const Image: React.FC<Props> = ({ label, imageUrl }) => {
    return (
        <ImageWrapper>
            { imageUrl && <img src={imageUrl} alt={label} /> }
        </ImageWrapper>
    )
}

export default Image;