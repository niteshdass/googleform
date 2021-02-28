import React,{useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const Create = () => {
    const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), title: '', placeholder: '', type: '',option:'',option1:'' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  console.log(inputFields)

  return (
    <Container>
      <h1>Add New Field</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map(inputField => (
          <div key={inputField.id}>
            <Card className={classes.root}>
              <CardActionArea>

                <CardContent>
                  <TextField
                    name="title"
                    label="Title"
                    variant="filled"
                    value={inputField.title}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  />
                  {inputField.type === 1 ? <TextField
                                            name="placeholder"
                                            
                    label="Placeholder"
                    variant="filled"
                    value={inputField.placeholder}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  /> : ''}

                  {
                    inputField.type === 2?<><TextField
                    name="option"
                    label="Option1"
                    variant="filled"
                    value={inputField.option}
                    onChange={event => handleChangeInput(inputField.id, event)}
                    />
                  <TextField
                    name="option1"
                    label="Option2"
                    variant="filled"
                    value={inputField.option1}
                    onChange={event => handleChangeInput(inputField.id, event)}
                      />
                  </>:''
                    }

                  <FormControl style={{ marginLeft: "100px", width: "200px" }}>

                    <InputLabel id="demo-simple-select-label">Field Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={inputField.type}
                      name="type"
                      onChange={event => handleChangeInput(inputField.id, event)}

                    >
                      <MenuItem value={1}>Input</MenuItem>
                      <MenuItem value={2}>Drpodrown</MenuItem>
                      <MenuItem value={3}>Select</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Button size="small" color="primary">
                  Learn More
                    </Button>
              </CardActions>
            </Card>





            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
                          onClick={handleSubmit}
                          to="/form"
                    >Send</Button>
                    
      </form>

              <div style={{marginTop:"150px"}}>
              <Form  data={ inputFields }/>       
</div>
     


    </Container>
  );
}

export default Create
