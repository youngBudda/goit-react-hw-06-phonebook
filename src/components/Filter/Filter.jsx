import React from 'react';
import { FilterCont, Label, Input } from './Filter.styled';
import { getFilter, setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterCont>
      <Label>
        Find contacts by name or phone number
        <Input type="text" value={filter} onChange={onChange} />
      </Label>
    </FilterCont>
  );
}

export default Filter;
