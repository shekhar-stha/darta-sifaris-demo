import { Button, Checkbox, Group, Stack, Text, TextInput } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import React from 'react';
import { useForm } from '@mantine/form';
import { NextRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';
import { HttpRequest } from '../../lib/HttpRequest';
import { API } from '../../utils/API';

// eslint-disable-next-line no-empty-pattern
export const SetUserRoleModal = ({
                                    context, innerProps }: ContextModalProps<{
    endpoint: string;
    id: string;
    token: string;
    router: NextRouter;
    username: string;
    getWards: () => void;
    getDepartments: () => void;
    wards: [],
    departments: [],
    getAllUsers: () => void;
}>) => {
    const { token, username, getAllUsers } = innerProps;

    const form = useForm({
        initialValues: {
            ward_priv: '',
            palika_priv: false,
            delete_priv: false,
            edit_priv: false,
            print_priv: false,
            save_priv: false,
            department_priv: '',
            chalani_priv: false,
            darta_priv: false,
        },
    });

    // TODO submit section handler
    const SetRole = () => {
        // Add section for ward, department
        const formData = {
            username,
            ward_priv: form.values.ward_priv,
            palika_priv: form.values.palika_priv,
            delete_priv: form.values.delete_priv,
            edit_priv: form.values.edit_priv,
            print_priv: form.values.print_priv,
            save_priv: form.values.save_priv,
            department_priv: form.values.department_priv,
            chalani_priv: form.values.chalani_priv,
            darta_priv: form.values.darta_priv,
        };
        HttpRequest.post(API.user.userRole, formData, token).then(res => {
            showNotification({
                message: res.data.message,
                autoClose: 2000,
                color: 'green',
            });
            getAllUsers();
            context.closeModal('setUserRole');
        }).catch(error => {
            showNotification({
                message: error.message,
                autoClose: 2000,
                color: 'red',
            });
        });
    };

    return (
        <>
            <form>
                <Stack>
                    <Text weight={500} size={20}> Set User Role</Text>
                    <Text weight={500}> Username: {username}</Text>
                    <TextInput
                      type="number"
                      label="Wards"
                      placeholder="enter a ward id"
                      {...form.getInputProps('ward_priv')}
                    />
                    <TextInput
                      type="number"
                      label="Department"
                      placeholder="enter a department id"
                      {...form.getInputProps('department_priv')}
                    />
                    {/*<Select*/}
                    {/*  label="Departments"*/}
                    {/*  placeholder="Choose a Department"*/}
                    {/*  data={[]}*/}
                    {/*  {...form.getInputProps('department_priv')}*/}
                    {/*/>*/}
                    <Text weight={500}>Privileges :</Text>
                    <Group>
                        <Checkbox label="Palika" {...form.getInputProps('palika_priv')} />
                        <Checkbox label="Delete" {...form.getInputProps('delete_priv')} />
                        <Checkbox label="Edit" {...form.getInputProps('edit_priv')} />
                        <Checkbox label="Print" {...form.getInputProps('print_priv')} />
                        <Checkbox label="Save" {...form.getInputProps('save_priv')} />
                        <Checkbox label="Chalani" {...form.getInputProps('chalani_priv')} />
                        <Checkbox label="Darta" {...form.getInputProps('darta_priv')} />
                    </Group>
                    <Group position="apart">
                        <Button onClick={() => context.closeModal('setUserRole')} color="red">Back</Button>
                        <Button onClick={SetRole}>Set Role</Button>
                    </Group>
                </Stack>
            </form>
        </>
    );
};
