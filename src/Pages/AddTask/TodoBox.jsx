
import { useDrop } from 'react-dnd';
import TodoCard from './TodoCard';



const TodoBox = ({ title, priority, status, cards, moveCard }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => moveCard(item.id, status),
  });

  return (
    <div ref={drop} className="box">
      <h2>{title}</h2>
      {cards.map((card) => (
        <TodoCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default TodoBox;