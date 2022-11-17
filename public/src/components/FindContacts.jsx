import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logos.webp";

export default function FindContacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    //setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container >
          <div className="current-user">
            <div className="avatar">
              <img
                src={`${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>

          
          <div className="brand">
            <a href="/">Chats</a>
            <a >Matches</a>
          </div>

          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >                  
                    <div className="avatar">
                        <img
                        src={`${contact.avatarImage}`}
                        alt=""
                        />
                        <div class="usernameCard">
                          <span style={{color:"white"}}>{contact.username}</span>
                        </div>
                    </div>
                    <div className="avatar">
                        <img
                        src={`${contact.avatarImage}`}
                        alt=""
                        />
                        <div class="usernameCard">
                          <span style={{color:"white"}}>{contact.username}</span>
                        </div>
                    </div>
                    <div className="avatar">
                        <img
                        src={`${contact.avatarImage}`}
                        alt=""
                        />
                        <div class="usernameCard">
                          <span style={{color:"white"}}>{contact.username}</span>
                        </div>
                    </div>
                </div>
              );
            })}
          </div>
          
          
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 5% 85%;
  overflow: hidden;
  background-color:#168DB6;
  border:1px solid black;

  
  .brand {
    
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    a {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 5px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
  .contacts {
    background-color:black;
    border:1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      background-color:black;
      width: 0.2rem;

      &-thumb {
        
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      
      .avatar {
        position: relative;
        display: inline-block;
        text-align: center;

        .usernameCard {          
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        img {          
          border-radius:.5rem;
          height: 6.7rem;
          width: 6rem;
        }
      }
    }
    .selected {
      background-color: #2F403C;
    }
  }

  .current-user {
    background-image: linear-gradient(to right bottom, #ff0021, #ff0050, #eb0083, #b400b9, #080be9);
    border:1px solid black;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;
    .avatar {
      img {
        height: 3rem;
        width:3rem;
        border-radius:3rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: Black;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 100%) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
