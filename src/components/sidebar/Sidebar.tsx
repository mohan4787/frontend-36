
import logo from "../../assets/images/logo.png"
import Sider from "antd/es/layout/Sider"
import {Menu} from "antd"
import type { IMenuItem} from "../../config/menu-Item"


const Sidebar = ({collapsed,menu}:Readonly<{collapsed:boolean,menu:Array<IMenuItem>}>) => {
  return (
    <>
       <Sider trigger={null} collapsible collapsed={collapsed} className="bg-gray-300">
          <div className="demo-logo-vertical " >
            <img src={logo} alt="" className='h-20 mx-13 mt-2 w-20 rounded-full border-2 border-white' />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={menu}
          />
        </Sider>
    </>
  )
}

export default Sidebar
