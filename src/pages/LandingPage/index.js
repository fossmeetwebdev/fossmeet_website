import React from "react";

import { Column, Stack, Image, Row, Text, List, Input, Line } from "components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
const LandingPagePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-lato items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] w-[100%]">
            <Image
              src={"images/img_frame5.svg"}
              className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] object-cover w-[100%]"
              alt="Frame5"
            />
            <header className="absolute top-[0] w-[100%]">
              <Row className="bg-white_A700 items-center justify-start pl-[108px] 3xl:pl-[97px] pr-[109px] 3xl:pr-[98px] lg:px-[63px] xl:px-[72px] 2xl:px-[81px] lg:py-[13px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] py-[23px] w-[100%]">
                <Stack className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[82px] w-[13%]">
                  <Image
                    src={"images/img_vector.svg"}
                    className="absolute lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] h-[82px] inset-[0] object-cover w-[100%]"
                    alt="Vector"
                  />
                  <Text className="font-jetbrainsmono absolute font-extrabold h-[max-content] inset-[0] justify-center m-[auto] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[33px] text-[37px] text-black_900 text-left w-[max-content]">{`FOSSMeet'22`}</Text>
                </Stack>
                <Row className="font-jetbrainsmono items-center justify-center lg:ml-[177px] xl:ml-[202px] 2xl:ml-[228px] 3xl:ml-[273px] ml-[304px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] my-[25px] w-[33%]">
                  <Text className="cursor-pointer hover:font-light font-light lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`About`}</Text>
                  <Text className="cursor-pointer hover:font-light font-light lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`FAQ`}</Text>
                  <Text className="cursor-pointer hover:font-light font-light lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`Contacts`}</Text>
                  <Text className="cursor-pointer hover:font-light font-light lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`Code of Conduct`}</Text>
                </Row>
                <Row className="font-jetbrainsmono items-center justify-center lg:ml-[155px] xl:ml-[178px] 2xl:ml-[200px] 3xl:ml-[240px] ml-[267px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[14%]">
                  <Text className="font-light my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`Login`}</Text>
                  <Text className="bg-blue_A400 font-light leading-[normal] lg:ml-[50px] py-[11px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius10 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]  text-white_A700 w-[100%]">{`Register`}</Text>
                </Row>
              </Row>
            </header>
          </Stack>
          <Column className="absolute bottom-[5%] font-jetbrainsmono inset-x-[0] items-start justify-start mx-[auto] w-[88%]">
            <Column className="w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="items-start mb-[102px] lg:mb-[59px] 2xl:mb-[76px] 3xl:mb-[91px] mt-[103px] lg:mt-[60px] 2xl:mt-[77px] 3xl:mt-[92px] xl:my-[68px] w-[34%]">
                  <Text className="font-bold leading-[normal] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-[80px] text-black_900 text-left w-[100%]">{`It’s Free and Open.`}</Text>
                  <Text className="font-normal leading-[normal] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] mt-[50px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-black_900 text-left w-[100%]">
                    <span className="text-black_900 font-jetbrainsmono">
                      <>{`Nope, not like `}</>
                    </span>
                    <span className="text-black_900 font-jetbrainsmono font-bold italic">
                      <>{`free`}</>
                    </span>
                    <span className="text-black_900 font-jetbrainsmono">
                      <>{` beer at an `}</>
                    </span>
                    <span className="text-black_900 font-jetbrainsmono font-bold italic">
                      <>{`open`}</>
                    </span>
                    <span className="text-black_900 font-jetbrainsmono">
                      <>{` bar. It's much more than that`}</>
                    </span>
                  </Text>
                  <Text className="bg-blue_A400 font-light leading-[normal] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] mt-[50px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] pl-[25px] py-[11px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius30 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]  text-white_A700 w-[29%]">{`Register`}</Text>
                </Column>
                <Image
                  src={"images/img_landingpageil.svg"}
                  className="lg:h-[407px] xl:h-[466px] 2xl:h-[524px] 3xl:h-[628px] h-[697px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] object-contain w-[62%]"
                  alt="LandingPageIl"
                />
              </Row>
            </Column>
            <div className="bg-white_A700 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] lg:ml-[450px] xl:ml-[515px] 2xl:ml-[580px] 3xl:ml-[696px] ml-[773px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] mt-[53px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"></div>
          </Column>
        </Stack>
        <List
          className="font-jetbrainsmono gap-[0] min-h-[auto] w-[100%]"
          orientation="vertical"
        >
          <Stack className="h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] w-[100%]">
              <Image
                src={"images/img_frame7.svg"}
                className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] object-cover w-[100%]"
                alt="Frame7"
              />
              <Image
                src={"images/img_fossmeetexpo.png"}
                className="absolute bottom-[0] lg:h-[348px] xl:h-[397px] 2xl:h-[447px] 3xl:h-[536px] h-[595px] inset-x-[0] mx-[auto] object-contain w-[81%]"
                alt="FOSSMeetExpo"
              />
            </Stack>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[64%]">
              <Text className="font-normal mx-[auto] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-black_900 text-left w-[auto]">
                <span className="text-black_900 font-jetbrainsmono font-bold italic">
                  <>{`What`}</>
                </span>
                <span className="text-black_900 font-jetbrainsmono">
                  <>{` is FossMeet?`}</>
                </span>
              </Text>
              <Text className="font-medium leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[100%]">{`An annual gathering to celebrate the freedom in FOSS featuring exciting events, workshops, and brilliant speakers.`}</Text>
            </Column>
          </Stack>
          <Stack className="h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] w-[100%]">
              <Image
                src={"images/img_frame14.svg"}
                className="absolute h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] object-cover w-[100%]"
                alt="Frame14"
              />
              <Image
                src={"images/img_linusandrmst.png"}
                className="absolute bottom-[0] lg:h-[406px] xl:h-[465px] 2xl:h-[523px] 3xl:h-[627px] h-[696px] object-cover w-[100%]"
                alt="LinusandRMSt"
              />
            </Stack>
            <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[8%] w-[64%]">
              <Text className="font-normal mx-[auto] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-black_900 text-left w-[auto]">
                <span className="text-black_900 font-jetbrainsmono font-bold italic">
                  <>{`Why`}</>
                </span>
                <span className="text-black_900 font-jetbrainsmono">
                  <>{` are we conducting it?`}</>
                </span>
              </Text>
              <Text className="font-medium leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[100%]">{`We believe in collaboration for the growth of technology and society.`}</Text>
            </Column>
          </Stack>
        </List>
        <Stack className="font-jetbrainsmono lg:h-[1260px] xl:h-[1442px] 2xl:h-[1622px] 3xl:h-[1946px] h-[2160px] w-[100%]">
          <Column className="absolute inset-[0] w-[100%]">
            <div className="bg-white_A700 h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]"></div>
            <Stack className="h-[1082px] lg:h-[632px] xl:h-[722px] 2xl:h-[813px] 3xl:h-[975px] w-[100%]">
              <Image
                src={"images/img_rectangle158.png"}
                className="absolute h-[1082px] lg:h-[632px] xl:h-[722px] 2xl:h-[813px] 3xl:h-[975px] object-contain right-[0] w-[47%]"
                alt="Rectangle158"
              />
              <Row className="absolute bg-gray_50 inset-[0] items-start justify-start xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] pb-[154px] lg:pb-[89px] lg:ml-[150px] 2xl:pr-[1004px] 3xl:pr-[1204px] pr-[1338px] lg:pr-[780px] xl:pr-[892px] lg:pt-[508px] xl:pt-[581px] 2xl:pt-[654px] 3xl:pt-[785px] pt-[872px] w-[100%]">
              
              <h1>
              <Badge pill bg="primary">
                Register
                    </Badge>{' '}
              </h1>
              <h1 style={{ marginLeft: '.5rem' }}>      
                  <Badge pill bg="primary">
                    Get tickets
              </Badge>{' '}
              </h1>
        
              </Row>
            </Stack>
          </Column>
          <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[5%] w-[83%]">
            <Column className="items-center lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] w-[100%]">
              <Text className="font-normal mx-[auto] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-black_900 text-left w-[auto]">
                <span className="text-black_900 font-jetbrainsmono font-bold italic">
                  <>{`Who`}</>
                </span>
                <span className="text-black_900 font-jetbrainsmono">
                  <>{` is it for?`}</>
                </span>
              </Text>
              <Row className="items-end justify-start mt-[102px] lg:mt-[59px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] mx-[auto] w-[98%]">
                <Column className="items-center justify-start lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] mt-[36px] w-[26%]">
                  <Text className="font-medium mx-[auto] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[auto]">{`Students`}</Text>
                  <Image
                    src={"images/img_student1.svg"}
                    className="lg:h-[208px] xl:h-[237px] 2xl:h-[267px] 3xl:h-[320px] h-[355px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] mx-[auto] object-contain w-[58%]"
                    alt="Student1"
                  />
                  <Text className="font-medium leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-center w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus.`}</Text>
                </Column>
                <Column className="items-center justify-start 2xl:ml-[102px] 3xl:ml-[122px] ml-[136px] lg:ml-[79px] xl:ml-[90px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[26%]">
                  <Text className="font-medium mx-[auto] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[auto]">{`Teachers`}</Text>
                  <Image
                    src={"images/img_teacher1.svg"}
                    className="lg:h-[195px] xl:h-[223px] 2xl:h-[250px] 3xl:h-[300px] h-[333px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] object-contain w-[57%]"
                    alt="Teacher1"
                  />
                  <Text className="font-medium leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-center w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus.`}</Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] w-[36%]">
                  <Text className="font-medium leading-[normal] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-center w-[100%]">
                    {
                      <>
                        {`Coding `}
                        <br />
                        {`Enthusiasts`}
                      </>
                    }
                  </Text>
                  <Image
                    src={"images/img_coders1.svg"}
                    className="lg:h-[194px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[299px] h-[331px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] mt-[58px] mx-[auto] object-contain w-[50%]"
                    alt="Coders1"
                  />
                  <Text className="font-medium leading-[normal] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-center w-[74%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus.`}</Text>
                </Column>
              </Row>
            </Column>
            <Text className="font-normal lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[162px] xl:mt-[185px] 2xl:mt-[208px] 3xl:mt-[250px] mt-[278px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px] text-black_900 text-left w-[auto]">
              <span className="text-black_900 font-jetbrainsmono">
                <>{`And `}</>
              </span>
              <span className="text-black_900 font-jetbrainsmono font-bold italic">
                <>{`finally`}</>
              </span>
              <span className="text-black_900 font-jetbrainsmono">
                <>{`, when and where is it?`}</>
              </span>
            </Text>
            <Text className="font-normal lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] mt-[73px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-black_900 text-left w-[auto]">{`23/02/2023`}</Text>
            <Text className="font-bold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-black_900 text-left w-[auto]">{`at`}</Text>
            <Text className="font-bold leading-[normal] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px] text-black_900 text-left w-[44%]">{`National Institute of Technology, Calicut`}</Text>
            <Text className="font-normal leading-[normal] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] ml-[6px] xl:mt-[102px] 2xl:mt-[115px] 3xl:mt-[138px] mt-[154px] lg:mt-[89px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 text-left w-[44%]">
              <span className="text-black_900 font-jetbrainsmono">
                <>{`Save the date for the exciting `}</>
              </span>
              <span className="text-black_900 font-jetbrainsmono font-bold italic">
                <>{`3 day`}</>
              </span>
              <span className="text-black_900 font-jetbrainsmono">
                <>{` event. See y’all there`}</>
              </span>
            </Text>
          </Column>
        </Stack>
        <Stack className="font-jetbrainsmono lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] w-[100%]">
          <div className="absolute bg-white_A700 lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] h-[600px] inset-[0] w-[100%]"></div>
          <Column className="absolute inset-x-[0] items-start justify-start mx-[auto] top-[22%] w-[84%]">
            <Text className="font-normal xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`A huge thank you to`}</Text>
            <Text className="font-bold xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`Our Sponsors`}</Text>
            <Column className="lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] w-[100%]">
              <Row className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] gap-[40px] grid grid-cols-4 items-center justify-between w-[100%]">
                <Stack className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] w-[100%]">
                  <Image
                    src={"images/img_group2258.svg"}
                    className="absolute xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] inset-[0] object-cover w-[100%]"
                    alt="Group2258"
                  />
                  <Image
                    src={"images/img_nilenso1.png"}
                    className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67px] inset-[0] justify-center m-[auto] object-contain w-[71%]"
                    alt="nilenso1"
                  />
                </Stack>
                <Stack className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] w-[100%]">
                  <Image
                    src={"images/img_group2259.svg"}
                    className="absolute xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] inset-[0] object-cover w-[100%]"
                    alt="Group2259"
                  />
                  <Image
                    src={"images/img_fossee1.png"}
                    className="absolute lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[79px] inset-[0] justify-center m-[auto] object-contain w-[55%]"
                    alt="fossee1"
                  />
                </Stack>
                <Image
                  src={"images/img_group2264.png"}
                  className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] object-contain w-[100%]"
                  alt="Group2264"
                />
                <Stack className="xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] w-[100%]">
                  <Image
                    src={"images/img_group2261.svg"}
                    className="absolute xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] h-[164px] lg:h-[96px] inset-[0] object-cover w-[100%]"
                    alt="Group2261"
                  />
                  <Image
                    src={"images/img_stickermule1.png"}
                    className="absolute 3xl:h-[108px] h-[119px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] inset-[0] justify-center m-[auto] object-contain w-[55%]"
                    alt="stickermule1"
                  />
                </Stack>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Stack className="font-jetbrainsmono lg:h-[530px] xl:h-[606px] 2xl:h-[682px] 3xl:h-[818px] h-[908px] w-[100%]">
          <div className="absolute bg-gray_50 lg:h-[530px] xl:h-[606px] 2xl:h-[682px] 3xl:h-[818px] h-[908px] inset-[0] w-[100%]"></div>
          <Column className="absolute items-start justify-start left-[10%] top-[13%] w-[75%]">
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`Testimonials`}</Text>
            <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`What people say about FOSSMeet`}</Text>
            <Column className="lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] mt-[78px] w-[100%]">
              <List
                className="lg:gap-[37px] xl:gap-[42px] 2xl:gap-[48px] 3xl:gap-[57px] gap-[64px] grid grid-cols-4 min-h-[auto] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-start justify-start lg:pb-[18px] xl:pb-[21px] 3xl:pb-[28px] pb-[32px] lg:pt-[19px] xl:pt-[22px] 3xl:pt-[29px] pt-[33px] 2xl:py-[24px] rounded-radius10 shadow-bs w-[100%]">
                  <Text className="font-extrabold font-jetbrainsmono lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`“`}</Text>
                  <Text className="font-normal font-opensans lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] leading-[30.00px] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[74%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis sodales lorem in tincidunt. Nulla vel ante sem. Quisque sodales, leo in convallis pulvinar, ipsum.`}</Text>
                  <Column className="font-opensans lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]">
                    <Row className="items-start justify-start lg:pl-[23px] xl:pl-[27px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[41px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
                      <Image
                        src={"images/img_ellipse63.png"}
                        className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse63"
                      />
                      <Column className="items-start justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] w-[31%]">
                        <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]">{`Peter`}</Text>
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[15px] lg:text-[8px] text-bluegray_900 text-left w-[auto]">{`Student, NITC`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-start justify-start lg:pb-[18px] xl:pb-[21px] 3xl:pb-[28px] pb-[32px] lg:pt-[19px] xl:pt-[22px] 3xl:pt-[29px] pt-[33px] 2xl:py-[24px] rounded-radius10 shadow-bs w-[100%]">
                  <Text className="font-extrabold font-jetbrainsmono lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`“`}</Text>
                  <Text className="font-normal font-opensans lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] leading-[30.00px] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[74%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis sodales lorem in tincidunt. Nulla vel ante sem. Quisque sodales, leo in convallis pulvinar, ipsum.`}</Text>
                  <Column className="font-opensans lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]">
                    <Row className="items-start justify-start lg:pl-[23px] xl:pl-[27px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[41px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
                      <Image
                        src={"images/img_ellipse63_1.png"}
                        className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse63"
                      />
                      <Column className="items-start justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] w-[31%]">
                        <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]">{`Peter`}</Text>
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[15px] lg:text-[8px] text-bluegray_900 text-left w-[auto]">{`Student, NITC`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-start justify-start lg:pb-[18px] xl:pb-[21px] 3xl:pb-[28px] pb-[32px] lg:pt-[19px] xl:pt-[22px] 3xl:pt-[29px] pt-[33px] 2xl:py-[24px] rounded-radius10 shadow-bs w-[100%]">
                  <Text className="font-extrabold font-jetbrainsmono lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`“`}</Text>
                  <Text className="font-normal font-opensans lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] leading-[30.00px] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[74%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis sodales lorem in tincidunt. Nulla vel ante sem. Quisque sodales, leo in convallis pulvinar, ipsum.`}</Text>
                  <Column className="font-opensans lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]">
                    <Row className="items-start justify-start lg:pl-[23px] xl:pl-[27px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[41px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
                      <Image
                        src={"images/img_ellipse63_2.png"}
                        className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse63"
                      />
                      <Column className="items-start justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] w-[31%]">
                        <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]">{`Peter`}</Text>
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[15px] lg:text-[8px] text-bluegray_900 text-left w-[auto]">{`Student, NITC`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-start justify-start lg:pb-[18px] xl:pb-[21px] 3xl:pb-[28px] pb-[32px] lg:pt-[19px] xl:pt-[22px] 3xl:pt-[29px] pt-[33px] 2xl:py-[24px] rounded-radius10 shadow-bs w-[100%]">
                  <Text className="font-extrabold font-jetbrainsmono lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`“`}</Text>
                  <Text className="font-normal font-opensans lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] leading-[30.00px] lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[41px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-bluegray_900 text-left w-[74%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis sodales lorem in tincidunt. Nulla vel ante sem. Quisque sodales, leo in convallis pulvinar, ipsum.`}</Text>
                  <Column className="font-opensans lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]">
                    <Row className="items-start justify-start lg:pl-[23px] xl:pl-[27px] 2xl:pl-[30px] 3xl:pl-[36px] pl-[41px] pr-[105px] lg:pr-[61px] xl:pr-[70px] 2xl:pr-[78px] 3xl:pr-[94px] w-[100%]">
                      <Image
                        src={"images/img_ellipse63_3.png"}
                        className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain rounded-radius50 w-[auto]"
                        alt="Ellipse63"
                      />
                      <Column className="items-start justify-start lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] w-[31%]">
                        <Text className="font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 text-left w-[auto]">{`Peter`}</Text>
                        <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] text-[15px] lg:text-[8px] text-bluegray_900 text-left w-[auto]">{`Student, NITC`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Stack>
        <Stack className="font-jetbrainsmono h-[1109px] lg:h-[647px] xl:h-[740px] 2xl:h-[833px] 3xl:h-[999px] w-[100%]">
          <div className="absolute bg-white_A700 h-[1109px] lg:h-[647px] xl:h-[740px] 2xl:h-[833px] 3xl:h-[999px] inset-[0] w-[100%]"></div>
          <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[81%]">
            <Row className="items-end justify-between w-[100%]">
              <Column className="items-start justify-start w-[49%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`Gallery`}</Text>
                <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px] text-black_900 text-left w-[auto]">{`FOSSMeet in Pictures`}</Text>
                <Column className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mt-[66px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <div className="bg-bluegray_100 lg:h-[121px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] h-[207px] w-[50%]"></div>
                    <div className="bg-bluegray_100 lg:h-[121px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] h-[207px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] w-[47%]"></div>
                  </Row>
                  <div className="bg-bluegray_100 lg:h-[242px] xl:h-[277px] 2xl:h-[311px] 3xl:h-[373px] h-[414px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[100%]"></div>
                </Column>
              </Column>
              <Column className="lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[107px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[161px] lg:mt-[93px] w-[49%]">
                <div className="bg-bluegray_100 lg:h-[242px] xl:h-[277px] 2xl:h-[311px] 3xl:h-[373px] h-[414px] w-[100%]"></div>
                <Row className="items-center justify-between lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[100%]">
                  <div className="bg-bluegray_100 lg:h-[121px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] h-[207px] w-[47%]"></div>
                  <div className="bg-bluegray_100 lg:h-[121px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] h-[207px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] w-[50%]"></div>
                </Row>
              </Column>
            </Row>
            <Text className="font-normal italic lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] mx-[auto] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-black_900 text-left w-[auto]">{`View Full Gallery >`}</Text>
          </Column>
        </Stack>
        <Column className="bg-white_A700 font-jetbrainsmono items-start justify-start lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] pb-[20px] w-[100%]">
          <Column className="w-[100%]">
            <Line className="bg-bluegray_101 h-[1px] w-[100%]" />
            <Row className="items-center justify-start lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] lg:pl-[107px] xl:pl-[123px] 2xl:pl-[138px] 3xl:pl-[166px] pl-[185px] 2xl:pr-[1022px] 3xl:pr-[1226px] pr-[1362px] lg:pr-[794px] xl:pr-[908px] w-[100%]">
              <Image
                src={"images/img_fosscell1.png"}
                className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain w-[8%]"
                alt="FOSSCell1"
              />
              <Image
                src={"images/img_csea1.png"}
                className="lg:h-[47px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[72px] h-[79px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] my-[1px] object-contain w-[4%]"
                alt="csea1"
              />
              <Image
                src={"images/img_nitc1.png"}
                className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] h-[83px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain w-[4%]"
                alt="nitc1"
              />
            </Row>
          </Column>
          <Text className="font-normal leading-[normal] lg:ml-[107px] xl:ml-[123px] 2xl:ml-[138px] 3xl:ml-[166px] ml-[185px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_400 text-left w-[22%]">{`FOSSMeet’23 - an event conducted by FOSSCell and CSEA of National Institute of Technology, Calicut`}</Text>
          <Text className="font-normal lg:ml-[107px] xl:ml-[123px] 2xl:ml-[138px] 3xl:ml-[166px] ml-[185px] 3xl:mt-[102px] mt-[114px] lg:mt-[66px] xl:mt-[76px] 2xl:mt-[85px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-bluegray_400 text-left w-[auto]">{`Follow us on our Socials!`}</Text>
        </Column>
      </Column>
    </>
  );
};

export default LandingPagePage;
