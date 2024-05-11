import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, clearItems } from "../../redux/slices/cartSlice";

import CardBlock from "./CartBlock";
import CartEmpty from "./CartEmpty";

type Item = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  count: number;
};

const Card: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onCLickClear = () => {
    if(window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearItems())
    }
  }

  if(!totalPrice) {
    return <CartEmpty />
  }

  return (
    <>
      <div className="content_top">
        <h2>Корзина</h2>
          <p onClick={onCLickClear} className="busket-clear">Очистить корзину</p>
      </div>
      {items.map((item: Item) => <CardBlock key={item.id} {...item}/>)}
      <div className="content_text">
        <div className="text_order">
          Всего пицц:
          <p className="piece">{totalCount} шт.</p>
        </div>
        <div className="text_order">
          Сумма заказа:
          <p className="sum">{totalPrice} р</p>
        </div>
      </div>
      <div className="content_btn">
      <Link to={"/"}>
        <div className="btnw btn_bg_none">
          <p>Вернуться назад</p>
        </div>
      </Link>
        <div className="btn_bg_org">
          <p>Оплатить сейчас</p>
        </div>
      </div>
    </>
  );
}

export default Card;
