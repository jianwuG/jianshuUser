import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {actionCreators} from '@pages/home/store'
import style from './index.module.less'

class Focus extends PureComponent {
    componentDidMount() {
        this.props.getFansList();
    }

    getList() {
        const {focusIndex, fansInfo} = this.props;
        const info = fansInfo.toJS();

        const list = focusIndex === 0 ? info.fansList : info.lookList;
        return (
            <div>
                {
                    list && list.map(item => (
                            <div className={style.manItem} key={item.id} onClick={this.goMan}>
                                {item.name}
                            </div>
                        )
                    )
                }
            </div>
        )

    }

    render() {
        const {focusIndex, setFocusIndex, fansInfo} = this.props;

        return (
            <>
                <div className={style.focusDiv}>
                    <div className={focusIndex === 0 ? style.focusTabItemSelect : style.focusTabItem}
                         onClick={() => setFocusIndex(0)}>
                        <span>关注用户</span>
                    </div>
                    <div className={focusIndex === 1 ? style.focusTabItemSelect : style.focusTabItem}
                         onClick={() => setFocusIndex(1)}>
                        <span>粉丝</span>
                    </div>
                </div>
                <div>
                    {
                        this.getList()
                    }
                </div>
            </>
        )
    }
    goMan=async()=>{
        window.location.reload();
        // this.props.history.push('/home');
    }
}

const mapStateToProps = (state) => {
    return {
        focusIndex: state.getIn(['home', 'focusIndex']),
        fansInfo: state.getIn(['home', 'fansInfo']),
    }
}
const mapDispatchToProps = (dispath) => {
    return {
        setFocusIndex(index) {
            dispath(actionCreators.setFocusIndex(index));
        },
        getFansList() {
            dispath(actionCreators.getFans())
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Focus));
