import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_TASKS } from "../../../graphql/Queries";

import "./taskList.scss";

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <div>Loading...</div>;

  if (error) return error.message;

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {data.tasks.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
