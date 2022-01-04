import { Button, Card, Textarea, TextInput, Title } from '@mantine/core';
import axios from 'axios';
import { userInfo } from 'os';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../contexts/useAuth';

interface Props {}

const AddCompanyProfile = (props: Props) => {
  const [form, setForm] = useState({
    companyName: '',
    secteur: '',
    location: '',
    website: '',
    referance: '',
    responsable: '',
    companyEmail: '',
    companyPhone: '',
    description: '',
    image: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { user, loadUser } = useAuth();
  const save = async () => {
    const API_URL = 'http://localhost:4000/company/addprofile';
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        API_URL,
        { ...form, user: user._id },
        config
      );
      loadUser();
      navigate('/');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title order={2} className='mb-4'>
        Your Company Profile
      </Title>
      <Card shadow='sm' padding='lg' className='w-full space-y-2'>
        <Title order={3}> Fill the form below </Title>
        <TextInput
          value={form.companyName}
          name='companyName'
          label='Company Name'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.secteur}
          name='secteur'
          label='Secteur'
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
          value={form.website}
          name='website'
          label='Website'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.referance}
          name='referance'
          label='Referance'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.responsable}
          name='responsable'
          label='Responsable'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.companyEmail}
          name='companyEmail'
          label='Company Email'
          onChange={(event) => handleChange(event)}
          required
        />
        <TextInput
          value={form.companyPhone}
          name='companyPhone'
          label='Company Phone'
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
          value={form.description}
          name='description'
          label='Description'
          onChange={(event) => handleChange(event)}
          required
        />
        <div>
          <Button
            className='mt-4'
            variant={'outline'}
            color='green'
            onClick={() => save()}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AddCompanyProfile;
