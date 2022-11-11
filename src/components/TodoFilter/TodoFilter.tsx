import { FilterType } from '../../types/FilterType';

type Props = {
  query: string
  setQuery: (input: string) => void
  filterType: FilterType
  setFilterType: (value: FilterType) => void
};

export const TodoFilter: React.FC<Props> = ({
  query,
  setQuery,
  filterType,
  setFilterType,
}) => {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case FilterType.Active:
        setFilterType(FilterType.Active);
        break;

      case FilterType.Completed:
        setFilterType(FilterType.Completed);
        break;

      default:
        setFilterType(FilterType.All);
        break;
    }
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filterType}
            onChange={handleSelection}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query && (
            <button
              aria-label="Delete"
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          )}
        </span>
      </p>
    </form>
  );
};