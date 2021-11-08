import styled from "styled-components";

export const StyledAnswer = styled.div`
  width: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
`;

export const StyledHead = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Proba Pro;
  color: #535353;
`;

export const StyledLine = styled.div`
  border: 1px solid lightgray;
  width: 100%;
  opacity: 0.5;
`;

export const StyledContent = styled.div`
  height: 200px;
  display: flex;

  h5 {
    font-size: 18px;
    font-weight: 300;
    margin-top: 5px;
  }

  @media (max-width: 800px) {
    height: 100px;
    h5 {
      font-size: 2vw;
    }
  }
`;

export const AvatarCircle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  color: #fff;
  font-size: 40px;
  background: #31b280;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Proba Pro;
  margin-right: 10px;

  @media (max-width: 800px) {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 4vw;
  }
`;

export const StyledComment = styled.div`
  margin-top: 40px;
`;

export const StyledReply = styled.div`
  position: absolute;
  bottom: 10px;
  left: 80px;
  height: 100px;
  width: calc(100% - 80px);
  display: flex;
  align-items: center;
  img {
    height: 100%;
  }
  input {
    height: 40px;
    width: 100%;
    margin-left: 10px;
    background-color: #f0f0f0;
    border: none;
    padding-left: 20px;
  }

  @media (max-width: 800px) {
    width: 80%;
    height: 50px;

    input {
      width: 60%;
      font-size: 1vw;
      height: 20px;
    }

    img {
      height: 30%;
    }
  }
`;
