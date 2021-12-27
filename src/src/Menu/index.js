import {
    Tab, Tabs, Button, IconButton,
} from '@material-ui/core';

import I18n from '@iobroker/adapter-react/i18n';
import { useState } from 'react';

import {
    Menu,
    MenuItem,
    SubMenu,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import UndoIcon from '@material-ui/icons/Undo';

import Toolbar from '../Toolbar';

const toolbarItems = ['View', 'Widgets', 'Tools'];

const menuItems = [
    {
        name: 'Setup',
        submenu: [
            {
                name: 'Projects',
                submenu: [
                    { name: 'main' },
                ],
            },
            {
                name: 'Project export/import',
                submenu: [
                    { name: 'Export (normal)' },
                    { name: 'Export (anonymized)' },
                    { name: 'Import' },
                ],
            },
            { name: 'New project...' },
            { name: 'File manager...' },
            { name: 'Settings...' },
            { name: 'Object browser...' },
        ],
    },
    {
        name: 'Help',
        submenu: [
            { name: 'Shortcuts' },
            { name: 'About' },
        ],
    }];

const MainMenu = props => {
    const [selected, setSelected] = useState('View');

    return <>
        <div className={props.classes.menu}>
Vis
            <Tabs className={props.classes.viewTabs} value={selected}>
                {
                    toolbarItems.map(tab => <Tab
                        label={I18n.t(tab)}
                        value={tab}
                        className={props.classes.viewTab}
                        onClick={() => setSelected(tab)}
                        key={tab}
                    />)
                }
            </Tabs>
            {
                menuItems.map(level1 => <Menu key={level1.name} menuButton={<Button>{level1.name}</Button>}>
                    {level1.submenu.map(level2 => (level2.submenu
                        ? <SubMenu key={level2.name} label={level2.name}>
                            {level2.submenu.map(level3 => <MenuItem key={level3.name}>{level3.name}</MenuItem>)}
                        </SubMenu>
                        : <MenuItem key={level2.name}>{level2.name}</MenuItem>))}
                </Menu>)
            }
            <IconButton size="small">
                <UndoIcon />
            </IconButton>
        </div>
        <Toolbar
            selected={selected}
            {...props}
        />
    </>;
};

export default MainMenu;
