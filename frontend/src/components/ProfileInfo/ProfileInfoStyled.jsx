import styled from "styled-components";

export const ProfileDivWrapper = styled.div`
  width: 1152px;
  height: 400px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
`;

export const ProfileColumnLeft = styled.div`
  width: 27%;
  height: 100%;
  border: 1px lightgray solid;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileColumnRight = styled.div`
  width: 73%;
  height: 100%;
  border: 1px lightgray solid;
  box-sizing: border-box;
`;

export const ProfileColumnRightTopRow = styled.div`
  width: 100%;
  height: 66%;
  border: 1px lightgray solid;
  box-sizing: border-box;
  display: flex;
`;

export const ProfileColumnRightBottomRow = styled.div`
  width: 100%;
  height: 34%;
  border: 1px lightgray solid;
  box-sizing: border-box;
  display: flex;
`;

export const UserStatsDiv = styled.div`
  width: 20%;
  height: 100%;
  /* border: 1px lightgray solid; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutEmailPhoneDiv = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const ThingsILikeDiv = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

export const AboutDiv = styled.div`
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  padding: 20px;
`;

export const EmailDiv = styled.div`
  width: 50%;
  height: 40%;
  box-sizing: border-box;
  padding: 20px;
`;

export const PhoneDiv = styled.div`
  width: 50%;
  height: 40%;
  box-sizing: border-box;
  padding: 20px;
`;

export const NameDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 24px;
`;

export const NumDiv = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const DescriptionDiv = styled.div`
  margin-bottom: 5px;
`;

export const ThingsILikeList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const LikeListItemWrapper = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-left: 8px;
  margin-top: 8px;
`;

export const MainAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
