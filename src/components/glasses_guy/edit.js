const { TextControl,  Panel, PanelBody, ColorPalette } = wp.components;
const { InspectorControls, useBlockProps, BlockControls, AlignmentToolbar } = wp.blockEditor;
const { useSelect  } = wp.data;

const edit = function ( { attributes, setAttributes } ) {
    const colors = useSelect('core/block-editor').getSettings().colors
    const onChangeMessage = ( value ) => {
        setAttributes({
            message: value
        });
    }
    const onChangeName = ( value ) => {
        setAttributes({
            name: value
        });
    }
    const onChangeAlignment = ( alignment ) => {
        setAttributes({
            alignment: alignment
        });
    }
    const onChangeBackgroundColor = ( hexColor ) => {
        setAttributes({
            backgroundColor: hexColor
        });
    }
    const onChangeTextColor = ( hexColor ) => {
        setAttributes({
            textColor: hexColor
        });
    }
    return <div>
        <InspectorControls {...useBlockProps()} key="setting">
            <Panel>
                <PanelBody title="Info" initialOpen={ false }>
                    <div id="gutenpride-controls">
                        <fieldset>
                            <legend>Name of this guy</legend>
                            <TextControl
                                value={attributes.name}
                                onChange={onChangeName}
                                placeholder={'Type a name'}
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Color" initialOpen={ false }>
                    <div id="gutenpride-controls-color">
                        <fieldset>
                            <legend>Background color</legend>
                            <ColorPalette
                                colors={colors}
                                value={attributes.backgroundColor}
                                onChange={onChangeBackgroundColor}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Text color</legend>
                            <ColorPalette
                                colors={colors}
                                value={attributes.textColor}
                                onChange={onChangeTextColor}
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </Panel>
        </InspectorControls>
        {
            <BlockControls>
                <AlignmentToolbar 
                    value={attributes.alignment}
                    onChange={onChangeAlignment}
                />
            </BlockControls>
        }
        <TextControl
            style={{
                textAlign: attributes.alignment || 'left',
                color: attributes.textColor || '#333',
                backgroundColor: attributes.backgroundColor || '#FFF',
            }}
            value={attributes.message}
            onChange={onChangeMessage}
            placeholder={'Type a message'}
        />
    </div>;
}

export default edit;