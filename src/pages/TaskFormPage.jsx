import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs"; // Import dayjs
import utc from "dayjs/plugin/utc"; // Import the utc plugin

dayjs.extend(utc); // Extend dayjs with the utc plugin


export default function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", task.date);
      }
    }
    loadTask();
  });

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id,data
      // updateTask(params.id,{
      //   ...data,
      //   date: dayjs.utc(data.date).format()
      // }
      );
    } else {
      createTask(data);
      // createTask({
      //   ...data,
      //   date: dayjs.utc(data.date).format()
      // });
    }
    navigate("/tasks");
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md"
          autoFocus
        />
        <label htmlFor="description">Description</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md"
        ></textarea>
        <label htmlFor="description">Date</label>
        <input type="date" {...register("date")} 
        className="w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md"/>
        <button className="bg-indigo-500 px-4 py-1 rounded-sm">Save</button>
      </form>
    </div>
  );
}
