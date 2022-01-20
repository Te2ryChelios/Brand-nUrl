import styled from 'styled-components'

export const Screen = styled.div`
    background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : '#010606')};
    background-image: ${({image}) => (image ? `url(${image})` : 'none')};
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex: ${({flex}) => (flex ? flex : 0)};
    flex-wrap: ${({flexWrap}) => (flexWrap ? flexWrap : "nowrap")};
    flex-direction: ${({flexDirection}) => (flexDirection ? flexDirection : "column")};
    justify-content: ${({justifyContent}) => (justifyContent ? justifyContent : "flex-start")};
    align-items: ${({alignItems}) => (alignItems ? alignItems : "flex-start")};
    background-image: ${({image}) => (image ? `url(${image})` : 'none')};
    background-color: ${({isDebug}) => (isDebug ? `red` : 'none')};
    background-size: cover;
    background-position: center;
    width: 100%;
    margin: ${({margin}) => (margin ? margin : '0')};
    padding: ${({padding}) => (padding ? padding : '0')};
    max-width: ${({maxWidth}) => (maxWidth ? maxWidth : '100vw')};
    min-width: ${({minWidth}) => (minWidth ? minWidth : '0')};
`

export const TextTitle = styled.h1`
    color: ${({light}) => (light ? '#f3f6f9' : '#1a1a1a')};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0')};
    margin-top: ${({marginTop}) => (marginTop ? marginTop : '0')};
`

export const TextSubtitle = styled.p`  
    color: ${({light}) => (light ? '#d7d9db' : '#212121')};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0')};
`

export const TextDescription = styled.p`
    color: ${({light}) => (light ? '#d7d9db' : '#212121')};
    font-size: .75rem;
    font-weight: 600;
`

export const StyledClickable = styled.div`
    :active{
        opacity: 0.6;
    }
`
export const FormItem = styled.div`
position: relative;
`

export const FormInput = styled.input`
background: var('--white');
outline: none;
border: none;
padding: 10px 40px 10px 10px;
margin: 10px 0;
max-width: calc(100vw - 20px);
`

export const FormInputButton = styled.button`
position: absolute;
top: 13px;
right: 10px;
background: none;
border: none;
outline: none;
font-size: 1.7rem;
color: var(--light-grey);

cursor: pointer;
transition: 0.3s;

&:hover{
    color: var(--dark-grey);
}
`

export const NFTCardContainer = styled.div`
display: flex;
align-items: center;
/* background: #f3f6f9;
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.05); */
margin: 20px;
flex-direction: column;
transition: 0.3s;
&:hover{
    cursor: pointer;
    /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.15);*/
    transform: scale(1.05); 
}
`

export const NFTCardHeader = styled.div`
width: 100%;
background: var(--black);
display: flex;
align-items: center;
padding: 10px 10px;
`

export const NFTCardContent = styled.div`

`

export const NFTCardImage = styled.div`
`

export const NFTCardName = styled.h3`
color: var(--white);
font-size: 0.8rem;
`
export const NFTCardLevel = styled.p`
color: var(--light-grey);
margin-left: auto;
font-size: 0.7rem;
`