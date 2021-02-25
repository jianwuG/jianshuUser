import React, {PureComponent} from 'react'
import Header from '@common/header';
import style from '@pages/detail/detail.module.less'


class Detail extends PureComponent {
    render() {
        return (
            <>
                <Header></Header>
                <div className={style.detail}>
                    Detail
                </div>
            </>
        )
    }
}
export default Detail;
