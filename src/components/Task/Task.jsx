import s from './Task.module.css';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

//11 Значение передаем на рендер
export function Task({ task, onComplete, onDelete }) {
  return (
    <div className={s.task}>
      <button className={s.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? s.textCompleted : ''}>{task.title}</p>
      <button className={s.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={24} />
      </button>
    </div>
  );
}
