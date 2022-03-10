import React, { useEffect, useState } from "react";

const Main = ({
  chechkAll,
  list,
  selectedItem,
  setList,
  isCheckedList,
  setCheckedList,
}) => {
  const [checkedAll, setCheckedAll] = useState(false);

  const deleteJob = (i) => {
    list.splice(i, 1);
    localStorage.setItem("todoList", JSON.stringify([...list]));
    setList([...list]);
    isCheckedList.splice(i, 1);
    localStorage.setItem("todoCheckedList", JSON.stringify([...isCheckedList]));
    setCheckedList([...isCheckedList]);
  };
  useEffect(() => {
    setCheckedAll(false);
  }, [list]);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label
        onClick={() => {
          setCheckedAll(!checkedAll);
          return chechkAll(!checkedAll);
        }}
        htmlFor="toggle-all"
      >
        Mark all as complete
      </label>

      <ul className="todo-list">
        {list.map((job, i) => {
          if (selectedItem === 0)
            return (
              <li key={i} className={isCheckedList[i] ? "completed" : ""}>
                <div className="view">
                  <input
                    onChange={(e) => {
                      isCheckedList[i] = !isCheckedList[i];
                      localStorage.setItem(
                        "todoCheckedList",
                        JSON.stringify([...isCheckedList])
                      );
                      return setCheckedList([...isCheckedList]);
                    }}
                    className="toggle"
                    type="checkbox"
                    checked={isCheckedList[i]}
                  />
                  <label>{job}</label>
                  <button
                    onClick={() => deleteJob(i)}
                    className="destroy"
                  ></button>
                </div>
              </li>
            );
          else if (selectedItem === 1) {
            if (!isCheckedList[i])
              return (
                <li key={i}>
                  <div className="view">
                    <input
                      onChange={(e) => {
                        isCheckedList[i] = !isCheckedList[i];
                        localStorage.setItem(
                          "todoCheckedList",
                          JSON.stringify([...isCheckedList])
                        );
                        return setCheckedList([...isCheckedList]);
                      }}
                      className="toggle"
                      type="checkbox"
                      checked={isCheckedList[i]}
                    />
                    <label>{job}</label>
                    <button
                      onClick={() => deleteJob(i)}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              );
          } else if (isCheckedList[i])
            return (
              <li key={i}>
                <div className="view">
                  <input
                    onChange={(e) => {
                      isCheckedList[i] = !isCheckedList[i];
                      localStorage.setItem(
                        "todoCheckedList",
                        JSON.stringify([...isCheckedList])
                      );
                      return setCheckedList([...isCheckedList]);
                    }}
                    className="toggle"
                    type="checkbox"
                    checked={isCheckedList[i]}
                  />
                  <label>{job}</label>
                  <button
                    onClick={() => deleteJob(i)}
                    className="destroy"
                  ></button>
                </div>
              </li>
            );
        })}
      </ul>
    </section>
  );
};

export default Main;
