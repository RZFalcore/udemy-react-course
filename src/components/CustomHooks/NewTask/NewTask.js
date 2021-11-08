import React from "react";
import useFetchTasks from "../hooks/useFetchTasks";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [isLoading, error, tasks, fetchTasks] = useFetchTasks();

  return (
    <Section>
      <TaskForm onEnterTask={fetchTasks} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
