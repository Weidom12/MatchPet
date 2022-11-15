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
        <Container>
          <div className="current-user">
            <h3>Encuentra tu match </h3>
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
                    </div>
                    <div className="avatar">
                        <img
                        src={`${contact.avatarImage}`}
                        alt=""
                        />
                    </div>
                    <div className="avatar">
                        <img
                        src={`${contact.avatarImage}`}
                        alt=""
                        />
                    </div>
                </div>
              );
            })}
          </div>
          <div className="brand">
            <img src={Logo} alt="logo" width={50} height={50}/>
            <h3>Matchpet</h3>
          </div>
          
          
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color:#168DB6;
  border:1px solid black;
  
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: White;
      text-transform: uppercase;
    }
  }
  .contacts {
    background-color:#168DB6;
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
        img {          
          border-radius:5rem;
          height: 5rem;
          width: 5rem;
        }
      }
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: Black;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
