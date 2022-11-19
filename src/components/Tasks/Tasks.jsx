import { Task } from '../Task/Task.jsx';
import s from './Tasks.module.css';

//10 Перебираем полученный массив и каждый обьект из него передаем в Task
// Также назначаем уникальный id в key
export function Tasks({ tasks, onComplete, onDelete }) {
  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={s.tasks}>
      <div className={s.tasks__header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksAmount}</span>
        </div>
        <div>
          <p className={s.textPurple}>Completed</p>
          <span>
            {completedTasks} of {tasksAmount}
          </span>
        </div>
      </div>

      <div className={s.list}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
