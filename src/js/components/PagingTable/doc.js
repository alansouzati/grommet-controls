import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description('A Grommet 2 table component with pagination, filtering, footer, child rows and grouping. Derived from https://github.com/react-tools/react-table. ')
    .usage(`
    $ npm install grommet-controls\n
    import { PagingTable } from 'grommet-controls';\n
    <PagingTable columns={...} data={...} />
`);

  DocumentedElement.propTypes = {
    decorations: PropTypes.shape({
      table: PropTypes.object.description('Table styling, all **`<Box />`** properties are valid.'),
      header: PropTypes.object.description('Header cell styling, all **`<Box />`** properties are valid'),
      headerGroup: PropTypes.object.description('Grouped columns header styling, all **`<Box />`** properties are valid.'),
      filter: PropTypes.object.description('Filter row styling, all **`<Box />`** properties are valid.'),
      filterInput: PropTypes.object.description('Filter input control styling, all **`<TextInput />`** properties are valid.'),
      body: PropTypes.object.description('Body styling, all **`<Box />`** properties are valid.'),
      row: PropTypes.object.description('Row of data styling, all **`<Box />`** properties are valid.'),
      rowOdd: PropTypes.object.description('Odd row for striped styling, all **`<Box />`** properties are valid.'),
      rowEven: PropTypes.object.description('Even row for striped styling, all **`<Box />`** properties are valid.'),
      cell: PropTypes.object.description('Cell of data styling, all **`<Box />`** properties are valid.'),
      footer: PropTypes.object.description('Footer row styling, all **`<Box />`** properties are valid.'),
      pagination: PropTypes.object.description('Pagination box styling, all **`<Box />`** properties are valid.'),
      expander: PropTypes.object.description('Expander button styling, all **`<Button />`** properties are valid, as well as icons OpenIcon and CloseIcon.'),
    }).description('Visual settings of the various table elements. Where applicable, those settings can be overriden at the column level.'),
    columns: PropTypes.arrayOf(PropTypes.shape({
      Cell: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]).description('Used to render a standard cell, defaults to the accessed value.'),
      Header: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]).description('Used to render the header of a column or column group.'),
      Footer: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Aggregated: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Pivot: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      PivotValue: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Expander: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.func,
      ]),
      Filter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

      // All Columns
      accessor: PropTypes.string,
      decorations: PropTypes.object,
      sortable: PropTypes.bool, // use table default
      resizable: PropTypes.bool, // use table default
      filterable: PropTypes.bool, // use table default
      show: PropTypes.bool,
      minWidth: PropTypes.number,

      // Cells only
      getProps: PropTypes.func,

      // Pivot only
      aggregate: PropTypes.func,

      // Headers only
      getHeaderProps: PropTypes.func,

      // Footers only
      getFooterProps: PropTypes.object,
      filterMethod: PropTypes.func,
      filterAll: PropTypes.bool,
      sortMethod: PropTypes.func,
    })).isRequired.description('Array of column descriptors.'),
    data: PropTypes.array.description('Array of data objects.').isRequired,
    defaultPageSize: PropTypes.number.description('Default page size.').defaultValue(20),
    defaultSorted: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      desc: PropTypes.bool,
    })).description('Array of default sorted columns and their sort order.'),
    onFetchData: PropTypes.func.description('If specified, a function responsible for loading the data.'),
    filterable: PropTypes.bool.description('Wheter to display a filtering row.').defaultValue(false),
    loading: PropTypes.bool.description('Wheter to display the loading indicator.').defaultValue(false),
    manual: PropTypes.bool.description('If true, the data is sorted manually in the onFetchData function.').defaultValue(false),
    pages: PropTypes.number.description('Number of total pages of data, when loading the data manually.'),
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number.description('Page size')).description('Array of available page size options ([5, 10, 20, 25, 50, 100]).'),
    pivotBy: PropTypes.arrayOf(PropTypes.string).description('Array of columns to pivot (group) by.'),
    resizable: PropTypes.bool.description('Wheter the columns can be resized.').defaultValue(true),
    showPagination: PropTypes.bool.description('Wheter to display a paging row.').defaultValue(true),
    sortable: PropTypes.bool.description('Wheter the table headers will allow sorting of the of the data.').defaultValue(true),
    SubComponent: PropTypes.func.description('If specified, a function with (row as parameter) to render the expading row.').defaultValue(true),
  };

  return DocumentedElement;
};
