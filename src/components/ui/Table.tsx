import React from 'react';

export interface Column<T> {
  key: string;
  title: string;
  render?: (item: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  headerClassName?: string;
  width?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  className?: string;
}

const Table = <T,>({ data, columns, onRowClick, className = '' }: TableProps<T>) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
            {columns.map((col) => (
              <th 
                key={col.key}
                style={{ width: col.width }}
                className={`py-4 px-2 text-xs font-bold text-gray-400 uppercase tracking-wider ${col.headerClassName || ''} text-${col.align || 'left'}`}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {data.map((item, rowIndex) => (
            <tr 
              key={rowIndex}
              onClick={() => onRowClick?.(item)}
              className={`transition-colors ${onRowClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50' : ''}`}
            >
              {columns.map((col) => (
                <td 
                  key={`${rowIndex}-${col.key}`}
                  className={`py-4 px-2 text-${col.align || 'left'} ${col.className || ''}`}
                >
                  {col.render ? col.render(item, rowIndex) : (item as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;