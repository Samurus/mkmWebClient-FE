import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StockService from "../services/ApiService";
import StockComponent from "./StockComponent";
import Cookies from 'universal-cookie';


export default function SearchComponent() {
    const cookies = new Cookies();
    const classes = useStyles();
    const [expansions, setExpansions] = useState(["offline1","offline2"]);
    const [selectedExpansion, setSelectedExpansion] = useState(expansions[0].value);

    useEffect(() => {
        StockService.getStockExpansionNames().then((res) =>
            setExpansions(res.data));
        setSelectedExpansion(cookies.get('expansion'));
    }, [])

    const handleChange = (event) => {
        cookies.set('expansion', event.target.value);
        setSelectedExpansion(event.target.value);
        window.location.reload(true);
    };

    return (
        <div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Expansions</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    inputProps={{id: 'filled-age-native-simple'}}
                >
                    <option aria-label="none" value=""/>
                    <option aria-label="all" value="all">all</option>
                    {expansions.map((item) =>
                        <option key={item} value={item}>{item}</option>)}
                </Select>
            </FormControl>
            <StockComponent selectedExpansion={selectedExpansion}/>
        </div>

    );
}


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(3),
    },
}));