import type { ReactNode } from 'react';
import styles from './Table.module.css';

interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: unknown, row: T) => ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  ariaLabel: string;
  highlightFirst?: boolean;
}

export function Table<T extends object>({
  columns,
  data,
  caption,
  ariaLabel,
  highlightFirst = false,
}: TableProps<T>) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table} role="table" aria-label={ariaLabel}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={highlightFirst && rowIndex === 0 ? styles.highlighted : ''}
            >
              {columns.map((col) => (
                <td key={String(col.key)}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
