import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native';


interface Props {
    
}

const SearchBar = (props: Props) => {
    return (
        <TouchableOpacity>
            <View style={{
                width:"100%",
                height: 30,
                // backgroundColor:"black",
                flexDirection:'row',
                borderRadius:20
            }}>
                <View style={{
                    flex:1
                }}></View>
                <View style={{
                    flex:1
                }} >
                    <TextInput value="ok" style={{ 
                        backgroundColor:"red",
                        flexShrink:1,
                        // lineHeight:5,
                        // fontSize:2,
                        height: 30,

                        // padding:10
                    //    flex:1
                    }}/>
                 </View>
             </View>
         </TouchableOpacity>

    )
}

export default SearchBar;