import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout, { siteTitle } from "@/components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Script from "next/script";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AddTodoContainer from "@/components/AddTodoContainer";
import ContainerInputAndLabel from "@/components/ContainerInputAndLabel";
import Label from "@/components/Label";
import FilterContainer from "@/components/FilterContainer";
import ViewTodosContainer from "@/components/ViewTodosContainer";
import NameAndDescriptionContainer from "@/components/NameAndDescriptionContainer";
import NameTodo from "@/components/NameTodo";
import DescriptionTodo from "@/components/DescriptionTodo";
import ButtonTodoAction from "@/components/ButtonTodoAction";
import TodoContainer from "@/components/TodoContainer";
import ProgressBar from "@/components/ProgressBar";
import { CircularProgress } from "@mui/material";
// import AbcIcon from '@mui/icons-material/Abc';
// import 'boxicons';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nombreTodo, setNombreTodo] = useState("");
  // const [descripcionTodo, setdescripcionTodo] = useState("");
  // const [arrayTodos, setArrayTodos] = useState([]);
  const [arrayTodos, setArrayTodos] = useState(null);
      const [filter, setFilter] = useState(false);

  useEffect(() => {
    const ls = localStorage.getItem('todos')
    const parsedTodos = ls ? JSON.parse(ls) : [];
    setArrayTodos(parsedTodos);
    console.log('Me monte')
    // if(ls && ls.length > 0){
    // setArrayTodos(JSON.parse(ls))
    // } else {
    //   setArrayTodos([])
    // }
  }, []);

  useEffect(() => {
    console.log(localStorage.getItem('todos'))
    console.log(arrayTodos)
    if(!arrayTodos){
      return
    }
    // console.log(arrayTodos)
    localStorage.setItem('todos', JSON.stringify(arrayTodos))
  }, [arrayTodos])


  function handleInputChange(e) {
    e.target.name === "nombreTodo"
      ? setNombreTodo(e.target.value)
      : setdescripcionTodo(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setArrayTodos([
      ...arrayTodos,
      // { nombre: nombreTodo, descripcion: descripcionTodo, completed: false },
      { nombre: nombreTodo, completed: false },

    ]);
    setNombreTodo("");
    // setdescripcionTodo("");
  }

  function handleRemoveOnclick(e) {
    e.preventDefault();
    // const padre = e.currentTarget.parentElement.parentElement;
    const indiceTodo = parseInt(e.currentTarget.dataset.indice);
    const arraysSinBorrar = arrayTodos.filter(
      (todo, index) => index !== indiceTodo
    );
    setArrayTodos(arraysSinBorrar);
  }

  function handleCompletedTaskOnClick(e) {
    e.preventDefault();
    const indiceTodo = parseInt(e.currentTarget.dataset.indice);
    const copiaArray = arrayTodos.slice();
    const arrayModificado = copiaArray.map((todo, index) => {
      return index === indiceTodo ? { ...todo, completed: true } : todo;
    });
    setArrayTodos(arrayModificado);
  }

  function handleUnDoneOnClick(e) {
    e.preventDefault();
    const indiceTodo = parseInt(e.currentTarget.dataset.indice);
    const copiaArray = arrayTodos.slice();
    const arrayModificado = copiaArray.map((todo, index) => {
      return index === indiceTodo ? { ...todo, completed: false } : todo;
    });
    setArrayTodos(arrayModificado);
  }

  function handleOnClickDeleteAll (e) {
    e.preventDefault();
    setArrayTodos([]);
  }

  function handleFilterClick (e) {
    e.preventDefault();
    filter == false ?
    setFilter(true) 
    : 
    setFilter(false)
}

  // console.log(arrayTodos)
  return (
    <Layout home>
      <Head>
        <title>TODO APP</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ProgressBar loading={!arrayTodos ? true : false} quantity={arrayTodos && arrayTodos.length} amountCompleted={arrayTodos && arrayTodos.reduce((count, item) => count + (item.completed ? 1 : 0),0)}></ProgressBar>
        <AddTodoContainer
          className="d-flex flex-column align-items-center w-100 mt-5"
          onSubmit={handleOnSubmit}
        >
          <ContainerInputAndLabel className="d-flex flex-column w-50">
            {/* <Label htmlFor="NombreTodo" className="text-light fw-bold h4 mb-2">Agregar Todo</Label> */}
            <Input
              type="text"
              id="NombreTodo"
              name="nombreTodo"
              className="w-100 m-lg-auto"
              value={nombreTodo}
              onChange={handleInputChange}
            />
          </ContainerInputAndLabel>
          {/* <ContainerInputAndLabel className="d-flex flex-column">
            <Label htmlFor="DescripcionTodo" className="text-light">Descripción</Label>
            <Input
              type="text"
              id="DescripcionTodo"
              name="DescripcionTodo"
              className=""
              value={descripcionTodo}
              onChange={handleInputChange}
            />
          </ContainerInputAndLabel> */}
          <Button type="submit" className="btn mt-4 btn-add text-light">
            Agregar TODO
          </Button>
        </AddTodoContainer>

        <ViewTodosContainer className="mt-5 pb-5 pt-3 w-lg-75">
        <FilterContainer filter={filter} onClick={handleFilterClick}></FilterContainer>
          {!arrayTodos && <CircularProgress className="text-center fs-5"></CircularProgress>}
          {arrayTodos && arrayTodos.length === 0 ? (
            <h2 className="text-center pt-3 fw-bold text-light">
              No escribiste niguna tarea aún...
            </h2>
          ) : (
            arrayTodos &&
            arrayTodos.filter((todo) => filter ? todo.completed == false : todo)
            .map((todo, index) => (
              <TodoContainer className="mt-3 d-flex align-items-center justify-content-between" key={index}>
                {
                  todo.completed === false
                  ? 
                  <ButtonTodoAction
                    dataIndice={index}
                    className="rounded d-flex align-items-center justify-content-center me-3 border border-black"
                    onClick={handleCompletedTaskOnClick}
                  >
                  </ButtonTodoAction>
                :
                  <ButtonTodoAction
                    dataIndice={index}
                    className="rounded d-flex align-items-center justify-content-center me-3"
                    onClick={handleUnDoneOnClick}
                    done
                  >
                    {/* <box-icon name="x" size="sm" color="red"></box-icon> */}
                    <box-icon name="check" size="sm" color="white"></box-icon>
                  </ButtonTodoAction>
                }
                <NameAndDescriptionContainer
                  className="pt-1 pb-1 m-0 d-flex justify-content-between"
                  key={index}
                >
                  <div>
                    <NameTodo
                      className={` ${"ms-2 mb-0 fw-bold h5"} + ${
                        todo.completed === true
                          ? "text-decoration-line-through"
                          : ""
                      }`}
                    >
                      {todo.nombre}
                    </NameTodo>
                    {/* <DescriptionTodo className="ms-2 m-0">
                      {todo.descripcion}
                    </DescriptionTodo> */}
                  </div>
                    <ButtonTodoAction
                      dataIndice={index}
                      className="rounded d-flex align-items-center justify-content-center me-2"
                      onClick={handleRemoveOnclick}
                    >
                      <box-icon name="x" size="sm" color="red"></box-icon>
                    </ButtonTodoAction>
                </NameAndDescriptionContainer>
              </TodoContainer>
            ))
          )}
          {
            arrayTodos && arrayTodos.length !== 0 && 
            (
              <div className="d-flex justify-content-center">
                <Button type="submit" className="bg-danger btn mt-5 btn-danger text-light" onClick={handleOnClickDeleteAll}>Eliminar Todos</Button>
              </div>
            )
          }
        </ViewTodosContainer>
      </section>
      <Script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></Script>
      {/* <Script src="../../node_modules/boxicons/dist/boxicons.js"></Script> */}
    </Layout>
  );
}
