import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-color: #ccc;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    padding: 0 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: green;
    padding: 0 12px;
    margin-left: 5px;
    border-radius: 4px;
    opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #eee;
`;
export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;
export const Bio = styled.Text.attrs({
    numberOfLiner: 2,
})`
    font-size: 13px;
    color: #333;
    margin-top: 5px;
    text-align: center;
`;
export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    background: green;
    height: 36px;
    align-items: center;
    justify-content: center;
`;
export const ProfileButtonText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;
