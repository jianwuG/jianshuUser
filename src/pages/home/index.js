import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import style from '@pages/home/home.module.less'
import {actionCreators} from './store';

class Home extends PureComponent {
    componentDidMount() {
        this.props.getBloggerInfo();
    }

    render() {
        const {bloggerInfo} = this.props;
        const {url, name, gender, numInfo} = bloggerInfo.toJS();

        return (
            <>
                <div className={style.homeContent}>
                    <div className={style.contentLeft}>
                        <div className={style.leftUserInfo}>
                            <img src={url} alt="" className={style.userInfoUrl}/>
                            <div className={style.userInfoContext}>
                                <div>
                                    <span>{name}</span>
                                    <span>{gender}</span>
                                </div>
                                {
                                    numInfo &&(
                                    <div>
                                        {
                                            numInfo.map(item=>(
                                    <div>
                                        <span>{item.text}</span>
                                        <span>{item.num}</span>
                                      </div>
                                            ))
                                        }
                                    </div>)

                                }
                            </div>
                            <div className={style.userInfoBtn}>
                                <span>发简信</span>
                                <span>+关注</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.contentRight}>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bloggerInfo: state.getIn(['home', 'bloggerInfo'])
    }
};
const mapDispatchToProps = (dispath) => {
    return {
        getBloggerInfo() {
            dispath(actionCreators.getBloggerInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
