import React, { useState } from 'react';
import { Button, Card, Textarea, TextInput, Title } from '@mantine/core';
interface Props {}

const AddStudentProfile = (props: Props) => {
  const [form, setForm] = useState({
    studentName: '',
    cin: '',
    major: '',
    classGroup: '',
    location: '',
    studentEmail: '',
    studentPhone: '',
    linkedinProfile: '',
    image: '',
    bio: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Title order={2} className='mb-4'>
        Your Profile
      </Title>
      <Card shadow='sm' padding='lg' className='w-full space-y-2'>
        <Title order={3}> Fill the form below </Title>
        <TextInput
          value={form.studentName}
          name='studentName'
          label='Student Name'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.cin}
          name='cin'
          label='CIN'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.major}
          name='major'
          label='Major'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.classGroup}
          name='classGroup'
          label='Class Group'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.location}
          name='location'
          label='Location'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.studentEmail}
          name='studentEmail'
          label='Email'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.studentPhone}
          name='studentPhone'
          label='Phone'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.linkedinProfile}
          name='linkedinProfile'
          label='LinkedIn Profile'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.image}
          name='image'
          label='Image Url'
          onChange={(event) => handleChange(event)}
          required
        />
        <Textarea
          value={form.bio}
          name='bio'
          label='Bio'
          onChange={(event) => handleChange(event)}
          required
        />
        <div>
          <Button
            className='mt-4'
            variant={'outline'}
            color='green'
            onClick={() => console.log(form)}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddStudentProfile;
