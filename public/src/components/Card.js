import React from "react";
import styled from "styled-components";

export const Card = props => {
  return (
    <Container>
      <div
        className={`card ${props.isSwiped ? "card-swiped" : ""}`}
        style={{
          backgroundImage: `url(${props.avatarImage})`
          
        }}      
      >  
          <div className="info">
            <div className="name">
              <span>
                <svg style={{ width: "10px", height: "10px" }} viewBox="0 0 24 24">
                  <path
                    fill="#01cb6f"
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </span>
              <span>{props.username}</span>
              <span className="age">{props.age}</span>
              <span className="prefecture">{props.prefecture}</span>

              <span className="percent">
                <span>
                  <svg
                    style={{ width: "10px", height: "10px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#f67272"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </span>
                <span>{props.rate}%</span>
              </span>
              <div className="BoxDescription">
                <span className="Description">{props.Description}</span>
              </div>
            </div>
          </div>
      
      </div>
      </Container>
  );
};

const Container = styled.div`
.title {
  width: 100%;
  color: rgb(84, 89, 93);
  font-size: 18px;
  margin: 8px auto;
}

.card-container {
  position: relative;
  width: 300px;
  height: 450px;
  margin: auto;
}

.card {
  margin: auto;
  width: 300px;
  height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04), 0 12px 20px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  background-color: #fff;
  background-size: cover;
  background-position: center;
}

.card-swiped {
  transform: translate(400px) rotate(50deg);
  opacity: 0;
  transition: all 1s ease-in-out;
}

.card-swipedF {
  transform: translate(400px) rotate(-50deg);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.image {
  width: 100%;
  height: 450px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
}

.info {
  background: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  padding: 16px 12px;
  border-radius: 0 16px 16px;
}

.name {
  color: #fff;
  text-align: left;
  padding-left: 8px;
  font-size: 16px;
}

.age,
.prefecture,
.percent {
  margin-left: 8px;
}

.percent {
  font-size: 12px;
}

.BoxDescriptions {
  
  background: #fff;
  text-align: left;
  padding: 12px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: 12px;
}

.Description{
  margin-right: 4px;
  background-color: gray;
  color: #00c4cc;
  background-color: rgba(83, 183, 187, 0.1);
  padding: 4px 12px;
  border-radius: 12px;
}

.buttons {
  margin-top: 56px;
  display: flex;
  justify-content: center;
}

.button-next,
.button-match {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0px;
  appearance: none;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.04), 0 12px 20px 0 rgba(0, 0, 0, 0.12);
}

.button-next {
  margin-left: 35px;
}
`