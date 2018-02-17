import * as React from "react";

export interface TableProps
  extends Partial<Decorators>,
    Partial<Text>,
    Partial<Components> {
  data: any[];
  loading: boolean;
  showPagination: boolean;
  showPaginationTop: boolean;
  showPaginationBottom: boolean;
  showPageSizeOptions: boolean;
  pageSizeOptions: any[];
  defaultPageSize: number;
  showPageJump: boolean;
  collapseOnSortingChange: boolean;
  collapseOnPageChange: boolean;
  collapseOnDataChange: boolean;
  freezeWhenExpanded: boolean;
  sortable: boolean;
  resizable: boolean;
  filterable: boolean;
  defaultSortDesc: boolean;
  defaultSorted: any[];
  defaultFiltered: any[];
  defaultResized: Resize[];
  defaultExpanded: object;
  defaultFilterMethod: (filter, row, column) => void;
  defaultSortMethod: (a, b, desc) => void;

  // Controlled State Callbacks
  onPageChange: (pageIndex: number) => void;
  onPageSizeChange: (pageSize: number, pageIndex: number) => void;
  onSortedChange: (newSorted: SortRule[], column: Column, shiftKey) => void;
  onFilteredChange: (column: Column, value) => void;
  onResizedChange: (newResized: Resize[], event) => void;
  onExpandedChange: (newExpanded, index: number, event) => void;

  // Pivoting
  pivotBy: any[];

  // Key Constants
  pivotValKey: string;
  pivotIDKey: string;
  subRowsKey: string;
  aggregatedKey: string;
  nestingLevelKey: string;
  originalKey: string;
  indexKey: string;
  groupedByPivotKey: string;

  // Server-side Callbacks
  onFetchData: (state, instance) => void;

  // Classes
  className: string;
  style: React.CSSProperties;

  // Component decorators

  column: Column;

  expanderDefaults: Partial<ExpanderDefaults>;

  pivotDefaults: object;
}

export interface Resize {
    id: any;
    value: number;
}

export interface SortRule {
    id: string;
    desc: boolean;
}

export interface FinalState extends TableProps {
  startRow: number;
  endRow: number;
  pageRows: number;
  minRows: number;
  padRows: number;
  hasColumnFooter: boolean;
  canPrevious: boolean;
  canNext: boolean;
  rowMinWidth: number;
}

export interface Decorators {
  getProps: (finalState: FinalState) => object | undefined;
  getTableProps: (finalState: FinalState) => object | undefined;
  getTheadGroupProps: (finalState: FinalState) => object | undefined;
  getTheadGroupTrProps: (finalState: FinalState) => object | undefined;
  getTheadGroupThProps: (finalState: FinalState) => object | undefined;
  getTheadProps: (finalState: FinalState) => object | undefined;
  getTheadTrProps: (finalState: FinalState) => object | undefined;
  getTheadThProps: (finalState: FinalState) => object | undefined;
  getTheadFilterProps: (finalState: FinalState) => object | undefined;
  getTheadFilterTrProps: (finalState: FinalState) => object | undefined;
  getTheadFilterThProps: (finalState: FinalState) => object | undefined;
  getTbodyProps: (finalState: FinalState) => object | undefined;
  getTrGroupProps: (finalState: FinalState) => object | undefined;
  getTrProps: (finalState: FinalState) => object | undefined;
  getTdProps: (finalState: FinalState) => object | undefined;
  getTfootProps: (finalState: FinalState) => object | undefined;
  getTfootTrProps: (finalState: FinalState) => object | undefined;
  getTfootTdProps: (finalState: FinalState) => object | undefined;
  getPaginationProps: (finalState: FinalState) => object | undefined;
  getLoadingProps: (finalState: FinalState) => object | undefined;
  getNoDataProps: (finalState: FinalState) => object | undefined;
  getResizerProps: (finalState: FinalState) => object | undefined;
}

export interface Text {
  previousText: React.ReactNode;
  nextText: React.ReactNode;
  loadingText: React.ReactNode;
  noDataText: React.ReactNode;
  pageText: React.ReactNode;
  ofText: React.ReactNode;
  rowsText: React.ReactNode;
}
export interface Components {
  TableComponent: React.ReactNode;
  TheadComponent: React.ReactNode;
  TbodyComponent: React.ReactNode;
  TrGroupComponent: React.ReactNode;
  TrComponent: React.ReactNode;
  ThComponent: React.ReactNode;
  TdComponent: React.ReactNode;
  TfootComponent: React.ReactNode;
  FilterComponent: React.ReactNode;
  ExpanderComponent: React.ReactNode;
  PivotValueComponent: React.ReactNode;
  AggregatedComponent: React.ReactNode;
  // this is a computed default generated using
  PivotComponent: React.ReactNode;
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: React.ReactNode;
  PreviousComponent: React.ReactNode;
  NextComponent: React.ReactNode;
  LoadingComponent: React.ReactNode;
  NoDataComponent: React.ReactNode;
  ResizerComponent: React.ReactNode;
  PadRowComponent: React.ReactNode;
}

export interface Column {
  Cell: React.ReactNode;
  Header: React.ReactNode;
  Footer: React.ReactNode;
  Aggregated: React.ReactNode;
  Pivot: React.ReactNode;
  PivotValue: React.ReactNode;
  Expander: React.ReactNode;
  Filter: React.ReactNode;
  sortable: boolean;
  resizable: boolean;
  filterable: boolean;
  show: boolean;
  minWidth: number;
  className: any;
  style: React.CSSProperties;
  headerClassName: any;
  headerStyle: any;
  footerClassName: any;
  footerStyle: any;
  filterAll: boolean;
  filterMethod: any;
  sortMethod: any;
  defaultSortDesc: any;
}

export interface RowInfo<T> {
  row: T;
  original: any;
  index: number;
  viewIndex: number;
  level: number;
  nestingPath: string;
  aggregated: boolean;
  groupedByPivot: boolean;
  subRows: any[];
}

export interface CellInfo<T> {
  isExpaned: boolean;
  value: T;
  resized: boolean;
  show: boolean;
  width: number;
  maxWidth: number;
  tdProps: any;
  columnProps: any;
  classes: string[];
  styles: React.CSSProperties;
}

export interface ExpanderDefaults {
  sortable: boolean;
  resizable: boolean;
  filterable: boolean;
  width: number;
}

export default class ReactTable extends React.Component<Partial<TableProps>> {}
