const { TextControl } = wp.components;
const { useDispatch, useSelect  } = wp.data;
const { PluginDocumentSettingPanel } = wp.editPost;

const pluginSidebarGlassesGuy = () => {
    var someMeta = useSelect(function ( select ) {
        return select('core/editor').getEditedPostAttribute('meta')['who_wear_glasses']
    }, []);
    const edit = useDispatch('core/editor').editPost;
    return (
        <PluginDocumentSettingPanel title="Who wear glasses?">
            <div>
                <TextControl 
                    value={someMeta}
                    onChange={(value) => {
                        edit({
                            meta: {
                                who_wear_glasses: value
                            }
                        })
                    }}
                />
            </div>
        </PluginDocumentSettingPanel>
    )
};

export default pluginSidebarGlassesGuy;