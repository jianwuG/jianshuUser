import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {actionCreators} from '@pages/home/store'
import style from './index.module.less'


class wordTab extends PureComponent {
    componentDidMount() {
        this.props.setIndex(0,this.props.tabIndex);
    }

    render() {
        const {tabIndex,setIndex,wordList}=this.props
        return (
            <>
                <div className={style.wordTab}>
                    <div className={tabIndex===0?style.wordTabItemSelect:style.wordTabItem} onClick={()=>setIndex(0,tabIndex)}>
                        <i className='iconfont iconai-article'></i>
                        <span>文章</span>
                    </div>
                    <div className={tabIndex===1?style.wordTabItemSelect:style.wordTabItem} onClick={()=>setIndex(1,tabIndex)}>
                        <i className='iconfont iconnews'></i>
                        <span>动态</span>
                    </div>
                    <div className={tabIndex===2?style.wordTabItemSelect:style.wordTabItem} onClick={()=>setIndex(2,tabIndex)}>
                        <i className='iconfont iconpinglun1'></i>
                        <span>最新评论</span>
                    </div>
                    <div className={tabIndex===3?style.wordTabItemSelect:style.wordTabItem} onClick={()=>setIndex(3,tabIndex)}>
                        <i className='iconfont iconremen'></i>
                        <span>热门</span>
                    </div>
                </div>

                <div className={style.wordContext}>
                    {

                        wordList&&wordList.toJS().map(item=>(
                            <div className={style.wordItem} onClick={()=>this.goDetail(item.id)} key={item.id}>
                                <div className={style.wordItemLeft}>
                                    <div className={style.wordItemTitile}>{item.name}</div>
                                    <div className={style.wordItemText}>{item.wordContext}</div>
                                    <div className={style.wordItemInfo}>
                                    <span>
                                          <i className='iconfont iconzuanshi'></i>
                                    {item.info.zsNum}
                                      </span>
                                        <span>
                                          <i className='iconfont iconchangyongicon--'></i>
                                            {item.info.lkNum}
                                      </span>
                                        <span>
                                          <i className='iconfont iconpinglun1'></i>
                                            {item.info.plNum}
                                      </span>
                                        <span>
                                          <i className='iconfont icon3aixin'></i>
                                            {item.info.dzNum}
                                      </span>
                                        <span>
                                          <i className='iconfont iconxiaoxi'></i>
                                            {item.info.xhNum}
                                      </span>
                                        <span>
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                                <img src={item.img}/>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    };
    goDetail=async (id)=>{
        this.props.history.push(`/detail/${id}`);
    }
}

export const mapStateToProps=(state)=>{
    return{
        tabIndex:state.getIn(['home','tabIndex']),
        wordList:state.getIn(['home','wordList'])
    }
};
export const mapDispatchToProps=(dispath)=>{
    return{
        setIndex(index,tabIndex){
            if(index!==tabIndex){
                dispath(actionCreators.setTabIndex(index));
                dispath(actionCreators.getWordList(index))
            }
        }
    }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(wordTab));
