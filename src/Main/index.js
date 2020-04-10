import React, {Component} from 'react';
import { Keyboard, ActivityIndicator,FlatList } from 'react-native';

import api from '../services/api';

import { Ionicons } from '@expo/vector-icons';
import { Container, Form, Input, SubmitButton, List, User, Avatar, Name, Bio,ProfileButton,ProfileButtonText  } from './styled';

export default class Main extends Component{
    state = {
        newUser: '',
        users: [],
        loading: false
    };

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        this.setState({ loading:true });

        const response = await api.get(`/users/${newUser}`);

        const data = {
            name: response.data.name,
            login: response.data.login,
            avatar_url: response.data.avatar_url,
            bio: response.data.bio,
        }

        this.setState({
            users: [...users, data],
            newUser: '',
            loading:false

        });

        Keyboard.dismiss();
    }

    render(){
        const { users, newUser, loading } = this.state;
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCaptalize="none"
                    placeholder="Adicionar Usuario"
                    value={newUser}
                    onChangeText= {text => this.setState({ newUser: text })}
                    returnKeyType="send"
                    onSubmitEdit={this.handleAddUser}
                />
                <SubmitButton onPress={this.handleAddUser} loading={loading}>
                    {loading ? <ActivityIndicator color="#fff" /> : <Ionicons name="md-add" size={32} color="white" />}

                </SubmitButton>
            </Form>

            <List
                data={users}
                keyExtractor={user => user.login}
                renderItem={({ item }) => (
                    <User>
                        <Avatar source={{ uri: item.avatar_url }} />
                        <Name>{item.name}</Name>
                        <Bio>{item.bio}</Bio>

                        <ProfileButton onPress={() => {}}>
                            <ProfileButtonText>Ver perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
    }
}
