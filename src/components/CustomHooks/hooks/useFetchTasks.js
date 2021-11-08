import { useState } from "react";

const useFetchTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      let response;
      if (taskText) {
        response = await fetch(
          "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
          {
            method: "POST",
            body: JSON.stringify({ text: taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        response = await fetch(
          "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        );
      }

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      if (taskText) {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        // props.onAddTask(createdTask);
        setTasks((prevTasks) => prevTasks.concat(createdTask));
      } else {
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setTasks(loadedTasks);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return [isLoading, error, tasks, fetchTasks];
};

export default useFetchTasks;
