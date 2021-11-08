import React, { useEffect } from "react";
import DecCounter from "../components/CustomHooks/DecCounter";
import IncCounter from "../components/CustomHooks/IncCounter";
import Tasks from "../components/CustomHooks/Tasks/Tasks";
import NewTask from "../components/CustomHooks/NewTask/NewTask";
import useFetchTasks from "../components/CustomHooks/hooks/useFetchTasks";

const CustomHooksApp = () => {
  const [isLoading, error, tasks, fetchTasks] = useFetchTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  // const taskAddHandler = (task) => {
  //   setTasks((prevTasks) => prevTasks.concat(task));
  // };
  return (
    <>
      <IncCounter />
      <DecCounter />
      <React.Fragment>
        <NewTask />
        {/* <NewTask onAddTask={taskAddHandler} /> */}
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </React.Fragment>
    </>
  );
};

export default CustomHooksApp;
