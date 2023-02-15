# React Todo List

## Setup files

1. install pnpm globally if required (npm install -g pnpm)
2. install vite + react file (pnpm create vite react-todolist)
3. install pnpm (pnpm i)
4. run app (pnpm run dev)

## Creating Form

1. create a form component file
2. include basic form requirements:
<form>
    <div>
        <input />
        <label></label>
    </div>
    <button></button>
</form>

## adding useState to form

1. add use state for the form (eg. to set task)
2. create a variable to handle the submission
   - note adding the onSubmit to the form tag rather than button tag allows you to submit through any way including on button click or keyboard press

## passing down props

1. create a function to "addTask" in the parent component
   ```
    const addTask = (task) => {
    console.log(task);
   };
   ```
2. give access to the form by adding the task to its tag (ie. passing props)
3. in the form component, pass {addTask} in the form variable
4. add the prop as an object under form submission function

## display submission in the form

1. create a useState to add tasks

   ```
    const [tasks, setTasks] = useState([]);
   ```

2. set the prevState to the tasks

   ```
   const addTask = (task) => {
   setTasks((prevState) => [...prevState, task]);
   };
   ```

3. create a tasklist component to display the state
4. pass down the tasks props into the tasklist
5. loop over the task lists

## adding newer tasks above

1. note by default, new entries will be added towards the bottom of the list
2. adding .sort() before the map in the looping will sort the tasks from top to bottom

## adding the checkbox

1. create a list tag in the tasklist component
2. add list requirements
3. create a function for the checkbox
4. pass down the function to the onChange property
5. create buttons for the list

## adding delete functionality to buttons

1. create a delete function in app component
2. prop drilling: drill delete prop into task list
3. drill delete prop into onClick function in task item with unique identifier task.id
4. movement of drilling goes from onClick (in taskItem) -> parent taskList -> parent App -> delete function -> activates function

## updating checked status

1. create a toggle checkbox function in app component
2. ensure function maps to boolean of task to ensure whether or not box is checked
3. perform propdrilling (similar to above for delete) to task item
4. apply to handle change function

## editing tasks

## creating custom hoods
