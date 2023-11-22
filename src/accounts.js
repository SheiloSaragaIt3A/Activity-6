import React from "react";
import { View } from "react-native-web";
import { user } from "./user";
import { StyleSheet, Text} from "react-native";

const Accounts = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lists of Accounts</Text>         
            <View>
                <table>
                    <tr style={styles.Header}>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>PASSWORD</th>
                        <th>USERTYPE</th>
                    </tr>
                  
                    {user.map((user1) => (
                        <tr style={styles.cells}>
                            <th>{user1.id}</th>
                            <th>{user1.username}</th>
                            <th>{user1.password}</th>
                            <th>{user1.userType}</th>
                        </tr>
                    ))}
                </table>
            </View>
        </View>
    );
}

export default Accounts;

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
