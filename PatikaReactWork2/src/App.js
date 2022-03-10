import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";

const defaultList = ["Learn JavaScript", "Learn React", "Have a life!"];
const defaultCheckedList = [false, false, false];
function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || defaultList
  );
  const [isCheckedList, setIsCheckedList] = useState(
    JSON.parse(localStorage.getItem("todoCheckedList")) || defaultCheckedList
  );
  const [selectedItem, setSelectedItem] = useState(0);

  const configureLocalStorage = (arr1, arr2) => {
    localStorage.setItem("todoList", JSON.stringify(arr1));
    localStorage.setItem("todoCheckedList", JSON.stringify(arr2));
  };
  const chechkAll = (bool) => {
    isCheckedList.forEach((_, i) => (isCheckedList[i] = bool));
    console.log(isCheckedList);
    configureLocalStorage([...list], [...isCheckedList]);
    setIsCheckedList([...isCheckedList]);
  };

  const clearCompleted = () => {
    configureLocalStorage(
      [...list.filter((_, i) => !isCheckedList[i])],
      [...isCheckedList.filter((item) => !item)]
    );
    setList(list.filter((_, i) => !isCheckedList[i]));
    setIsCheckedList(isCheckedList.filter((item) => !item));
  };

  const addToList = (job) => {
    configureLocalStorage([...list, job], [...isCheckedList, false]);
    setList([...list, job]);
    setIsCheckedList([...isCheckedList, false]);
  };
  return (
    <>
      <section className="todoapp">
        <Header addToList={addToList} />
        <Main
          chechkAll={chechkAll}
          list={list}
          selectedItem={selectedItem}
          setList={setList}
          isCheckedList={isCheckedList}
          setCheckedList={setIsCheckedList}
        />
        <Footer
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          isCheckedList={isCheckedList}
          clearCompleted={clearCompleted}
        />
      </section>
      <Info />
    </>
  );
}

export default App;
