import React, {PureComponent} from 'react';
// import style from


class wordTab extends PureComponent {
    render() {
        return (
            <>
                <div className={super.wordTab}>
                   <div className={style.wordTabItem}>
                       <i className='iconfont'></i>
                       <span>文章</span>
                   </div>
                    <div>
                        <i className='iconfont'></i>
                        <span>文章</span>
                    </div>
                    <div>
                        <i className='iconfont'></i>
                        <span>文章</span>
                    </div>
                    <div>
                        <i className='iconfont'></i>
                        <span>文章</span>
                    </div>
                </div>
            </>
        )
    }
}

export default wordTab;