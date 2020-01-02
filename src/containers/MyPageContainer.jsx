import React from 'react';
import styled from 'styled-components';

import ListContainer from 'containers/ListContainer';

import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

const Container = styled.div`
  display: flex;
  padding: 60px 0 0;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);

  img {
    display: block;
    width: 100%;
  }
`;

const ProfileInfo = styled.div`
  padding-left: 20px;
  flex: 2;

  h2 {
    font-size: 1.5rem;
    font-family: Noto Sans Medium;
    color: #333;
    margin-bottom: 2px;
  }

  p {
    font-size: 0.825rem;
    color: #5f76f3;
    margin-bottom: 10px;
  }

  .introduce {
    border-top: 1px solid #efefef;
    padding-top: 10px;

    p {
      color: #999;
      font-size: 0.825rem;
    }
  }
`;

const MyPageContainer = () => {
  return (
    <>
      <div className="container">
        <Container>
          <ProfileImage>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUXGBUVFxUVFRUVFRUVFxUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFysdHR0tLS0tLS0tLSsrLSsrLS0tLS0tLS0rKy0tLS0rLS0tLS0tLS0rLSstLS0tLSstLS0tK//AABEIAOEA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA+EAABAwEEBwYDBwMDBQAAAAABAAIRAwQFITEGEkFRYXGBIjKRocHwE7HhByNCUmJy0YKS8RQzshU0Q4PC/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIREBAQACAwACAwEBAAAAAAAAAAECEQMhMRJBIjJRgQT/2gAMAwEAAhEDEQA/AGpQl1UkKAJSHFOhIganAJUiIISSlJSIpYQEgKIUDwnBRbRa6bO84DhtVTV0soNMSTxAKqWyNDKRz25FwHMgLMXlpZTDZpHWJ3jLmszWvuq8yXHFX4s3OPSvitykHqnLzajeNXY53jKtbDpHUbGtDxt2O6bE+JM42qbKh3delKsOw7Ha04OHRTFNNkldadTFc9VAaoOtV04rkngohUNSQnIQJKJQmoBBKa5KgcE5uaQIDkQ4hcnLo98rmUDZRrIckhA6EJQkIRQVW3veYpiAcfeS73nbBTbxOQWOt1UvJO/b/CsjOV0gXneDnziY3bPqVVgEnipdop+/ouNBnaHNacku1WIMY07TMqCAtZeFAVaLA3MDH64ZrPOspbmIKmNayx0Wzu4qVUE47fIqM1sHHpsPQ7V1L4WmSMcWkFpII2g4jqtNcelEn4dcgOybUyB4O3Hjksm6piiu2RPvkpZsl09XCVZPQu/S/wC4qHtAdhx/E0ZtJ3jzC1kLDtLsQlCIQimwhKUiBpKROTUQiC5BKZKDrKBCViAMUCJrguhamkIBoSBie1NIQEJlVwaC4nACTOyM09UOmFuFKjq7XmP6Ri70HVC3UUl4Xgajy4ng0bm7OqhVa4OAy+Z9VTVbSXJ9mqYgbF0cu057NYw3xV9c1w6+MYdcVxuayfFcIGGXTcvTrou0NaN+33sXHLL6erj45rdUNluLgOgjrxVZfej5ILmjovTGWYQodoso3LHc7der08UtNn1cxh5fRQKjwcNuz/K9YvO4Wukhox2LH31ouQJZP7Ts/a4ZcvkumPJ/XHPg/jHldKTvwp9Wi4HEQQYPofe5cauBn37zXWPLZoMqupvD2mHNMg8R6L1W7ba2vSZVbk4ZbjkQeRleUV1qtAbwgvoHI9tvPJw+R8VMo1hW4BTYQ0ocVh0ISklEIhAhTYToSQgYU1dE1yB4TwMJTQlQBKaSnJIRCEoCWEoCKYsHp9aZqtYPwjHmcVvH4Yryq/quvXeeKsZyquClWClrGFwhbz7P9H9f754w/CPVXK6hhj8stNPofc+oxpcMc/qtpZ6agseymMSAEf8AXaDc6jfFcMe3syv0t4UWuFCp6RUHYNeDyXdtqa/EK1mG1GBV1tpAhWL3Krt9tY3vELLcYjSC7QSXAbDPHb/PgsVbmQfefv5r0q87ZRcO+Fgr7pgyWmR7j18l249vPzSeqomQu112s0qrH/lIJ5bfJRmFNldHmeyMIIBGRxToVPonaviWZk5t7J6GPRW6w6nFNISykJUUsJEpKZKqBNKcUyVFdGhOhCIQEJoCclhVDQEsJQnEIIV51NWm48D8l5PbHTUdzK9M0lqRTjesva7HRZY3atMPr1CXmocfhN+JqhrdxOXXkm9LMLl/nbL0G6zgN5C9u0UoatBsDZkvJLBYSHicIK9s0eoxRaOCxyV04Zq003YHEuqvJO4YADco9a6LJiSATxJKTSRtojVpAY5uOMDgNqxekN01WtY9mtXdqvbUDnO1muMar2tBGAgwAsYzf27Z9TettdQu6hMs+cq5sdmDRgsBolZ61MN13OJcTLTLtUfhk7D/ACV6Xd1LsglNdrvrfisvGrqgqg/0JrnHJX2ktOMN6prRaH0qQ1O89zabTBOrPeeY3NBPOFD6Q7Vo9QZ33Sd0jBY+/LOxhIbkQRv5LnfTbSa/w/vOyS3XD3ObUGtg+cGtw2BRLwpOaSC6doxmBxK64zV9cM8tzxSjApCh+ZQ5dXlbX7PrRhUZyd6ei2AXnWg1fVtEfmafIheiLF9dMfChBQCkJRSJEShAsJpCemOKg6BOCIQEUsIATgkKqElCEIM7pI6SRuA8yf4Rou0VKNpp4F2p2eE6pB6OEqLfj5JO93kIHzlP0CqA2h7D+KmR/a4zHKQs5/q6cV/PX9c613PkVXTBd+XV2iZjCV6ddghjRwCq7+ozQjV7oMOAwJGJx6KbdVWWNPALja9Ux7XAYDsUW0WBpUqhUXVzVqds3qq2y3U0GYVi1sJzHAJhqSVUttUWlXclQrA4PYFY6SMmm7gFnNG7TMt3FZqxPtdga7YsppLdbWsLgMffvot5UGCy2lTwabgkvbWU3i8pqjtJpT7QO0eaa9ep81LuCtqWimf1R4yF6u0rxyi+HA7iD6r12w1dZgO/H35rNbxdwkKcmlRSFEolNKB8pjillI5BIhJqpyY8qB4QmkJFR0hBKQOTK7uyTwQY683fInxMqkbbH0K1OqzvNe4jcRgS08CCR1VneFTtHgGqmvEd3n6LUZvT2GhfdCvR1nODA6nJ1iBqzIEnLYfBLo/VBpiDPEZRsXl2k18m2ClNNrNRmp2fxQAJy4cVr/s8tmtRa0nFvZ6Du+ULhlhrt6uPl+V09ApFSg/BQqRUhjlmOlI4Eqmve02ppYyz0g4lw1y4loDdpBG1aBrgoVtvKlT7zgDu2q0x3bqTbG6VXjaQ0tawuJMEzDerlD0ba/42A7OrBdsJnZv2rQW686JZDnCSZjgVHslpZ+GOiy3cbPZpY2p0ArEaTWqAVp7ba8F5/pNaJlXGdsZZajL2sdo80xwwC62nETwH8Jg7nj6fyvU+e4DNepaN1taiw8I64Ly1eiaFVJogbv5Wa1GkSFKm6yjQISEIJTXuQEpCgJCgkyU1zsUpKaTioOhKaUIQCj2933blJCrr6qarD7ykoMXaakuqc2jwlVtudkpLKkh3E+n+VCtBmOGC3GL4k2bEciPPNXOit4fAtGqTDX4Hgdh971SWE9ojePoulobkdo849lLNxcbrt7jZa0gKUHrE6F3qX0Wh5kiWzvjKeMQtbTdK8vj3ezaBf951abPuqZc44YRDeJ4Lz2tZ7S5+tUJMnEiSd8RkvU3MkRCo7ddDzJp4c8lLNvV/z82GG5Y89t9J8AguyjER6pbjtlRlQU8SD5K/t91WggtMDkodhu74JJOJO0qxrm5eOzWO6s7bWhpKwF+2qXFaO/LdDYWGtlXWK64R83ly607nGmOM+RP0TaHcd0Tmj7tvVcqB7w4H0XV5jIW50Gf92Rx9Vh4Wp0HrYubxB8R9EvhPW5JSSE0FKstkJTZSkJqgcEJQkQdwkhOATUU8JAhKqhQVnNK7TDIGcfPZ5K+qPgSsTpbXwzxP0EeEoKiwYtPOFHrZdfUrrdx7B5hcauQ6/MrbF8PpmHD37zUqpmeh9+KhPOIUoO7f9PqiRqtA6k61M9PT5+S3NKs6ng7L838rzrQ2pFY8C3wMr1T4Qc1eXP8AZ7uO/jHSjXBXeraGgKjr2dzO6emzpuVda7dUbmPBSVvUWlvtDYJWLve8RJhJeN6OOwrO2vXfwHvarEyqsva2lxMKnU6104UNgxXoxnTyZXvtNB7AHvauVnzPIrrq9nqPkVyoDHofktORGZHgrTRm0alYDYf/AJx+UqrPeKfZX6r2kZgg+alHrjDI5pCVGu2sHUxw9++S7krLoE0pZTXFQPlCbKTWQTGnCE1wxTgkJxQKUiCuFZxCDnaHaxgbM1gNLas1dUbIHXEn5rc1agp0y4nj12ea84vd5NV05yfLAfJajOR92nA82/NciZA5epTbPU1WnifQ/RND8lpg52Y8VKs+LidwA9VEpY4+4GJU1jSGE7T65KWtYzteaFtJrE+8DIXrVkOC8+0HsECY4r0GyiBC82V3XtxmsdH1qUqot1lwV8VDtTcFGowd42PHJQq1ihuS1Nts+Kr7TSwTZY8/vmzRKpKDcVs7+svZKyzLOQ7L2MF3wvTy8s7Pqd0dT5QuFnGPQjyUuu3Dy/lR7OMQujjXOoMQmPwK61ximVgg9A0atGtTHEA+OB8wfFXYWM0MtMgsnfHkfVy2DDIWK3PDk1yUpjlFLKaSiUOQT3CE2Fz+Im1bQGgucQ0DaSABzlFSGHFRbfly9VXt0jsxdqis2d+Mf3HBSbY+WnHMb1UV14VtaC44CCGjbx8AR1Xn9dxe9zt5PzKvbztxAc2RjgIzGOXz8lQF4HNajFpHYYbvntStBOA/wut3WKpWcW02Fx4bBvJ2La3B9nloqEF4DRxOPgFU0zt2XeXkYHHBoGbum5ejXboE40XGp33AwNx2ei1uj2ilGzYgaz/zH03LRtpp8d+ukuvGE0csoDAIgjAjcRgR4q81IVlabpa5xe3su2kZO/cNvNQ6lF7e82eLcR/K8+XHY9EzlMUeuu+sFyc1YbVVopqsr0ZWldZ5UN9icTDWk8lNNbjJXrd8t6z5FZi2XfAcQMpdyx/yvWzcLnN7cDgMScMicgs1fNgDaTgAMDUbzBgAnwK7Y4Ze1wzzx+nl1Tu9fQ/RcKeTeal3g3VJHF30+SjgYDn/AIXaPLl65WsQ7qVxqH5BSbc3tDiAobzign6P2v4dYY4HD35r0mk8R4/NeSLqyu8ZOd0JWbGt6ervqACSYC4ttDTGOeQ2xvhebV7zquaGmoSBlJ852nmoes6ZkzvnHxT4rt6xrJCV5vYL6r0iIeXN2teS4eeI6LcXPebbQzWbgRg5p2GN+0cVLF2tqjwwFziAACSTsAzK82v++nWh+ZFMHst4fmdvPyV/p7bi0MotPe7TuQMNHjJ6BYqFZEtKpdG8arW6oe7V3TkoaJWmXVz53psgJuvuTUNNJoLfbbJbKdSoB8In4dSRMNdHb/pMHlK+kabRAiIzEREcIXyYSvWvsq0+a1rLFanRENoVXHCNlJ52fpPTdNlWPXQE6EiWVpSpCESiUHKrZ2uzaD0WS07vmjd9nNSJqOOrTZJhzsyT+kDE/VX9/XzRslF1as8NaPFx2NaNpO5fOmmGktS32g1XjVaOzTZPcbP/ACOZ+ixlIvys8e96IXrRt1mZaGNAPdewnWNOoI1mk9QQYxBCvRC+cdA9Ln3dX1oLqL4FWmNoGT2/rbJ54jiPoW77dStFJtai8PpuEhzfMHcRtByVx0m7XWsMCshflnlruvhJBPy8Vr3FUdel94W7CI9Vqo8M0gZq1HD37mVVsqYeC1P2hWQMqAjbLTzz9SsgAucTL1NvEYNPvaq56m1X61LlCgu2KhqWUBCigpqEEoEWg0MterWLCcHjD9zcR5ayz6fQqljg5pgtIIPEIq40ttGvaqm5sMH9Ix85VLKlXhV1qtR297z0LioxRmEhCEIoShIhAqEiEG90O+0602MNpVh/qKIwAcYqsG5jzmODvEL1i49PbutQAZaGsef/AB1vunTuGtg7oSvmpCux9ZVrwosGs6tTaN5qNA8SVjdI/tSsNnBFF3+pqbBT/wBsH9VTKOUr5/1RuCFdi40m0ltFvq/EruwHcptwYwbmjfxOKqEiFkCttH9I7VYn61nqlk95neY/9zDgeefFVKEHrd1fbGCALVZjO19A4H/1vOH9xU+t9plgLtYGtll8LGZnfG5eLJQrsaXSzSJtrfLGOa0Oc4axEmcsBlgs+FzldAolOouwLd65OSnAocqhianpijUDkiUpIRQn0my4DeQPEpi7WRpNRgGZc0D+4IGvKYpd6WYU6r2DJrnAcgcFElGYEIQigIQhAIQhFCEiVAJEIQCVIhAqAhCBUqYllE0eugXELs1EplRIClekARCnJc11dkuSNQEpEqECKwuFs2ikP1T4An0UBW+ilObS0/lDneUeqfSuWkf/AHNb97vmqxCESFCEIQBQhCoEFCFAiVCEAkQhFAQhCASlCEQJEIRSrtT2dfRCEZoekQhEMd6pqEI1AUiEIBXuh3++f2O/5NSoS+K//9k="
              alt="profile_img"
            />
          </ProfileImage>
          <ProfileInfo>
            <h2>아이유</h2>
            <p>@IU_OFFICIAL</p>
            <div className="introduce">
              <p>
                한줄소개: 안녕하세요 아이유 입니다!! 최근에 프로그래밍을 알게
                돼서 같이 할 사람을 찾으려고 오게 됐습니다!! 잘부탁드립니다!
              </p>
            </div>
          </ProfileInfo>
        </Container>
        <Container>
          <div className="mypage-tab pb-20" style={{ width: '100%' }}>
            <Tabs type="card">
              <TabPane
                tab={
                  <span>
                    <Icon type="team" />
                    내가 신청한 팀
                  </span>
                }
                key="1"
              >
                <ListContainer />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="user-add" />
                    내가 만든 팀
                  </span>
                }
                key="2"
              >
                내가 만든 팀 리스트
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="heart" />
                    좋아요한 팀
                  </span>
                }
                key="3"
              >
                즐겨찾기 리스트
              </TabPane>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyPageContainer;
