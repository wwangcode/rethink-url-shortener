import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [ URL, setURL ] = useState('')
  const [ btnText, setBtnText ] = useState('Shorten')
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ shortenedLinks, setShortenedLinks ] = useState([])

  const handleURLInput = (e) => {
    setURL(e.target.value)
  }
  const handleShortenURL = async (e) => {
    e.preventDefault()
    setBtnText('Shortening...')

    try {
      const res = await axios.post('api/bitly', {URL})
      if (res.status === 200) {
        const { shortURL } = res.data
        setBtnText('Shorten')
        setURL('')
        setErrorMessage(null)
        setShortenedLinks([shortURL, ...shortenedLinks])
      }
    }
    catch (res) {
      setBtnText('Shorten')
      setErrorMessage('Something went wrong, please try again')
    }
  }

  return (
    <Container>
      <Title>URL Shortener</Title>
      <InputContainer>
        <Input type='url' value={URL} onChange={handleURLInput} placeholder='Enter URL to shorten'></Input>
        <Submit type='submit' value={btnText} onClick={handleShortenURL} />
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      {shortenedLinks.length > 0 && (
        <ShortenedLinkContainer>
          <ShortenedLinksTitle>Links</ShortenedLinksTitle>
          <List>
            {shortenedLinks.map(link => (
              <>
                <ListItem key={link}>
                  <Link href={`https://${link}`} target='_blank'>{`${link}`}</Link>
                </ListItem>
              </>
            ))}
          </List>
        </ShortenedLinkContainer>
      )}

    </Container>
  )
}


const Title = styled.div`
  margin-top: 3rem;
  font-size: 4rem;
`;

const Input = styled.input`
    width: 25rem;
    padding-left: 1rem;
    text-align: left;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 0;
    font-weight: 300;
    &:focus {
        border: 2px solid white;
        outline: 0;
    }
`;

const Submit = styled.input`
    font-weight: 600;
    font-size: 1.5em;
    cursor: pointer;
    border: 1px solid #bb86fc;
    color: #bb86fc;
    outline: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;

    ${Input} {
        font-size: 1.25rem;
    }
    ${Submit} {
        font-size: 1.5rem;
        padding: .25em 1em;
        &:hover {
            color: rgba(217, 164, 255, 1);
            border-color: rgba(217, 164, 255, 1);
        }
    }
`;

const ErrorMessage = styled.div`

`;

const ShortenedLinksTitle = styled.div`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const Link = styled.a`
    font-size: 2rem;
    text-decoration: none;
    display: inline-block;
    color: #03dac5;
    margin-bottom: 2rem;
    &:hover {
      color: #bb86fc;
    }
`;


const ListItem = styled.li`
    margin: 1rem;
    font-size: 1.5rem;
    padding-left: 1rem;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    list-style-type: '▹';
    margin: 0 1rem;
`;

const ShortenedLinkContainer = styled.div`
    margin-top: 3rem;
`;

const Container = styled.main`
  margin: 0 auto;
  text-align: center;
`;