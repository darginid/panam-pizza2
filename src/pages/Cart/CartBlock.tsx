import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem} from "../../redux/slices/cartSlice";

type CardBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
};

const CardBlock: React.FC<CardBlockProps> = ({ id, title, price, imageUrl, type, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({id}));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id))
  };

  const onClickRemove = () => {
    dispatch(removeItem(id))
  };
  
  return (
    <>
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </div>
        <div className="cart__item-info">
          <h3>{title}</h3>
          <p>{type}, 26 см.</p>
        </div>
        <div className="cart__item-count">
          <div onClick={onClickMinus} className="button button--outline button--circle cart__item-count-minus">
            -
          </div>
          <b>{count}</b>
          <div onClick={onClickPlus} className="button button--outline button--circle cart__item-count-plus">
            +
          </div>
        </div>
        <div className="cart__item-price">
          <b>{price * count} ₽</b>
        </div>
        <div onClick={onClickRemove} className="cart__item-remove">
          <div className="button button--outline button--circle">
          &#215;
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBlock;
