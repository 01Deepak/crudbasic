export const columns = [
  {
    name: 'Id',
    selector: (row:any) => row.id,
},
  {
      name: 'Title',
      selector: (row:any) => row.title,
  },
  {
      name: 'Year',
      selector: (row:any) => row.year,
  },
  {
    name: 'Action',
    selector: (row:any) => <a href="#">edit</a>,
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