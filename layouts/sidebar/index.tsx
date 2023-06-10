/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Image, Box, Text, Flex, useMantineTheme, Center, Divider, ScrollArea } from '@mantine/core';
import useWindowSize from '@rooks/use-window-size';
import { IconFile } from '@tabler/icons';
import { sideMenuItems } from '../../bootstrap/config';
import { useSidebarContext } from '../../context/SidebarContext';
import { TemplateService } from '../../services/index';
import { useAppContext } from '../../context/AppProvider';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebarContext();
  const [sideMenus, setSideMenus] = useState(sideMenuItems);
  const { isOpen, onToggle } = useDisclosure(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1);
  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState();
  const [filteredMenus, setFilteredMenus] = useState([]);
  const { user } = useAppContext();

  const role = user?.isAdmin ? 'admin' : 'user';
  const handleMenuClick = (index: number) => {
    setActiveMenuIndex(index);
    onToggle();
  };
  const getCategory = async () => {
    const res = await TemplateService.listCategory();
    if (res?.data.message === 'Success') {
      setCategories(res.data.data);
    }
  };

  const getTemplates = async () => {
    const res = await TemplateService.getTemplates();
    if (res?.data.message === 'Success') {
      setTemplates(res.data.data);
    }
  };

  const categoryModule = categories.filter(a => a.type === 'RECOMMENDATION').map((cat) => ({
      name: cat.name,
      key: cat.name,
      url: `/admin/sifaris/${cat.name}`,
      match: `/admin/sifaris/${cat.name}`,
      icon: IconFile,
      role: ['user'],
      subMenuItems: templates?.filter(a => a.category.id === cat.id).map((temp) => ({
          name: temp.name,
          key: temp.name,
          url: `/admin/sifaris/${cat.name}/${temp.name}`,
          match: `/admin/sifaris/${cat.name}/${temp.name}`,
          icon: IconFile,
          role: ['user'],
      })),
  }));

    const SifarisModule = [
        {
            name: 'Sifaris',
            key: 'recommendation',
            url: '/admin/sifaris',
            match: '/admin/sifaris',
            icon: IconFile,
            role: ['user'],
            subMenuItems: categoryModule,
        }];

    useEffect(() => {
        getCategory();
        getTemplates();
    }, []);

  const { innerWidth } = useWindowSize();

  useEffect(() => {
    setSideMenus(sideMenuItems);
      // eslint-disable-next-line max-len
      const filteredMenu2 = sideMenuItems.concat(SifarisModule).filter(menu => menu?.role?.includes(role));
    setFilteredMenus(filteredMenu2);
  }, [sideMenuItems, innerWidth]);

  useEffect(() => {
    // if the width of the window is smaller than 600px, then set the sidebarIsOpen to false
    if (innerWidth != null && innerWidth < 800) {
        setSidebarIsOpen(false);
    } else {
      setSidebarIsOpen(true);
    }
}, []);

  const theme = useMantineTheme();
  return (
    <Box
      w={sidebarIsOpen ? '240px' : '60px'}
      // w={sidebarIsOpen && innerWidth >= 800 ? '240px' : !sidebarIsOpen && innerWidth >= 800 ? '60px' : sidebarIsOpen && innerWidth <= 800 ? '240px' : '0px'}
      // w={(sidebarIsOpen && innerWidth < 800) ? '200px' : (sidebarIsOpen ? '240px' : '60px') : (!sidebarIsOpen && innerWidth <= 800) ? "0px" : '60px' }
      sx={{
        // backgroundImage: 'linear-gradient(90deg, #151933, #2a3266)',
        backgroundColor: '#2a3266',
        color: 'white',
        zIndex: 100,
        top: '0px',
        height: '100%',
        textShadow: 'xl',
        position: 'fixed',
        paddingTop: 8,
        transition: 'all 100ms ease-in',
        display: !sidebarIsOpen && innerWidth < 800 ? 'none' : 'block',
      }}
    >
      {/* Branding Header */}
      <Flex
        direction="row"
        color="white"
        justify="center"
        align="center"
        sx={{ marginBottom: 20 }}
      >
        <Flex align="center" direction="row" p="4" mt={20}>
          {/* <Image mt={13} height={45} src="/digipalika.png" /> */}
          <img style={{ width: '25px' }} src="/donly.png" alt="d" />
          <Text
            className="kanit fw-600"
            sx={{
              letterSpacing: 1,
              backgroundColor: 'transparent',
              display: sidebarIsOpen ? 'block' : 'none',
              color: theme.colors.main[12],
              fontSize: 23,
              fontWeight: 700,
            }}
          >
            IGIPALIKA
          </Text>
        </Flex>
      </Flex>
      {/* <Center>
        <Divider sx={{ alignSelf: 'center', width: '100%', marginBottom: 10 }} />
      </Center> */}
      <ScrollArea
        sx={{
          overflow: 'hidden',
          height: '100vh',
          color: 'white',
          paddingRight: 15,
          paddingBottom: 100,
        }}
      >
        <Text
          pl={20}
          my={10}
          color={theme.colors.main[15]}
          size={14}
          weight={500}
          sx={{
            display: sidebarIsOpen ? 'block' : 'none',
          }}
        >
          MENU
        </Text>
        {filteredMenus && filteredMenus.map((menuItem, index) => (
          <>
            <SidebarItem
              url={menuItem.url}
              key={menuItem.key}
              match={menuItem.match}
              name={menuItem.name}
              icon={menuItem.icon}
              subMenuItems={menuItem.subMenuItems}
              onClick={() => handleMenuClick(index)}
            />
          </>
        ))}
      </ScrollArea>

    </Box>
  );
};

export default Sidebar;
