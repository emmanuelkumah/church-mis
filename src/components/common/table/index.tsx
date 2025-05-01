import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableRowProps,
  TableCellProps,
} from "../../../types/types";

export const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={`min-w-full  ${className}`}>{children}</table>;
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
export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={className}>{children}</tr>;
};
export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  isHeader = false,
}) => {
  const CellTag = isHeader ? "th" : "td";
  return <CellTag className={` ${className}`}>{children}</CellTag>;
};
