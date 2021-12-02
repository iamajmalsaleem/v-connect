import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import router from 'next/router';
import getRecipientEmail from '../utils/getRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat({id, users}) {

  const [user] = useAuthState(auth)

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }

  const recipientEmail = getRecipientEmail(users, user)
  const [recipientSnapshot] = useCollection(
    db.collection('users').where('email', '==', recipientEmail)
  );
  const recipient = recipientSnapshot?.docs?.[0]?.data();


    return (
        <Container onClick = {enterChat}>
          
          {recipient ? (
            <UserAvatar src={recipient?.photoURL} />
          ) : (
            <UserAvatar>{recipientEmail[0]+recipientEmail[1]}</UserAvatar> 
          )} 
          
            <p>{recipientEmail}</p>
        </Container>
    )
} 

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: honeydew;
    color: darkcyan;
    border-right: 5px ridge darkcyan;
    border-radius: 5px;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;  
`;