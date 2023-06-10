import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout/layout';
import { NextPageWithLayout } from './_app';
import useCustomSession from '../hooks/getSession';

// eslint-disable-next-line max-len
const HomePage: NextPageWithLayout = () => {
    const router = useRouter();
    const session = useCustomSession();

    useEffect(() => {
        // login
        if (session?.length === 0) {
            router.push('auth/login');
        } else {
            router.push('admin/dashboard');
        }
    }, []);

  return (
      <>
      </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
