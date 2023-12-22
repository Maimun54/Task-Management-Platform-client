import { useState, useEffect, useContext } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AuthContext } from "./Provider/AuthProvide";
import TodoBox from "./Pages/AddTask/TodoBox";

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/addTask");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const apiCards = data.map((item) => ({
          id: item._id, // Assuming _id is a unique identifier
          title: item.title,
          description: item.description,
          date: item.date,
          email: item.email,
          priority: item.priority,
          status: "todo",
        }));

        setCards(apiCards);
        setError(null); // Reset error state if successful
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again."); // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const moveCard = (cardId, newStatus) => {
    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, status: newStatus } : card
    );
    setCards(updatedCards);
  };

  // Updated filterCardsByStatus function to include user email
  const filterCardsByStatusAndUser = (status) =>
    cards.filter((card) => card.status === status && card.email === user.email);

  return (
    <DndProvider backend={HTML5Backend}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="App grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
          <TodoBox
            title="To-do"
            status="todo"
            cards={filterCardsByStatusAndUser("todo")}
            moveCard={moveCard}
          />
          <TodoBox
            title="Ongoing"
            status="ongoing"
            cards={filterCardsByStatusAndUser("ongoing")}
            moveCard={moveCard}
          />
          <TodoBox
            title="Completed"
            status="completed"
            cards={filterCardsByStatusAndUser("completed")}
            moveCard={moveCard}
          />
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </DndProvider>
  );
};

export default App;