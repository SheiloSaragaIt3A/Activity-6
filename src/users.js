import React from "react";
import { View } from "react-native-web";
import { user } from "./user";
import { ScrollView, StyleSheet, Text} from "react-native";

const Users = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lists of Users</Text>         
            <ScrollView>
                <table>
                    <tr style={styles.Header}>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>COURSE</th>
                        <th>YEAR & SECTION</th>
                    </tr>
                  
                    {user.map((user1) => (
                        <tr style={styles.cells}>
                            <th>{user1.id}</th>
                            <th>{user1.name.firstname}</th>
                            <th>{user1.name.lastname}</th>
                            <th>{user1.course}</th>
                            <th>{user1.year}{user1.section}</th>
                        </tr>
                    ))}
                </table>
            </ScrollView>
        </View>
    );
}

export default Users;

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
        backgroundColor: '#6495ED',
        fontFamily: 'Century Gothic',
        fontSize: 15,
        color: 'white',
    },
    cells: {
        backgroundColor: '#9FE2BF',
        fontFamily: 'Century Gothic',
        fontSize: 15,
    },
})
