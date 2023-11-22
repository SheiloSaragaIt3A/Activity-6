import React from "react";
import { View } from "react-native-web";
import { user } from "./user";
import { FlatList, StyleSheet, Text } from "react-native";

const Students = () => {
    const studentList = user.filter((user) => user.userType == "Student");
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Lists of Students</Text>           
                <FlatList
                    data={studentList}
                    renderItem={({item}) => (
                        <table>
                            <tr style={styles.Header}>
                                <th style={{width: 5}}>ID</th>
                                <th style={{width: 90}}>NAME</th>
                                <th style={{width: 100}}>COURSE</th>
                            </tr>

                            <tr key={item.id} style={styles.cells}>
                                <td style={{textAlign: 'center'}}>{item.id}</td>
                                <td>{item.name.firstname} {item.name.lastname}</td>
                                <td>{item.course}</td>
                            </tr>
                            </table>
                        )}
                    keyExtractor={(item) => item.id}
                /> 
                
        </View>
    );
}

export default Students;

const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    title: {
        fontFamily: 'Century Gothic',
        fontWeight: 'bold',
        fontSize: 18,
    },
    Header: {
        backgroundColor: '	#808080',
        fontFamily: 'Century Gothic',
        fontSize: 15,
        color: 'white',
        
    },
    cells: {
        backgroundColor: '#40E0D0',
        fontFamily: 'Century Gothic',
        fontSize: 15,
        
    },
})
