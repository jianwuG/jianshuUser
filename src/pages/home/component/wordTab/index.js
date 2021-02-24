import React, {PureComponent} from 'react';
import style from './index.module.less'


class wordTab extends PureComponent {
    render() {
        return (
            <>
                <div className={super.wordTab}>
                    <div className={style.wordTabItem}>
                        <i className='iconfont iconai-article'></i>
                        <span>文章</span>
                    </div>
                    <div className={style.wordTabItem}>
                        <i className='iconfont iconnews'></i>
                        <span>动态</span>
                    </div>
                    <div className={style.wordTabItem}>
                        <i className='iconfont iconpinglun1'></i>
                        <span>最新评论</span>
                    </div>
                    <div className={style.wordTabItem}>
                        <i className='iconfont iconremen'></i>
                        <span>热门</span>
                    </div>
                </div>
            </>
        )
    }
}

export default wordTab;
