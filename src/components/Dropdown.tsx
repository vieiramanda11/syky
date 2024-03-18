import React from 'react';

interface DropdownProps {
  selected: string | null;
  handleFilterChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    filterName: string
  ) => void;
  filterOptions: any[];
  type: string;
  title: string;
}

const Dropdown = ({
  selected,
  handleFilterChange,
  filterOptions,
  type,
  title,
}: DropdownProps) => {
  return (
    <div className="mb-4">
      <select
        id={type}
        name={type}
        value={selected || ''}
        onChange={(event) => handleFilterChange(event, type)}
        className="mt-1 block w-[250px] p-2 border border-primary-green rounded-md focus:ring focus:ring-primary-green focus:border-primary-green"
      >
        <option value="" disabled>
          {`Select a ${title}`}
        </option>
        {filterOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
