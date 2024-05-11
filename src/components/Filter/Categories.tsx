import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const arrPizza = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  
  return (
    <div className="categories">
      <ul className="categories__list">
        {arrPizza.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "categories__item active" : "categories__item"}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
