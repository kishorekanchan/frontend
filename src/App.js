import React, {useEffect}from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function App() {
  // const currencylist =  useSelector((state) => state.currencylist);

  let currencylist = useSelector(state => {
    console.log('State: ', state.initialState.currencylist);
    return state;
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const [from, setFrom] = React.useState('');
  const [fromValue, setFromValue] = React.useState('');
  const [to, setTo] = React.useState('');
  const [toValue, setToValue] = React.useState('');
  // let [currencylist, setCurrencyList] = React.useState(["name"])
  let [rates, setRates] = React.useState({})

   rates = useSelector((state) => state.rates);



  const handleChangeFrom = (event) => {
    setFrom(event.target.value)
  };
  const handleChangeTo = (event) => {
    setTo(event.target.value)
  };

  const handleChangeValueFrom = (event)=>{
    setFromValue(event.target.value);
    if(from==="USD" && to==="INR"){
      let some = 76*1.67;
      setToValue(some);

    }
  }

  const handleChangeValueTo = (event)=>{
    setToValue(event.target.value)
    if(from==="USD" && to==="INR"){
      let some = 76*1.67;
      setFromValue(some);

    }
  }

  useEffect(()=>{
  }) 
  
  useEffect(()=>{
    dispatch({ type: "CURRENCY_LIST"});
    dispatch({ type: "GET_CURRENCY_LIST"});
    console.log("state",from,to)
  },[])  


  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        <div className="currencies">
         <h1>currency Converter</h1> 
        </div>
      </div>
      <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={from}
          onChange={handleChangeFrom}
          label="From"
        >
          {currencylist.map((item)=>{
            return <MenuItem value={item}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">To</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={to}
          onChange={handleChangeTo}
          label="To"
        >
           {currencylist.map((item)=>{
            return <MenuItem value={item}>{item}</MenuItem>
          })}
        </Select>
      </FormControl>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="value" variant="outlined" value={fromValue} onChange={handleChangeValueFrom}/>
          <TextField id="outlined-basic" label="value" variant="outlined" value={toValue} onChange={handleChangeValueTo}/>
      </form>
    </div>
    </div>
    <Button variant="contained" color="secondary">
        Update
      </Button>
      </header>
      </div>

  );
}