import React, { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bulma-components';

const SearchBar = (props) => {

  const [query, setQuery] = useState("");

  const Search =(e) => {
    if(e.key === 'Enter') {
      props.fetchSearch(query);
      setQuery("");
    }
  }

  return (
    <Fragment>
      <Form.Field onKeyDown={Search}>
        <Form.Control iconRight>
          <Form.Input placeholder='Albuns, artistas ou musicas' value={query} onChange={e => setQuery(e.target.value)} />
        </Form.Control>
      </Form.Field>
    </Fragment>
  );
}
export default SearchBar;
