import React, { ReactElement } from 'react'
import { Image } from 'react-native'

interface Props {
    // uri: string,
    color?: string
}

function EmailIcon({ color }: Props): ReactElement {
    return (
        <Image
            source={
                require('../asset/envelope.png')
            }
            style={{
                tintColor: color
            }}
        />
    )
}

export default EmailIcon;
