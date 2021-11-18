const save = function ( { attributes } ) {
    const { who_wear_glasses = '' } = wp.data.select('core/editor').getEditedPostAttribute('meta') || {}
    return <div> [{ attributes.name || 'Anonymous' }] <span>{ who_wear_glasses === attributes.name ? '(⌐■-■)' : '( ∙_∙)>⌐■-■' }</span> : 
        <div
            style={{
                textAlign: attributes.alignment || 'left',
                color: attributes.textColor || '#333',
                backgroundColor: attributes.backgroundColor || '#FFF',
            }}
        >
            { attributes.message || '' }
        </div>
    </div>;
}

export default save;