import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { toggleTodoStatus } from '../../redux/actions';
import todoListSlice from '../TodoList/todoSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry , completed,id}) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();


  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };
  // const check = useSelector((state) => state.todoList);
  // console.log('check he', check);
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
