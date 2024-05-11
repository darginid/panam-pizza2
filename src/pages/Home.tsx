import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, selectSort, selectSearch, setCategoryId } from "../redux/slices/filterSlice.js";
import { selectPizzaData, fetchPizzas } from "../redux/slices/pizzaSlice.js";

import Categories from "../components/Filter/Categories";
import Sort from "../components/Filter/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaError from "../components/PizzaBlock/PizzaError";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(selectCategory);
  const sortType = useSelector(selectSort);
  const searchValue = useSelector(selectSearch);
  const { items, status } = useSelector(selectPizzaData);

  const onClickCategory = (index: number) => {
    dispatch(setCategoryId(index));   
  };

  const getPizzas = async () => {
    const sortBy = sortType.sort;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&title=${searchValue}` : '';

  dispatch(
    // @ts-ignore
    fetchPizzas({
    sortBy,
    category,
    search
  })); 
}

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue]);

  const pizzas = items.map((obj: any) => { return <PizzaBlock searchValue={searchValue} key={obj.id} {...obj} /> });
  const skeletons = [...new Array(6)].map((items, i: any) => <Skeleton key={i} />);
  
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Пиццы</h2>
      {
        status === 'error' 
        ? <PizzaError /> 
        : <div className="content__items">{ status === 'loading' ? skeletons : pizzas }</div>
      }
    </>
  );
}

export default Home;  

