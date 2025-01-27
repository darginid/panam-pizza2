import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById, addItem } from '../../redux/slices/cartSlice';

type PizzaBlock = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
};

const PizzaBlock: React.FC<PizzaBlock> = ({id, title, price, imageUrl, types, sizes}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const typeNames = ["тонкое", "традиционное"];
 
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    }
    dispatch(addItem(item))
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h2 className="pizza-block__title ">
        <span>{title}</span>
      </h2>
      <div className="pizza-block__selector">
        <ul className="pizza-block__types">
          {types?.map((type, i) => (
            <li key={i} onClick={() => setActiveType(i)} className={activeType === i ? "pizza-block__item active" : "pizza-block__item"}>
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className="pizza-block__sizes">
          {sizes.map((sizes, i) => (
            <li key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? "pizza-block__item active" : "pizza-block__item"} >
              {sizes} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div onClick={onClickAdd} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;