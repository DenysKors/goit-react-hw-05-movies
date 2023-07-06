import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button, Input } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const inputChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const formSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return alert('Enter request to search');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={formSubmit}>
      <Input
        type="text"
        autocomplete="off"
        value={query}
        placeholder="Find movie by title"
        onChange={inputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
