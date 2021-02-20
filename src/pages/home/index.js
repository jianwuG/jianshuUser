import React, {PureComponent} from 'react'
import style from '@pages/home/home.module.less'

class Home extends PureComponent {
    render() {
        return (
            <>
                <div className={style.homeContent}>
                    Home
                </div>
            </>
        )
    }
}

export default Home;
