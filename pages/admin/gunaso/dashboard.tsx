/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
// eslint-disable-next-line import/extensions
import Head from 'next/head';
import { Box, Group, useMantineTheme } from '@mantine/core';
import {
  IconAddressBook,
  IconHourglassHigh,
  IconEyeOff,
  IconRegistered,
  IconFileCheck,
  IconEyeCheck,
  IconClipboardPlus,
  IconFileDescription,
  IconLiveView,
  IconLogin,
} from '@tabler/icons';
import { NextPageWithLayout } from '../../_app';
import Layout from '../../../components/Layout/layout';
import CardGroup from '../../../components/CardGroup/CardGroup';
import GunasoTable from '../../../components/Tables/GunasoCountTable';
import PublicGunaso from '../../../components/Tables/PublicGunaso';
import ImgButtonCards from '../../../components/CardGroup/ImgButtonCards';

// eslint-disable-next-line max-len
const GunasoDashboard: NextPageWithLayout = () => {
  const firstRow = [
    { icon: <IconAddressBook id="green" />, count: 189, label: 'कुल प्राप्त गुनासो' },
    { icon: <IconRegistered id="yellow" />, count: 181, label: 'कुल दर्ता गुनासो' },
    { icon: <IconFileCheck id="purple" />, count: 148, label: 'फर्छ्यौट भएको' },
    { icon: <IconHourglassHigh id="orange" />, count: 98, label: 'अनुसन्धान गरिदै' },
    { icon: <IconEyeCheck id="blue" />, count: 118, label: 'हेरिएको' },
    { icon: <IconEyeOff id="red" />, count: 178, label: 'नहेरिएको' },
  ];

  const secondRow = [
    {
      icon: <IconClipboardPlus id="green" />,
      label: 'गुनासो दर्ता',
      description: 'नयाँ गुनासोको दर्ता गर्नुहोस् ।',
      buttonName: 'गुनासो दर्ता',
      buttonLink: '#',
    },
    {
      icon: <IconFileDescription id="yellow" />,
      label: 'उजुरी/गुनासो नीति',
      description: 'उजुरी/गुनासो समाधान नीति ।',
      buttonName: 'नीतिहरु',
      buttonLink: '#',
    },
    {
      icon: <IconLiveView id="purple" />,
      label: 'गुनासो ट्र्याक',
      description: 'गुनासो/उजुरीको स्थिती थाहा पाउन ।',
      buttonName: 'गुनासो ट्र्याक',
      buttonLink: '#',
    },
    {
      icon: <IconLogin id="orange" />,
      label: 'गुनासो लग इन',
      description: 'गुनासो/उजुरी लग इन ।',
      buttonName: 'लग इन',
      buttonLink: '#',
    },
  ];

  const gunasoData = [
    { id: 1, gunaso: 'अन्य गुनासाहरु', count: 12 },
    { id: 2, gunaso: 'कृषि सम्बन्धी', count: 12 },
    { id: 3, gunaso: 'शिक्षा सम्बन्धी', count: 12 },
    { id: 4, gunaso: 'स्वास्थ्य सम्बन्धी', count: 12 },
    { id: 5, gunaso: 'नैतिकता र सदाचार प्रवर्द्धन विषयक', count: 12 },
    { id: 6, gunaso: 'प्रादेशिक तथा स्थानीय निकायका कार्यहरु विषयक गुनासा/सुझाव', count: 12 },
    { id: 7, gunaso: 'भ्रष्टाचार नियन्त्रण विषयक', count: 12 },
    { id: 8, gunaso: 'आकस्मिक प्रकृतिका गुनासा', count: 12 },
  ];

  const publicGunasoData = [
    {
      id: 1,
      title: 'अन्य गुनासाहरु',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    {
      id: 2,
      title: 'कृषि सम्बन्धी',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    {
      id: 3,
      title: 'शिक्षा सम्बन्धी',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    {
      id: 4,
      title: 'स्वास्थ्य सम्बन्धी',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    {
      id: 5,
      title: 'नैतिकता र सदाचार प्रवर्द्धन विषयक',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    { id: 6, title: 'प्रादेशिक तथा स्थानीय निकायका कार्यहरु विषयक गुनासा/सुझाव', count: 12 },
    {
      id: 7,
      title: 'भ्रष्टाचार नियन्त्रण विषयक',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
    {
      id: 8,
      title: 'आकस्मिक प्रकृतिका गुनासा',
      description:
        'नैतिकता र सदाचार प्रवर्द्धन विषयक विषय नैतिक मूल्यहरू, धार्मिक आधारहरू, नैतिक आदर्शहरू, औद्धोगिक नीतिहरू र सदाचारलाई समावेश गर्दछ। यो विषय मानव समाजमा नैतिकता र सदाचारको महत्व र प्रवर्धनका सन्दर्भमा छलफल गर्दछ। यसले व्यक्तिहरूमा नैतिकता, ईमानदारी, न्यायपूर्णता, समर्थन, प्रेम, सत्यनिष्ठा, समाधान, सामरिकता, प्रामाणिकता र समाजसेवामा सक्रियताको विकास र प्रोत्साहन गर्दछ। नैतिकता र सदाचार प्रवर्धन विषयक छलफल गर्दा मानव समाजको विकास, समृद्धि, एकता र सम्पूर्णता साधारण लक्ष्यमा राखिन्छ।',
    },
  ];
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Darta Chalani Sifaris</title>
        <meta name="description" content="Darta Chalani Sifaris" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={20} style={{ backgroundColor: '#DFEFFF' }}>
        <Group p={10} position="apart">
          <div>
            <h3 className="fs-24 text-secondary mb-1">गुनासो ड्यासबोर्ड</h3>
            <p className="text-info"> यहाँ गुनासो तथ्यांकहरू प्रदर्शित गरिएको छ।</p>
          </div>
        </Group>
        <CardGroup cards={firstRow} />

        <ImgButtonCards cards={secondRow} />

        {/* Pie Chart and Table */}
        <div className="row mb-4">
          <div className="col-12 col-md-6 table-div mb-md-0 mb-4">
            {/* <div className=""> */}
            <GunasoTable tableName="गुनासो प्राप्त भएका गुनासो प्रकृतिहरु" data={gunasoData} />
            {/* </div> */}
          </div>
          <div className="col-12 col-md-6">
            <PublicGunaso
              tableName="गुनासो प्राप्त भएका गुनासो प्रकृतिहरु"
              data={publicGunasoData}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

GunasoDashboard.getLayout = function getLayout(page) {
  return <Layout> {page}</Layout>;
};

export default GunasoDashboard;
