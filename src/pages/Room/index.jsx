
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams()

const myMeeting =  async (element) => {
    const appID =1123685829 
    const serverSecret = "1f921910f7f8a814e3fc51b3cb988f33";

    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Eshan Shikarkhane"
        );

        const zc=  ZegoUIKitPrebuilt.create(kitToken)

        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url: window.location.href,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },

        })
}

  return (
    <div >
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage