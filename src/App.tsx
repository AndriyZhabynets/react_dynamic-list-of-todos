import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { getTodos } from './api';
import { Todo } from './types/Todo';
import { FilterType } from './types/FilterType';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isTodosLoaded, setIsTodosLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState(FilterType.All);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const getTodosFromServer = async () => {
    const todosFromServer = await getTodos();

    setTodos(todosFromServer);
    setIsTodosLoaded(true);
  };

  useEffect(() => {
    getTodosFromServer();
  }, []);

  const filterTodos = () => {
    const todosMatchedQuery = todos.filter(({ title }) => {
      const titleToLowerCase = title.toLowerCase();
      const queryToLowerCase = query.toLowerCase();

      return titleToLowerCase.includes(queryToLowerCase);
    });

    return todosMatchedQuery.filter(todo => {
      switch (filterType) {
        case FilterType.Active:
          return !todo.completed;

        case FilterType.Completed:
          return todo.completed;

        default:
          return todo;
      }
    });
  };

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                query={query}
                setQuery={setQuery}
                filterType={filterType}
                setFilterType={setFilterType}
              />
            </div>

            <div className="block">
              {isTodosLoaded ? (
                <TodoList
                  todos={filterTodos()}
                  onSelect={setSelectedTodo}
                  selectedTodo={selectedTodo}
                />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedTodo && (
        <TodoModal
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </>
  );
};
