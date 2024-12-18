import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { searchTextSelector, todoListSelector, todosRemainingSelector } from '../../redux/selectors';
export default function TodoList() {

  const [todoName, setTodoName] = useState();
  const [priority, setPriority] = useState();
  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector)
  const priorities = useSelector((state) => state.filters.priorities);
  console.log("priorities", priorities);
  const dispatch = useDispatch();
  // console.log('todo list', todoList);

  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id:uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
     }));
    setTodoName('');

  }
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
    
  }
  const handlePriorityChange = (value) => {
    setPriority(value)
  };
  console.log('check ', todoList);

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo, index) => (
          <Todo id={ todo.id} key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed } />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
