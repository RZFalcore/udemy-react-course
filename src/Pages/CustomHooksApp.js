import React, { useState, useEffect } from "react";
import DecCounter from "../components/CustomHooks/DecCounter";
import IncCounter from "../components/CustomHooks/IncCounter";
import Tasks from "../components/CustomHooks/Tasks/Tasks";
import NewTask from "../components/CustomHooks/NewTask/NewTask";
import useFetchTasks from "../components/CustomHooks/hooks/useFetchTasks";

const CustomHooksApp = () => {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const [isLoading, error, sendRequest] = useFetchTasks(
    {
      url: "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    },
    transformTasks
  );

  useEffect(() => {
    sendRequest();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <>
      <IncCounter />
      <DecCounter />
      <React.Fragment>
        {/* <NewTask /> */}
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={sendRequest}
        />
      </React.Fragment>
    </>
  );
};

export default CustomHooksApp;
