import React from "react";
import { useCallback, useRef, useState } from "react";

import { useDispatch } from 'react-redux';
import { setSearchValue } from "../redux/slices/filterSlice.js";

// @ts-ignore
import debounce from 'lodash.debounce';
import searchImg from "../assets/img/search.png";
import "../scss/components/_search.scss";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [ value, setValue ] = useState(''); 

  const inputRef = useRef<HTMLInputElement>(null);


  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 350), 
    []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className="room">
      <img className="searchSvg" src={searchImg} alt="search" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        type="text"
        placeholder="Введите запрос..."
      />
      {value && (
        <svg className="crossSvg" onClick={onClickClear} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z" fill="black"/>
        </svg>
      )}
    </div>
  );
}

export default Search;
