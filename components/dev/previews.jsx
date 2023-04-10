import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox-next'
import {PaletteTree} from './palette'
import Index from "../../pages/join";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Index">
                <Index/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
