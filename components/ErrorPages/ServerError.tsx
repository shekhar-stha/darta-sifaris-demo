import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';

export function ServerError() {
  const router = useRouter();
  return (
    <>
    <div>
      <h1>४०४</h1>
      <h3>माफ गर्नुहोस्, यो पृष्ठ अवस्थित छैन।</h3>
      <button>ड्यासबोर्ड पृष्ठमा जानुहोस्</button>
    </div>
    </>
  );
}
