import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
} from "../../../types/types";

export const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={className}>{children}</table>;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  className,
}) => {
  return <thead className={className}>{children}</thead>;
};
export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
}) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  isHeader = false,
}) => {
  const CellTag = isHeader ? "th" : "tr";
  return <CellTag className={className}>{children}</CellTag>;
};
export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <td className={className}>{children}</td>;
};
