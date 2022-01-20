import './App.css';
import './theme.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Screen, Container, TextTitle} from './globalStyles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from "@mui/material/Paper";
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import {MdClose} from 'react-icons/md'

function App() {
  const [fullUrlInput, setFullUrlInput] = useState('');
  const [urls, setUrls] = useState("")
  const [url, setUrl] = useState("")
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFullUrlInput(e.target.value)
  }

  const paperStyle = {
    padding: '20px',
    minWidth: "400px",
    marginBottom: '20px'
  }

  const fetchData =  () => {
     axios.get('http://localhost:5000').then((res) => {
      setUrls(res.data)
    })
  }

  const postUrl = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setUrl('')
    await axios.post('http://localhost:5000/shortUrl', {fullUrl: fullUrlInput})
    .then((res) => {
      if(res.data.err){
        setError(res.data.err)
        setOpen(true)
        setLoading(false)
        return
      }
      setUrl(res.data.short)
      setOpen(true)
      setLoading(false)
    }).catch((err) => {
      setError(err)
      setLoading(false)
    })
  }

  useEffect(() => {
  }, [setUrls])

  return (
    <Screen backgroundColor="#d7d9db">
       {url && <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <MdClose />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        Your link : <a href={`http://localhost:5000/${url}`}>http://localhost:5000/{url}</a>
        </Alert>
      </Collapse>}

      {error && <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <MdClose />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        {error}
        </Alert>
      </Collapse>}

     <Container flex={1} alignItems={'center'} justifyContent={"center"} margin={"20px 0"} padding={'0 20px'}>
     <Paper elevation={4} style={paperStyle}>
       <Typography variant="h6" textAlign='center' gutterBottom>URL Shortener</Typography>
       <form onSubmit={postUrl}>
       <TextField
         id="fullUrl"
         label="URL"
         value={fullUrlInput}
         onChange={handleChange}
         fullWidth
       />
       <Container margin={"20px 0 0 0"}>
       <Button disabled={loading} type="submit"variant="contained" color="primary">
         Submit
       </Button>
       </Container>
       </form>
     </Paper>
      {/* Uncomment if you wanna display latests urls */}
      {/* <TableContainer component={Paper} style={{maxWidth: '800px'}}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell align="center">Clicks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {urls && urls.map((url) => {
              return(
                <TableRow key={url.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell><a href={url.full}>{url.full}</a></TableCell>
                <TableCell><a href={`http://localhost:5000/${url.short}`}>{url.short}</a></TableCell>
                <TableCell align="center">{url.clicks}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer> */}
     </Container>

    </Screen>
  );
}

export default App;
