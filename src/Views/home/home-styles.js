import { StyleSheet } from "react-native";
import colors, { coolGray } from 'tailwindcss/colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.sky[500],
        paddingTop: 40,
    },
    header: {
        alignItems: 'flex-start',
        alignContent: "center",
        flexDirection: 'row',
        marginTop: 15,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    citytittle: {
        fontSize: 35,
        fontWeight: '950',
        color: '#fff',
    },
    storyView: {
        paddingVertical: 4,
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.neutral[100],
    },       
});

export default styles