import { useState, useCallback } from "react";

const useFetchTasks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);

  const sendRequest = useCallback(async (requestConfig, dataReceiver) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      dataReceiver(data);

      // if (taskText) {
      //   const generatedId = data.name; // firebase-specific => "name" contains generated id
      //   const createdTask = { id: generatedId, text: taskText };
      //   // props.onAddTask(createdTask);
      //   setTasks((prevTasks) => prevTasks.concat(createdTask));
      // } else {
      // const loadedTasks = [];

      // for (const taskKey in data) {
      //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //   }

      //   setTasks(loadedTasks);
      // }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return [isLoading, error, sendRequest];
};

export default useFetchTasks;
