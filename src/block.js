import edit from './components/glasses_guy/edit';
import save from './components/glasses_guy/save';
import pluginSidebarGlassesGuy from './components/glasses_guy/sidebarPlugin';

const { registerPlugin } = wp.plugins
const { registerBlockType } = wp.blocks;

registerBlockType('glassesguy/block', {
    title: "Glasses guy",
    description: "A simple demonstration block",
    icon: "admin-site",
    category: "common",
    attributes: {
        message: {
            type: 'string',
            default: 'Hello'
        },
        name: {
            type: 'string',
            default: 'Guy'
        },
        textColor: {
            type: 'string',
            default: '#333'
        },
        backgroundColor: {
            type: 'string',
            default: '#FFF'
        },
        align: {
            type: 'string',
            default: 'auto'
        }
    },
    edit: edit,
    save: save
});

registerPlugin( 'plugin-sidebar-glasses-guy', { render: pluginSidebarGlassesGuy } );