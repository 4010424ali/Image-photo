import React, { useState } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import Photo from './Photo';

const useStyle = makeStyles({
  top: {
    paddingTop: '5rem'
  },
  select: {
    marginTop: '1rem'
  }
});

const Search = () => {
  const [value, setValue] = useState({
    image: '',
    list: 10
  });

  const [data, setData] = useState([]);

  const handleChange = async e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
    const res = await axios.get(`https://pixabay.com/api/?key=13319688-7c19d28c4e2ccce5091ea4c16&q=${
      value.image
    }&image_type=photo&safesearch=true&per_page=${value.list}
    `);

    if (value.image.trim() === '') {
      setData([]);
    } else {
      setData(res.data.hits);
    }
  };

  const classes = useStyle();
  return (
    <Container>
      <TextField
        className={classes.top}
        name="image"
        onChange={handleChange}
        value={value.image}
        placeholder="Searxh Image"
        fullWidth
      />
      <Select
        className={classes.select}
        value={value.list}
        onChange={handleChange}
        inputProps={{
          name: 'list',
          id: 'age-simple'
        }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
      {data && <Photo data={data} />}
    </Container>
  );
};

export default Search;
