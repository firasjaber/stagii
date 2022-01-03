import { Button, TextInput, Modal, Table, Title } from '@mantine/core';
import React, { useState } from 'react';

interface Props {}
const elements = [
  {
    id: 0,
    student: 'Firas Jaber',
    company: 'Amazon LLC',
    type: 'PFE',
    startedAt: '12 Jun 2121',
    endedAt: '30 Dec 2121',
    rapport: 'rapport_23123.pdf',
  },
  {
    id: 0,
    student: 'Firas Jaber',
    company: 'Amazon LLC',
    type: 'PFE',
    startedAt: '12 Jun 2121',
    endedAt: '30 Dec 2121',
    rapport: 'rapport_23123.pdf',
    mark: '21',
  },
  {
    id: 0,
    student: 'Firas Jaber',
    company: 'Amazon LLC',
    type: 'PFE',
    startedAt: '12 Jun 2121',
    endedAt: '30 Dec 2121',
    rapport: 'rapport_23123.pdf',
    mark: '21',
  },
  {
    id: 0,
    student: 'Firas Jaber',
    company: 'Amazon LLC',
    type: 'PFE',
    startedAt: '12 Jun 2121',
    endedAt: '30 Dec 2121',
    rapport: 'rapport_23123.pdf',
    mark: '21',
  },
  {
    id: 0,
    student: 'Firas Jaber',
    company: 'Amazon LLC',
    type: 'PFE',
    startedAt: '12 Jun 2121',
    endedAt: '30 Dec 2121',
    rapport: 'rapport_23123.pdf',
    mark: '21',
  },
];
const Results = (props: Props) => {
  const [opened, setOpened] = useState(false);

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.student}</td>
      <td>{element.company}</td>
      <td>{element.type}</td>
      <td>{element.startedAt}</td>
      <td>{element.endedAt}</td>
      <td className='underline'>
        <a>{element.rapport}</a>
      </td>
      <td>
        {element.mark ? (
          element.mark
        ) : (
          <Button variant='outline' onClick={() => setOpened(true)}>
            Add Mark
          </Button>
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Submite Internship Mark'
      >
        <TextInput placeholder='Mark' type='number' label='Mark :' />
        <Button
          variant='outline'
          color='green'
          className='mt-4 float-right'
          onClick={() => setOpened(false)}
        >
          Submit
        </Button>
      </Modal>
      <Title order={2} className='mb-4'>
        Internships Results
      </Title>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student </th>
            <th>Company </th>
            <th>Type </th>
            <th>Started at</th>
            <th>Ended at</th>
            <th>Rapport</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default Results;
