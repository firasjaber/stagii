import { Avatar, Button, Card, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props { }

const Company = (props: Props) => {
    const imgUrl =
        'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg';
    return (
        <div>
            <Title order={2} className='mb-4'>
                Company Profile ( id : 0 )
            </Title>
            <Card shadow='sm' padding='lg' className='w-full '>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col space-y-3'>
                        <div>
                            <span className='text-gray-400 text-sm'>Company name : </span>{' '}
                            Proxiweb
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>Secteur : </span> informatique

                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>reference : </span>{' '}
                            004212382
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>Company Email : </span>{' '}
                            proxiweb@gmail.com
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>Company Phone : </span>{' '}
                            9123123
                        </div>

                        <div>
                            <span className='text-gray-400 text-sm'>Joined at : </span> 21 Jun
                            2001
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>
                                Number internship offered :{' '}
                            </span>{' '}
                            None
                        </div>
                        <div className='text-green-500'>
                            <span className='text-gray-400 text-sm'>CEO : </span>{' '}
                            Abdelkader 7mama
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>
                                Current Internship :{' '}
                            </span>{' '}
                            Incedo GmbH
                        </div>
                        <div>
                            <span className='text-gray-400 text-sm'>
                                Location :{' '}
                            </span>{' '}
                            Sousse
                        </div>
                    </div>
                    <div>
                        <Avatar size={150} className='rounded-full m-4' src={imgUrl} />
                    </div>
                </div>
                <div className='mt-3'>
                    <div>
                        <span className='text-gray-400 text-sm'>Bio : </span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
                        quasi omnis odit qui beatae corporis quod explicabo voluptate.
                    </p>
                    <div className='flex items-center space-x-2 mt-4'>
                        <Button variant='outline' color='red'>
                            Delete
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Company;
