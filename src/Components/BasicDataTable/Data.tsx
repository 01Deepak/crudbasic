export const columns = [
  {
    name: 'Id',
    selector: (row:any) => row.id,
    sortable: true,
},
  {
      name: 'Title',
      selector: (row:any) => row.title,
      sortable: true,
  },
  {
      name: 'Year',
      selector: (row:any) => row.year,
      sortable: true,
  },
  {
    name: 'Action',
    selector: (row:any) => <a href="#">edit</a>,
    sortable: true
},
];

export const data = [
  {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]