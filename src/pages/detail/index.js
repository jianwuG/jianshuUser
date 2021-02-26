import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import Header from '@common/header';
import {actionCreators} from './store'
import style from '@pages/detail/detail.module.less'


class Detail extends PureComponent {
    componentDidMount() {
       this.props.getDetail();
    }

    render() {
        const {detailInfo}=this.props;
        const info=detailInfo.toJS();
        return (
            <>
                <Header></Header>
                <div className={style.detail}>
                    <div className={style.detailContext}>
                        <div className={style.contextTitle}>
                            <h1 className={style.title}>{info.title}</h1>
                            <div className={style.contextBlogger}>
                              <img src={info.img} alt=""/>
                              <div className={style.contextBloggerInfo}>
                                  <span>{info.name}</span>
                                  <span>{info.date}</span>
                              </div>
                            </div>
                        </div>
                        <div className={style.contextDiv}>
                            {
                                info.isShowUrl&&<img src={info.wordUrl} alt=''/>
                            }
                            <span> {info.word}</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        detailInfo:state.getIn(['detail','detailInfo'])
    }
}

const mapDispatchToProps=(dispath)=>{
    return{
       getDetail(){
           dispath(actionCreators.getDetailInfo())
       }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);
