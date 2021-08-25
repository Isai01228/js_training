import React from 'react'
import DrawCards from '../../components/drawCardComponent/drawCard'

import './styles.css'

const App = () => {

const fakeDataArray = [
    {
        name: `Master Chief`,
        edad: `48 years`,
        isAlive: `alive`,
        profile: (<img src="https://www.tonica.la/__export/1613324345961/sites/debate/img/2021/02/14/master-chief-halo-3.jpg_1902800913.jpg" />)
    },
    {
      name: `Sealthiel`,
      edad: `21 years`,
      isAlive: `alive`,
      profile: (<img src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/98036736_1561637477347983_5776701244701671424_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFyk5Zrr19tSnK0tpdkJT5-xHbiAhz7j3rEduICHPuPel8nrWIlMdfTBKMIK-Ouu6v53Kq8fhuoAnVDyKu7s5aF&_nc_ohc=1WvBw4WJM40AX9Fu5rv&tn=rIZ4WdRu_NcyHPhN&_nc_ht=scontent-qro1-1.xx&oh=234a42fe2eac8925d55c185882c44e57&oe=614A4731" />)
    },
    {
      name: `Jacquie bb`,
      edad: `18 years`,
      isAlive: `alive`,
      profile: (<img src="https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/234160268_2857442677900338_6145054647367469488_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH-T9uJ7EOE2xBqx3i3achEtL-JccqPiKq0v4lxyo-IqqQjrqONVbCroeWsttwZn4hT-0YG8UjkuHdZ5SmaANFD&_nc_ohc=V9sXDCiphVoAX8p_sr-&_nc_oc=AQm4acnk-Q9e9SaWddU-8HFGs7vSIclVQNyEvye0fXb3hZqszpZ8Xj7HhxYOr66UyuI&_nc_ht=scontent-qro1-1.xx&oh=212f510a5dea25b1d744035270a5a02b&oe=612A427E" />)
    },

    {
      name: `Daniel`,
      edad: `19 years`,
      isAlive: `alive`,
      profile: (<img src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/175449352_1867196013457587_6902480668799050805_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFSLxei-wzX_XDER5If4-Hnxc7i9KdFzhLFzuL0p0XOEsEuM00l_knDe-8-AZuW_8-uI77gxwkEWRmn8EXewGTy&_nc_ohc=dlXEMaCAVcoAX8CwF_x&_nc_ht=scontent.fmex3-1.fna&oh=dd012f955e51c160a23225c9772127cc&oe=614C4045" />)
    },

    {
      name: `Yalin`,
      edad: `15 years`,
      isAlive: `alive`,
      profile: (<img src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/214185629_1700227613503054_6224875017943223007_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGd2rSiSJSqxTJql5V7JzbcdkZWkGdUJSF2RlaQZ1QlIYeDgJR8nFmMhqFrfYeS4ePEzQ7EvH26zDxHRshUwRah&_nc_ohc=FWffvC2S6AgAX9IlTd_&tn=rIZ4WdRu_NcyHPhN&_nc_ht=scontent.fmex3-1.fna&oh=e50ac9c2573027a102f2bdb2c6c2e9fe&oe=6149D55D" />)
    },

    {
      name: `Esteban`,
      edad: `23 years`,
      isAlive: `alive`,
      profile: (<img src="https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/64992526_2348598701862195_4237445331580616704_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeETnGOBHP7vq9mZ58HFxjSfT83JC0Ov8O5PzckLQ6_w7qBzE-zjNqEoG_P_wsUc_O6YK35aWKoc8IrltB1tQBK2&_nc_ohc=zfhAAt_1_GsAX8FIDY7&_nc_ht=scontent.fmex3-1.fna&oh=87cb7d340f2070a5cb0d0a7834a30dec&oe=6149AD07" />)
    },

    {
      name: `Levi`,
      edad: `30 years`,
      isAlive: `alive`,
      profile: (<img src="http://pm1.narvii.com/6533/74a6e18c1585abd38dfc1d5c2484ade0da83d79b_00.jpg" />)
    },

    {
      name: `Mikasa bb`,
      edad: `22 years`,
      isAlive: `alive`,
      profile: (<img src="https://i.pinimg.com/474x/d8/83/a5/d883a56868175d6063c6c34006fb7792.jpg" />)
    },

    {
      name: `Armin`,
      edad: `19 years`,
      isAlive: `alive`,
      profile: (<img src="https://i.pinimg.com/originals/6d/3d/bb/6d3dbb43ffcd57929724ac6ae5f1f3af.jpg" />)
    },

    {
      name: `kwami`,
      edad: `1 year`,
      isAlive: `alive`,
      profile: (<img src="https://estaticos.muyinteresante.es/uploads/images/gallery/5b6bfe6b5cafe8dac523a6d3/1-erizo-feliz-tumbado-con-calcetines.jpg" />)
    }
]

    return (
        <div>
            <div className= "alignItems">
            {
                fakeDataArray.map(user => (
                        <DrawCards user={user}/>
                ))
            }
            </div>
        </div>
    )
}

export default App