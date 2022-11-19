import todoLogo from './../../assets/todoLogo.svg';
import s from './Header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ onAddTask }) {
  //2 хук, который изменяет состояние значения и передает его в title
  const [title, setTitle] = useState('');

  //4 При нажатии на кнопку, State значение уходит в App
  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(title);
    // очищаем инпут
    setTitle('');
  }

  //1 Слушатель следит за изменением значения и передает значение в хук
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <header className={s.header}>
      <a href='#'>
        <img src={todoLogo} alt='Logo' />
      </a>

      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type='text'
          placeholder='Add a new task'
          //3 State из хука постоянно меняет value
          value={title}
          onChange={onChangeTitle}
        />
        <button className={s.button}>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
