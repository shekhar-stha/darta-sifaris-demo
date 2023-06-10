import { Button, Checkbox, Select, Stack, Text, TextInput } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import React, { useState } from 'react';
import { useForm, UseFormReturnType } from '@mantine/form';
import { NextRouter } from 'next/router';
import { TemplateType } from '../../interfaces/Template';

// eslint-disable-next-line no-empty-pattern
export const AddVariablesModal = ({
    innerProps }: ContextModalProps<{
        endpoint: string;
        id: string;
        token: string;
        router: NextRouter;
        form: UseFormReturnType<TemplateType>;
    }>) => {
    const form = useForm({
        initialValues: {
            value: '',
            type: '',
            required: false,
        },
        validate: {
            value: (value) => (value.length < 1 ? 'Must be specify variable name' : ''),
            type: (type) => (type.length < 1 ? 'Must be specify type' : ''),
        },
    });
    const [variableTmp, setVariableTmp] = useState(
        []
    );

    const AddVariable = () => {
        const newVariable = form.values;
        setVariableTmp([...variableTmp, newVariable]);
        const variableArray = [...variableTmp, newVariable];
        const outputObject = variableArray.reduce((obj, item) => {
            // eslint-disable-next-line no-param-reassign
            obj[item.value] = item;
            return obj;
        }, {});
        innerProps?.form?.setFieldValue('format', outputObject);
        form.reset();
    };

    const selectData = [
        { label: 'String', value: 'string' },
        { label: 'Number', value: 'number' },
        { label: 'Decimal', value: 'decimal' },
        { label: 'Select', value: 'select' },
        { label: 'File', value: 'file' },
    ];

    return (
        <>
            <form>
                <Stack>
                    <Text weight={500}> Add Variable</Text>
                    <TextInput placeholder="Name" {...form.getInputProps('value')} />
                    <Select data={selectData} placeholder="choose variable type" {...form.getInputProps('type')} />
                    <Checkbox label="Required" {...form.getInputProps('required', { type: 'checkbox' })} />
                    <Button
                        onClick={AddVariable}
                    >Add
                    </Button>
                </Stack>
            </form>
        </>
    );
};
