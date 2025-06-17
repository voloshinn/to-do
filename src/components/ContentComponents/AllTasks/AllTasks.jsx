import { useState } from "react";

import styles from "../AllTasks/AllTasks.module.css";
import ModalCreateTask from "../ModalCreateTask/ModalCreateTask";

class Task {
  constructor(
    title,
    description,
    weight,
    createdDate = new Date(),
    completed = false,
    completedDate = null,
    timeSpent = null,
    empressions = ""
  ) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.weight = weight;
    this.createdDate = createdDate;
    this.completed = completed;
    this.completedDate = completedDate;
    this.timeSpent = timeSpent;
    this.empressions = empressions;
  }

  getFormattedDate() {
    const day = String(this.createdDate.getDate()).padStart(2, "0");
    const month = String(this.createdDate.getMonth() + 1).padStart(2, "0");
    const year = this.createdDate.getFullYear();
    return `${day}.${month}.${year}`;
  }

  getFormattedTime() {
    const hours = String(this.createdDate.getHours()).padStart(2, "0");
    const minutes = String(this.createdDate.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}

export default function AllTasks() {
  const [tasksList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const handleOpenCreateWindow = () => {
    setIsModalCreateOpen(true);
  };

  const handleCloseCreateWindow = () => {
    setIsModalCreateOpen(false);
  };

  const handleCreateTask = (taskData) => {
    const newTask = new Task(
      taskData.title,
      taskData.description,
      taskData.weight,
      new Date(),
      false,
      null,
      null,
      ""
    );
    setTaskList([newTask, ...tasksList]);
  };

  return (
    <div className={styles.fullHeightContainer}>
      <div className={styles.tasksContainer}>
        {/* {createWindowIsVisible && <ModalCreateTask />} */}
        <ModalCreateTask
          isOpen={isModalCreateOpen}
          onClose={handleCloseCreateWindow}
        />
        <div className={styles.leftPanel}>
          <button
            className={styles.createButton}
            onClick={handleOpenCreateWindow}
          >
            Создать задачу
          </button>

          <div>сортировка:</div>

          <div className={styles.scrollableList}>
            {tasksList.map((task) => (
              <div
                key={task.id}
                className={styles.taskItem}
                onClick={() => handleTaskClick(task)}
              >
                <h3>{task.title}</h3>
                <div className={styles.taskMeta}>
                  <span>Приоритет: {task.weight}</span>
                  <span>{task.getFormattedDate()}</span>
                  <span>{task.getFormattedTime()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.rightPanel}>
          {selectedTask ? (
            <div className={styles.taskDetails}>
              <h2>{selectedTask.title}</h2>
              <p className={styles.description}>{selectedTask.description}</p>

              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Создано:</span>
                  <span>
                    {selectedTask.getFormattedDate()} в{" "}
                    {selectedTask.getFormattedTime()}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Статус:</span>
                  <span>
                    {selectedTask.completed ? "✓ Завершена" : "✗ В процессе"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.noTaskSelected}>
              Выберите задачу для просмотра деталей
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
