import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'ToDo-Data';

function App() {
  //8 хук в массиве tasks сохраняет все обьекты
  const [tasks, setTasks] = useState([]);

  //LocalStorage
  function localSave(data) {
    setTasks(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }
  function localGet() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) setTasks(JSON.parse(data));
  }

  useEffect(() => {
    localGet();
  }, []);

  //5 Функция вызывает новый хук и значение идет туда
  function addTask(taskTitle) {
    localSave([
      //6 ...tasks это предыдущие обьекты,
      //которые вновь записываются в новый массив,иначе предыдущие обьекты бы просто перезаписывались
      ...tasks,
      //7 Это уже новый обьект который будет добавлен в массив
      // Значение уйдет в него
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskID) {
    const newTask = tasks.filter(task => task.id !== taskID);
    localSave(newTask);
  }

  function toggleCompletedTasks(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    localSave(newTasks);
  }

  return (
    //4 Функция addTask принимает значение из Header как аргумент
    //9 массив tasks передается в Tasks
    <>
      <Header onAddTask={addTask} />

      <Tasks
        tasks={tasks}
        onComplete={toggleCompletedTasks}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
