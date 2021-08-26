import React from 'react'
import DrawCards from '../../components/drawCardComponent/drawCard'

import './styles.css'

const App = () => {

  const fakeDataArray = [
    {
      name: `Master Chief`,
      edad: 48,
      isAlive: `alive`,
      profile: "https://www.tonica.la/__export/1613324345961/sites/debate/img/2021/02/14/master-chief-halo-3.jpg_1902800913.jpg"
    },
    {
      name: `Sealthiel`,
      edad: 21,
      isAlive: `alive`,
      profile: "https://scontent-qro1-1.xx.fbcdn.net/v/t1.6435-9/98036736_1561637477347983_5776701244701671424_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFyk5Zrr19tSnK0tpdkJT5-xHbiAhz7j3rEduICHPuPel8nrWIlMdfTBKMIK-Ouu6v53Kq8fhuoAnVDyKu7s5aF&_nc_ohc=1WvBw4WJM40AX9Fu5rv&tn=rIZ4WdRu_NcyHPhN&_nc_ht=scontent-qro1-1.xx&oh=234a42fe2eac8925d55c185882c44e57&oe=614A4731"
    },
    {
      name: `Jacquie bb`,
      edad: 18,
      isAlive: `alive`,
      profile: "https://scontent-qro1-1.xx.fbcdn.net/v/t39.30808-6/234160268_2857442677900338_6145054647367469488_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH-T9uJ7EOE2xBqx3i3achEtL-JccqPiKq0v4lxyo-IqqQjrqONVbCroeWsttwZn4hT-0YG8UjkuHdZ5SmaANFD&_nc_ohc=V9sXDCiphVoAX8p_sr-&_nc_oc=AQm4acnk-Q9e9SaWddU-8HFGs7vSIclVQNyEvye0fXb3hZqszpZ8Xj7HhxYOr66UyuI&_nc_ht=scontent-qro1-1.xx&oh=212f510a5dea25b1d744035270a5a02b&oe=612A427E"
    },

    {
      name: `Daniel`,
      edad: 19,
      isAlive: `alive`,
      profile: "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/175449352_1867196013457587_6902480668799050805_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFSLxei-wzX_XDER5If4-Hnxc7i9KdFzhLFzuL0p0XOEsEuM00l_knDe-8-AZuW_8-uI77gxwkEWRmn8EXewGTy&_nc_ohc=dlXEMaCAVcoAX8CwF_x&_nc_ht=scontent.fmex3-1.fna&oh=dd012f955e51c160a23225c9772127cc&oe=614C4045"
    },

    {
      name: `Yalin`,
      edad: 15,
      isAlive: `alive`,
      profile: "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/214185629_1700227613503054_6224875017943223007_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGd2rSiSJSqxTJql5V7JzbcdkZWkGdUJSF2RlaQZ1QlIYeDgJR8nFmMhqFrfYeS4ePEzQ7EvH26zDxHRshUwRah&_nc_ohc=FWffvC2S6AgAX9IlTd_&tn=rIZ4WdRu_NcyHPhN&_nc_ht=scontent.fmex3-1.fna&oh=e50ac9c2573027a102f2bdb2c6c2e9fe&oe=6149D55D"
    },

    {
      name: `Esteban`,
      edad: 23,
      isAlive: `alive`,
      profile: "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.6435-9/64992526_2348598701862195_4237445331580616704_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeETnGOBHP7vq9mZ58HFxjSfT83JC0Ov8O5PzckLQ6_w7qBzE-zjNqEoG_P_wsUc_O6YK35aWKoc8IrltB1tQBK2&_nc_ohc=zfhAAt_1_GsAX8FIDY7&_nc_ht=scontent.fmex3-1.fna&oh=87cb7d340f2070a5cb0d0a7834a30dec&oe=6149AD07"
    },

    {
      name: `Levi`,
      edad: 30,
      isAlive: `alive`,
      profile: "http://pm1.narvii.com/6533/74a6e18c1585abd38dfc1d5c2484ade0da83d79b_00.jpg"
    },

    {
      name: `Mikasa bb`,
      edad: 22,
      isAlive: `alive`,
      profile: "https://i.pinimg.com/474x/d8/83/a5/d883a56868175d6063c6c34006fb7792.jpg"
    },

    {
      name: `Armin`,
      edad: 19,
      isAlive: `alive`,
      profile: "https://i.pinimg.com/originals/6d/3d/bb/6d3dbb43ffcd57929724ac6ae5f1f3af.jpg"
    },

    {
      name: `Kwami`,
      edad: 1,
      isAlive: `alive`,
      profile: "https://estaticos.muyinteresante.es/uploads/images/gallery/5b6bfe6b5cafe8dac523a6d3/1-erizo-feliz-tumbado-con-calcetines.jpg"
    },

    {
      name: `NobleSix`,
      edad: 34,
      isAlive: `dead`,
      profile: "http://pm1.narvii.com/6788/9ea5cf7afcf0d37b3188dc323638fc765e65aa74v2_00.jpg"
    },

    {
      name: `Edward Thatch`,
      edad: 40,
      isAlive: `dead`,
      profile: "https://www.mundoespadas.com/wp-content/uploads/2016/09/EDWARD-TEACH-BARBANEGRA.jpg"
    },

    {
      name: `Edward Kenway`,
      edad: 42,
      isAlive: `dead`,
      profile: "http://pm1.narvii.com/6966/af5f7a2483e75b9702f103cd9c3badb8b4a19d2dr1-500-750v2_uhq.jpg"
    },

    {
      name: `Michael Jackson`,
      edad: 50,
      isAlive: `dead`,
      profile: "https://i.pinimg.com/originals/97/98/64/9798648ec39d5e999f8686a1ed2ab4b1.jpg"
    },

    {
      name: `Itachi`,
      edad: 21,
      isAlive: `dead`,
      profile: "https://i.pinimg.com/originals/37/9a/af/379aafab0c2da1a06cd05e527d4cc28a.jpg"
    },
    {
      name: `L`,
      edad: 22,
      isAlive: `missing`,
      profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DEATH_NOTE_L_wallpaper.jpg/640px-DEATH_NOTE_L_wallpaper.jpg"
    },
    {
      name: `Misa Amane`,
      edad: 19,
      isAlive: `missing`,
      profile: "https://1.bp.blogspot.com/-w9c2EPDhaHY/VtXf7BAq2JI/AAAAAAAACuc/yiy8o3-zv8Q/s1600/MISAAMANEDN.jpg"
    },
    {
      name: `Near`,
      edad: 28,
      isAlive: `missing`,
      profile: "https://i.pinimg.com/originals/b5/9a/7f/b59a7fcb4c8d9e3fb83259292811aa2a.jpg"
    },
    {
      name: `Gary`,
      edad: 30,
      isAlive: `missing`,
      profile: "https://i.pinimg.com/originals/94/6f/42/946f42754ec700370a984341ae36e655.png"
    },
    {
      name: `Paul`,
      edad: 60,
      isAlive: `missing`,
      profile: "https://i.pinimg.com/736x/46/01/21/4601210a106ffb0d671c197dc300a0f6.jpg"
    }
  ]
  return (
    <div>
    <div className= "searchBar" >
    <div> hola aqui ando </div>
    </div>
      <div className="alignItems">
        {
          fakeDataArray.map(user => (
            <DrawCards user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default App