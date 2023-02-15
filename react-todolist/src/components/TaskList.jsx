// component import
import TaskItem from "./TaskItem";

// styles
import styles from "./Tasklist.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {/* looping over tasks - ensure you give a key value*/}
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  );
};

export default TaskList;
