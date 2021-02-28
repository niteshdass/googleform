import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Form = ({ data }) => {
  console.log("data", data);
  const classes = useStyles();
  return (
    <>
      <h2>Form review</h2>
      <form>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                {data.map((inputField) => (
                  <>
                    {inputField.type === 1 ? (
                      <TextField
                        name="firstName"
                                        label={inputField.title}
                                        placeholder={inputField.placeholder}
                        variant="filled"
                        value=""
                      />
                    ) : (
                      ""
                    )}
                    {inputField.type === 2 ? (
                      <FormControl
                        style={{ marginLeft: "100px", width: "200px" }}
                      >
                        <InputLabel id="demo-simple-select-label">
                          {inputField.title}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={inputField.type}
                          name="type"
                                        >
                        <MenuItem value={3}>Select</MenuItem>
                          <MenuItem value={1}>{inputField.option}</MenuItem>
                          <MenuItem value={2}>{inputField.option1}</MenuItem>
                        
                        </Select>
                      </FormControl>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;
