
import { useDrag } from 'react-dnd';

const TodoCard = ({ id, title, description, date, priority, status, index, moveCard }) => {
  const [, drag] = useDrag({
    type: 'CARD',
    item: { id, status, index },
  });

  return (
    <div ref={drag} className="card">
      <div className="card-header">
    
      </div>
      
      
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Priority: {priority}</p>
        <p>Status: {status}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-primary">Delete</button>
    </div>
  </div>
</div>


    </div>
  );
};

export default TodoCard;
