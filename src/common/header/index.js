import React, {PureComponent} from 'react'
import style from '@common/header/header.module.less'
import logoIcon from '@assets/logo.png'

class Header extends PureComponent {
    constructor(){
      super();
      this.state={
          hasToken:true
      }
    };
    render() {
        console.log('111111',logoIcon);
        return (
            <>
                <div className={style.headerDiv}>
                    <a href='/' className={style.headerLogo}>
                        <img alt="logo" src={logoIcon} />
                    </a>
                    {
                        this.state.hasToken?
                            <div className={style.herderContext}>
                            <span className="iconfont iconfaxian">首页</span>
                            <span className="iconfont iconxiazai">下载app</span>
                        </div>:null
                    }

                </div>
            </>
        )
    }
}
export default Header;
