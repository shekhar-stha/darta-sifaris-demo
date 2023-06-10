import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Paper } from '@mantine/core';
import { NextPageWithLayout } from '../../../_app';
import Layout from '../../../../components/Layout/layout';
import { TemplateService } from '../../../../services';
import { TemplateType } from '../../../../interfaces/Template';

const SifarisDocument: NextPageWithLayout = () => {
    const router = useRouter();
    const { document } = router.query;
    const [templates, setTemplates] = useState<TemplateType>();
    const getTemplates = async () => {
        const res = await TemplateService.getTemplates();
        if (res?.data.message === 'Success') {
            setTemplates(res.data.data.find(a => a.name === document));
        }
    };
    const { template } = templates;
    useEffect(() => {
        getTemplates();
    }, []);
    return (
        <Paper>
            <div
              dangerouslySetInnerHTML={{ __html: template }}
            />
        </Paper>

    );
};

SifarisDocument.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default SifarisDocument;
